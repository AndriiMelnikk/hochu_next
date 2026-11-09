'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useLingui } from '@lingui/react';

import { cn } from '@/lib/utils';
import {
  routes,
  dashboardSettingsPath,
  DASHBOARD_NOTIFICATION_SETTINGS,
} from '@/app/router/routes';
import { useAuthStore } from '@/entities/auth';
import { AuthRequired } from '@/features/auth';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import Link from '@/shared/ui/link';
import { Container, LoadingState } from '@/ui-v2';

const SETTINGS_NAV = ['profile', 'contacts', 'verification', 'privacy'].map((section) => ({
  href: dashboardSettingsPath(section),
  label: `profile.settings.nav.${section}`,
}));

const NOTIFICATIONS_NAV = [
  { href: routes.DASHBOARD_NOTIFICATIONS, label: 'profile.tabs.notifications' },
  { href: DASHBOARD_NOTIFICATION_SETTINGS, label: 'profile.tabs.settings' },
];

/** Старі посилання виду /profile#settings: хеш → окрема сторінка кабінету. */
const HASH_TO_ROUTE: Record<string, string> = {
  notifications: routes.DASHBOARD_NOTIFICATIONS,
  profiles: routes.DASHBOARD_PROFILES,
  reviews: routes.DASHBOARD_REVIEWS,
  settings: routes.DASHBOARD_SETTINGS,
  contacts: dashboardSettingsPath('contacts'),
};

/** Каркас кабінету: ліве меню + контент (як розділи акаунта в Upwork). */
export default function DashboardShell({ children }: { children: ReactNode }) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname().replace(/^\/(uk|en)(?=\/|$)/, '') || '/';
  const router = useLocalizedRouter();
  const { isAuth, isLoading } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = HASH_TO_ROUTE[window.location.hash.replace(/^#/, '')];
    if (target && pathname === routes.DASHBOARD) router.replace(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Бічне підменю є лише в розділах із кількома підсторінками
  const items = pathname.startsWith(routes.DASHBOARD_SETTINGS)
    ? SETTINGS_NAV
    : pathname.startsWith(routes.DASHBOARD_NOTIFICATIONS)
      ? NOTIFICATIONS_NAV
      : null;

  if (!mounted || isLoading) return <LoadingState className="min-h-[50vh]" />;

  if (!isAuth) {
    return (
      <AuthRequired
        title={t('request.profile.authRequired.title')}
        description={t('request.profile.authRequired.description')}
        className="min-h-[50vh]"
      />
    );
  }

  const content = <div className="min-w-0">{children}</div>;

  return (
    <Container className={cn('ui-v2', items && 'max-w-none')}>
      {items ? (
        <div className="grid gap-4 lg:grid-cols-[176px_minmax(0,1fr)] lg:gap-6">
          <nav
            aria-label={t('common.nav.profile')}
            className="-mx-4 flex gap-1 overflow-x-auto px-4 lg:sticky lg:top-24 lg:mx-0 lg:flex-col lg:gap-0 lg:self-start lg:px-0"
          >
            {items.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative flex h-10 shrink-0 items-center px-3 text-sm outline-none transition-colors lg:h-8',
                    'focus-visible:ring-2 focus-visible:ring-v2-primary',
                    active
                      ? 'font-semibold text-v2-ink before:absolute before:inset-y-1 before:left-0 before:w-0.5 before:bg-v2-ink'
                      : 'font-[450] text-v2-secondary hover:text-v2-ink',
                  )}
                >
                  {t(label)}
                </Link>
              );
            })}
          </nav>
          {content}
        </div>
      ) : (
        content
      )}
    </Container>
  );
}
