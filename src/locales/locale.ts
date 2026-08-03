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
