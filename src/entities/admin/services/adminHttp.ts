/** Запити йдуть на same-origin проксі, що підставляє JWT адміна з httpOnly-cookie. */
const BASE = '/api/admin-proxy';

export class AdminApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'AdminApiError';
  }
}

function redirectToLogin() {
  if (typeof window === 'undefined') return;
  if (window.location.pathname.includes('/admin/login')) return;
  const locale = window.location.pathname.split('/')[1] || 'uk';
  const returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
  window.location.assign(`/${locale}/admin/login?returnUrl=${returnUrl}`);
}

export async function adminCall<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    credentials: 'same-origin',
  });
  if (response.status === 401) {
    redirectToLogin();
    throw new AdminApiError(401, 'unauthorized');
  }
  const data = (await response.json().catch(() => null)) as unknown;
  if (!response.ok) {
    // Бекенд віддає { error: { message } } (глобальний фільтр) або стандартний { message }
    const body = data as { message?: string | string[]; error?: { message?: string | string[] } };
    const raw = body?.error?.message ?? body?.message;
    throw new AdminApiError(
      response.status,
      (Array.isArray(raw) ? raw[0] : raw) ?? 'request_failed',
    );
  }
  return data as T;
}
