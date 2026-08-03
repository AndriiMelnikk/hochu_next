// Чиста (isomorphic) конфігурація локалей — без імпортів next/headers,
// тому може використовуватись і в клієнтських компонентах, і в middleware.

export type Locale = 'en' | 'uk';

export const locales: Locale[] = ['uk', 'en'];

export const defaultLocale: Locale = 'uk';

export const LOCALE_COOKIE = 'locale';

/** Назва request-заголовка, який middleware виставляє з мовного префікса URL */
export const LOCALE_HEADER = 'x-locale';

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'uk' || value === 'en';
}

export function resolveLocale(acceptLanguageHeader?: string | null): Locale {
  if (!acceptLanguageHeader) {
    return defaultLocale;
  }

  const requested = acceptLanguageHeader
    .split(',')
    .map((part) => part.trim().split(';')[0]?.toLowerCase())
    .filter(Boolean) as string[];

  if (requested.some((locale) => locale.startsWith('uk'))) {
    return 'uk';
  }

  if (requested.some((locale) => locale.startsWith('en'))) {
    return 'en';
  }

  return defaultLocale;
}

/**
 * Додає мовний префікс до внутрішнього шляху.
 * Зовнішні URL, mailto:, tel:, #якорі та вже префіксовані шляхи не змінюються.
 */
export function localizeHref(locale: Locale, href: string): string {
  if (!href.startsWith('/')) {
    return href;
  }

  const firstSegment = href.split('/')[1]?.split(/[?#]/)[0];
  if (isLocale(firstSegment)) {
    return href;
  }

  return `/${locale}${href === '/' ? '' : href}`;
}

/** Замінює мовний префікс у поточному pathname (для перемикача мови). */
export function switchLocaleInPathname(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split('/');
  if (isLocale(segments[1])) {
    segments[1] = nextLocale;
    return segments.join('/') || `/${nextLocale}`;
  }
  return localizeHref(nextLocale, pathname);
}
