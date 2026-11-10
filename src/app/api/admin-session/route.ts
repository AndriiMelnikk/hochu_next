import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_API_TOKEN_COOKIE,
  ADMIN_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  adminApiBaseUrl,
  adminCookieOptions,
  createAdminToken,
} from '@/lib/adminSession';

/**
 * Вхід в адмінку. Облікові дані перевіряє бекенд (`POST /api/admin/auth/login`), він же видає JWT.
 * Тут ми лише кладемо результат у httpOnly-cookie: підписану сесію (для guard сторінок у proxy.ts)
 * та сам токен бекенду (для admin-proxy).
 */
export async function POST(request: NextRequest) {
  if (!process.env.AUTH_SECRET) {
    return NextResponse.json({ error: 'not_configured' }, { status: 500 });
  }

  const body = (await request.json().catch(() => null)) as {
    login?: unknown;
    password?: unknown;
  } | null;
  const login = typeof body?.login === 'string' ? body.login : '';
  const password = typeof body?.password === 'string' ? body.password : '';

  let upstream: Response;
  try {
    upstream = await fetch(`${adminApiBaseUrl()}/api/admin/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Бекенд рахує спроби за IP: передаємо адресу справжнього клієнта
        'X-Forwarded-For': request.headers.get('x-forwarded-for') ?? '',
      },
      body: JSON.stringify({ login, password }),
      cache: 'no-store',
    });
  } catch {
    return NextResponse.json({ error: 'backend_unavailable' }, { status: 502 });
  }

  if (upstream.status === 429) {
    return NextResponse.json({ error: 'too_many_attempts' }, { status: 429 });
  }
  if (upstream.status === 503) {
    return NextResponse.json({ error: 'not_configured' }, { status: 500 });
  }
  if (upstream.status === 400 || upstream.status === 401) {
    return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 });
  }
  if (!upstream.ok) {
    return NextResponse.json({ error: 'backend_unavailable' }, { status: 502 });
  }

  const { accessToken, expiresIn } = (await upstream.json()) as {
    accessToken?: string;
    expiresIn?: number;
  };
  if (!accessToken) return NextResponse.json({ error: 'backend_unavailable' }, { status: 502 });

  const maxAge = Math.min(expiresIn ?? ADMIN_SESSION_MAX_AGE, ADMIN_SESSION_MAX_AGE);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, await createAdminToken(login), {
    ...adminCookieOptions,
    maxAge,
  });
  response.cookies.set(ADMIN_API_TOKEN_COOKIE, accessToken, { ...adminCookieOptions, maxAge });
  return response;
}

/** Вихід: очищає обидві cookie. */
export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  for (const name of [ADMIN_COOKIE, ADMIN_API_TOKEN_COOKIE]) {
    response.cookies.set(name, '', { ...adminCookieOptions, maxAge: 0 });
  }
  return response;
}
