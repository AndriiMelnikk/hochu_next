import type { Metadata } from 'next';

import type { Locale } from '@/locales/config';
import { defaultMetadata as enDefault, routeMetadata as enRoutes } from '@/locales/en/metadata';
import { defaultMetadata as ukDefault, routeMetadata as ukRoutes } from '@/locales/uk/metadata';
import { routes } from '@/app/router/routes';
import { siteUrl } from '@/shared/config/envVars';

const metadataByLocale = {
  en: {
    default: enDefault,
    routes: enRoutes,
  },
  uk: {
    default: ukDefault,
    routes: ukRoutes,
  },
} as const;

/** Приватні/службові сторінки, які не повинні індексуватись */
const NOINDEX_ROUTES: ReadonlySet<keyof typeof routes> = new Set([
  'ADMIN',
  'PROFILE',
  'FORGOT_PASSWORD',
  'RESET_PASSWORD',
  'GOOGLE_AUTH_COMPLETE',
] as const);

const OG_LOCALE: Record<Locale, string> = {
  uk: 'uk_UA',
  en: 'en_US',
};

function localizedUrl(locale: Locale, path: string): string {
  return `${siteUrl}/${locale}${path === '/' ? '' : path}`;
}

/** canonical + hreflang-альтернативи для шляху без мовного префікса */
export function buildAlternates(locale: Locale, path: string): Metadata['alternates'] {
  return {
    canonical: localizedUrl(locale, path),
    languages: {
      uk: localizedUrl('uk', path),
      en: localizedUrl('en', path),
      'x-default': localizedUrl('uk', path),
    },
  };
}

/**
 * Дефолтні метадані для кореневого layout — без canonical/hreflang,
 * щоб сторінки без власних alternates не успадковували чужий canonical.
 */
export function getDefaultMetadata(locale: Locale): Metadata {
  const defaults = metadataByLocale[locale].default;
  const title = typeof defaults.title === 'string' ? defaults.title : 'Shukayu';
  const description = defaults.description ?? undefined;

  return {
    metadataBase: new URL(siteUrl),
    ...defaults,
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: 'Shukayu',
      locale: OG_LOCALE[locale],
      title,
      description,
      url: siteUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/**
 * Метадані сторінки: title/description з локалізованих словників +
 * canonical, hreflang, meta robots, Open Graph і Twitter card.
 *
 * @param path — шлях без мовного префікса (обов'язково для динамічних маршрутів,
 *               для статичних береться з констант routes)
 */
export function getMetadataForRoute(
  locale: Locale,
  route: keyof typeof routes,
  path?: string,
): Metadata {
  const metadataSet = metadataByLocale[locale];
  const routeMetadata = metadataSet.routes[route];

  const merged: Metadata = {
    ...metadataSet.default,
    ...routeMetadata,
  };

  const routeConst = routes[route];
  const routePath = path ?? (typeof routeConst === 'string' ? routeConst : undefined);
  const noindex = NOINDEX_ROUTES.has(route);

  const title = typeof merged.title === 'string' ? merged.title : 'Shukayu';
  const description = merged.description ?? undefined;

  const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    ...merged,
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: 'Shukayu',
      locale: OG_LOCALE[locale],
      title,
      description,
      url: routePath ? localizedUrl(locale, routePath) : siteUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };

  if (routePath && !noindex) {
    metadata.alternates = buildAlternates(locale, routePath);
  }

  return metadata;
}
