import { NextRequest, NextResponse } from 'next/server';

const LOCALES = ['uk', 'en'] as const;
type Locale = (typeof LOCALES)[number];

const DEFAULT_LOCALE: Locale = 'uk';
const LOCALE_COOKIE = 'locale';
const LOCALE_HEADER = 'x-locale';

function isLocale(value: string | undefined | null): value is Locale {
  return value === 'uk' || value === 'en';
}

function resolveLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const requested = acceptLanguage
    .split(',')
    .map((part) => part.trim().split(';')[0]?.toLowerCase())
    .filter(Boolean) as string[];

  if (requested.some((locale) => locale.startsWith('uk'))) return 'uk';
  if (requested.some((locale) => locale.startsWith('en'))) return 'en';

  return DEFAULT_LOCALE;
}

function detectPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieLocale)) return cookieLocale;

  return resolveLocaleFromAcceptLanguage(request.headers.get('accept-language'));
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const firstSegment = pathname.split('/')[1];

  // Шлях уже має мовний префікс: прокидаємо локаль у request-заголовок
  // (використовується getLocaleFromHeaders на сервері) та синхронізуємо cookie.
  if (isLocale(firstSegment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_HEADER, firstSegment);

    const response = NextResponse.next({ request: { headers: requestHeaders } });

    if (request.cookies.get(LOCALE_COOKIE)?.value !== firstSegment) {
      response.cookies.set(LOCALE_COOKIE, firstSegment, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
      });
    }

    return response;
  }

  // Шлях без префікса (у т.ч. старі URL з листів/закладок) —
  // permanent redirect на версію з мовним префіксом.
  const locale = detectPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  url.search = search;

  return NextResponse.redirect(url, 308);
}

export const config = {
  // Виключаємо API, внутрішні ресурси Next та файли зі статичними розширеннями
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
};
