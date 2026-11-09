import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  adminCookieOptions,
  createAdminToken,
  safeEqual,
} from '@/lib/adminSession';

// Проста пам'ять-захист від підбору пароля: 5 спроб / 10 хв на IP (достатньо для одного інстансу).
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

function tooMany(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || entry.resetAt < now) return false;
  return entry.count >= MAX_ATTEMPTS;
}

function registerFailure(ip: string) {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || entry.resetAt < now) attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  else entry.count += 1;
}

/** Вхід в адмінку: перевіряє логін/пароль із серверного env і ставить httpOnly-cookie. */
export async function POST(request: NextRequest) {
  const expectedLogin = process.env.ADMIN_LOGIN;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedLogin || !expectedPassword || !process.env.AUTH_SECRET) {
    return NextResponse.json({ error: 'not_configured' }, { status: 500 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (tooMany(ip)) return NextResponse.json({ error: 'too_many_attempts' }, { status: 429 });

  const body = (await request.json().catch(() => null)) as {
    login?: unknown;
    password?: unknown;
  } | null;
  const login = typeof body?.login === 'string' ? body.login : '';
  const password = typeof body?.password === 'string' ? body.password : '';

  // Обидва порівняння виконуються завжди, щоб не видавати, що саме невірне
  const [okLogin, okPassword] = await Promise.all([
    safeEqual(login, expectedLogin),
    safeEqual(password, expectedPassword),
  ]);
  if (!okLogin || !okPassword) {
    registerFailure(ip);
    return NextResponse.json({ error: 'invalid_credentials' }, { status: 401 });
  }

  attempts.delete(ip);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, await createAdminToken(login), {
    ...adminCookieOptions,
    maxAge: ADMIN_SESSION_MAX_AGE,
  });
  return response;
}

/** Вихід: очищає cookie сесії. */
export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, '', { ...adminCookieOptions, maxAge: 0 });
  return response;
}
