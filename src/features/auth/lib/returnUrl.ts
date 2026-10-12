import { routes } from '@/app/router/routes';
import { isLocale } from '@/locales/config';

export const RETURN_URL_PARAM = 'returnUrl';

/** Auth / recovery routes that must not become post-login destinations. */
const BLOCKED_RETURN_PATHS = [
  routes.LOGIN,
  routes.REGISTER,
  routes.FORGOT_PASSWORD,
  routes.RESET_PASSWORD,
  routes.GOOGLE_AUTH_COMPLETE,
] as const;

function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/');
  if (!isLocale(segments[1])) {
    return pathname || '/';
  }

  const rest = `/${segments.slice(2).join('/')}`;
  if (rest === '/') return '/';
  return rest.replace(/\/+$/, '') || '/';
}

function isBlockedAuthPath(pathnameWithoutLocale: string): boolean {
  return BLOCKED_RETURN_PATHS.some(
    (blocked) =>
      pathnameWithoutLocale === blocked || pathnameWithoutLocale.startsWith(`${blocked}/`),
  );
}

/**
 * Validates and normalizes a post-auth redirect target.
 * Accepts only same-origin relative paths; strips locale prefix; rejects auth pages and home.
 */
export function getSafeReturnUrl(raw: string | null | undefined): string | null {
  if (!raw) return null;

  let decoded: string;
  try {
    decoded = decodeURIComponent(raw.trim());
  } catch {
    return null;
  }

  if (!decoded.startsWith('/') || decoded.startsWith('//') || decoded.includes('://')) {
    return null;
  }

  const pathOnly = decoded.split(/[?#]/)[0] || '/';
  const normalizedPath = stripLocalePrefix(pathOnly);

  if (normalizedPath === '/' || isBlockedAuthPath(normalizedPath)) {
    return null;
  }

  const suffix = decoded.slice(pathOnly.length);
  return `${normalizedPath}${suffix}`;
}

/** Builds `/login?returnUrl=…` (or plain auth route when returnUrl is absent/invalid). */
export function buildAuthHref(
  authRoute: (typeof routes)['LOGIN'] | (typeof routes)['REGISTER'],
  returnUrl?: string | null,
): string {
  const safe = getSafeReturnUrl(returnUrl);
  if (!safe) return authRoute;
  return `${authRoute}?${RETURN_URL_PARAM}=${encodeURIComponent(safe)}`;
}

/** Current page as a safe returnUrl candidate (pathname + optional search). */
export function getReturnUrlFromLocation(pathname: string, search = ''): string | null {
  return getSafeReturnUrl(`${pathname}${search}`);
}

export function resolvePostAuthRedirect(returnUrl: string | null | undefined): string {
  return getSafeReturnUrl(returnUrl) ?? routes.HOME;
}

/** NextAuth callback URL that preserves returnUrl through the Google OAuth round-trip. */
export function buildGoogleAuthCallbackUrl(returnUrl?: string | null): string {
  const safe = getSafeReturnUrl(returnUrl);
  if (!safe) return routes.GOOGLE_AUTH_COMPLETE;
  return `${routes.GOOGLE_AUTH_COMPLETE}?${RETURN_URL_PARAM}=${encodeURIComponent(safe)}`;
}
