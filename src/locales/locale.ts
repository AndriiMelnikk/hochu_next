import { cookies, headers } from 'next/headers';
import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  resolveLocale,
  type Locale,
} from '@/locales/config';

export { defaultLocale, isLocale, locales, resolveLocale, LOCALE_HEADER } from '@/locales/config';
export type { Locale } from '@/locales/config';

export async function getLocaleFromHeaders(): Promise<Locale> {
  try {
    const headerStore = await headers();

    // 1) Локаль з мовного префікса URL (виставляється middleware) — джерело істини
    const pathLocale = headerStore.get(LOCALE_HEADER);
    if (isLocale(pathLocale)) {
      return pathLocale;
    }

    // 2) Fallback: cookie (встановлюється при перемиканні мови)
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
    if (isLocale(cookieLocale)) {
      return cookieLocale;
    }

    // 3) Fallback: Accept-Language
    const acceptLanguage = headerStore.get('accept-language') ?? '';
    return resolveLocale(acceptLanguage);
  } catch {
    return defaultLocale;
  }
}

/** Пропси Next.js для сегмента [locale] (params — Promise у Next 15+). */
export type LocaleRouteProps = { params: Promise<{ locale: string }> };

/**
 * Локаль із params сегмента [locale]. На відміну від getLocaleFromHeaders,
 * не читає headers()/cookies(), тому не змушує сторінку бути динамічною.
 */
export async function getLocaleFromParams(params: Promise<{ locale: string }>): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : defaultLocale;
}
