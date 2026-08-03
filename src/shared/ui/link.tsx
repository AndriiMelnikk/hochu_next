'use client';

import NextLink from 'next/link';
import { useParams } from 'next/navigation';
import type { ComponentProps } from 'react';
import { defaultLocale, isLocale, localizeHref, type Locale } from '@/locales/config';

/** Поточна локаль з мовного сегмента URL ([locale]). */
export function useCurrentLocale(): Locale {
  const params = useParams<{ locale?: string }>();
  return isLocale(params?.locale) ? params.locale : defaultLocale;
}

type LinkProps = ComponentProps<typeof NextLink>;

/**
 * Обгортка над next/link, що автоматично додає мовний префікс (/uk, /en)
 * до внутрішніх посилань. Зовнішні URL та вже префіксовані шляхи не змінюються.
 */
export default function Link({ href, ...props }: LinkProps) {
  const locale = useCurrentLocale();

  const localizedHref =
    typeof href === 'string'
      ? localizeHref(locale, href)
      : href.pathname
        ? { ...href, pathname: localizeHref(locale, href.pathname) }
        : href;

  return <NextLink href={localizedHref} {...props} />;
}
