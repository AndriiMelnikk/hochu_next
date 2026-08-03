'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { localizeHref } from '@/locales/config';
import { useCurrentLocale } from '@/shared/ui/link';

type AppRouter = ReturnType<typeof useRouter>;

/**
 * Обгортка над useRouter, що автоматично додає мовний префікс
 * до внутрішніх шляхів у push/replace/prefetch.
 */
export function useLocalizedRouter(): AppRouter {
  const router = useRouter();
  const locale = useCurrentLocale();

  return useMemo<AppRouter>(
    () => ({
      ...router,
      push: (href, options) => router.push(localizeHref(locale, href), options),
      replace: (href, options) => router.replace(localizeHref(locale, href), options),
      prefetch: (href, options) => router.prefetch(localizeHref(locale, href), options),
    }),
    [router, locale],
  );
}
