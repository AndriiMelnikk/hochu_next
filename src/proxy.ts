import { NextRequest, NextResponse } from 'next/server';
import {
  isLocale,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  resolveLocale,
  type Locale,
} from '@/locales/config';
import { ADMIN_COOKIE, verifyAdminToken } from '@/lib/adminSession';

function detectPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieLocale)) return cookieLocale;

  return resolveLocale(request.headers.get('accept-language'));
}

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const firstSegment = pathname.split('/')[1];

  // Адмінка: без валідної сесії — на сторінку входу (окрім самої сторінки входу)
  if (isLocale(firstSegment) && pathname.split('/')[2] === 'admin') {
    const isLoginPage = pathname === `/${firstSegment}/admin/login`;
    const authed = await verifyAdminToken(request.cookies.get(ADMIN_COOKIE)?.value);
    if (!authed && !isLoginPage) {
      const url = request.nextUrl.clone();
      url.pathname = `/${firstSegment}/admin/login`;
      url.search = '';
      url.searchParams.set('returnUrl', `${pathname}${search}`);
      return NextResponse.redirect(url);
    }
    if (authed && isLoginPage) {
      const url = request.nextUrl.clone();
      url.pathname = `/${firstSegment}/admin`;
      url.search = '';
      return NextResponse.redirect(url);
    }
  }

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

  // Шлях без префікса (у т.ч. старі URL з листів/закладок) — редірект на версію
  // з мовним префіксом. Локаль залежить від cookie/Accept-Language, тому редірект
  // тимчасовий (307): постійний 308 браузери кешують і «прикували б» мову.
  const locale = detectPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  url.search = search;

  return NextResponse.redirect(url, 307);
}

export const config = {
  // Виключаємо API, внутрішні ресурси Next та файли зі статичними розширеннями
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
};
