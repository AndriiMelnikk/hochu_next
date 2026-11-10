import { NextRequest, NextResponse } from 'next/server';
import {
  ADMIN_API_TOKEN_COOKIE,
  ADMIN_COOKIE,
  adminApiBaseUrl,
  adminCookieOptions,
  verifyAdminToken,
} from '@/lib/adminSession';

/**
 * Same-origin проксі до адмін-API бекенду. Браузер ніколи не бачить JWT:
 * проксі перевіряє сесію адміна, підставляє Bearer-токен з httpOnly-cookie
 * і пересилає запит на `/api/admin/*`. Інші шляхи бекенду через нього недоступні.
 */
/** Скидає обидві cookie, щоб guard у proxy.ts повернув на форму входу (без циклу редіректів). */
function clearSession(response: NextResponse) {
  for (const name of [ADMIN_COOKIE, ADMIN_API_TOKEN_COOKIE]) {
    response.cookies.set(name, '', { ...adminCookieOptions, maxAge: 0 });
  }
  return response;
}

async function handle(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  if (path.some((segment) => segment === '..' || segment === '.' || segment === '')) {
    return NextResponse.json({ error: 'bad_path' }, { status: 400 });
  }

  const session = request.cookies.get(ADMIN_COOKIE)?.value;
  const token = request.cookies.get(ADMIN_API_TOKEN_COOKIE)?.value;
  if (!token || !(await verifyAdminToken(session))) {
    return clearSession(NextResponse.json({ error: 'unauthorized' }, { status: 401 }));
  }

  const target = `${adminApiBaseUrl()}/api/admin/${path.map(encodeURIComponent).join('/')}${request.nextUrl.search}`;
  const hasBody = !['GET', 'HEAD'].includes(request.method);

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: hasBody ? await request.text() : undefined,
      cache: 'no-store',
    });
  } catch {
    return NextResponse.json({ error: 'backend_unavailable' }, { status: 502 });
  }

  const response = new NextResponse(await upstream.text(), {
    status: upstream.status,
    headers: { 'Content-Type': upstream.headers.get('content-type') ?? 'application/json' },
  });
  // Бекенд не визнав токен (прострочений/відкликаний) — скидаємо сесію, щоб guard повернув на логін
  return upstream.status === 401 ? clearSession(response) : response;
}

export { handle as GET, handle as POST, handle as PATCH, handle as DELETE };
