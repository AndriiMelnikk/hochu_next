'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, LogOut } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { cn } from '@/lib/utils';
import { routes } from '@app/router/routes';
import { useAuthStore } from '@/entities/auth/store/authStore';
import { buildAuthHref, getReturnUrlFromLocation } from '@/features/auth';
import { switchLocaleInPathname, type Locale } from '@/locales/config';
import { LS_KEYS } from '@shared/config/envVars';
import Link, { useCurrentLocale } from '@/shared/ui/link';

import { Avatar } from '../components/avatar';
import { MobileMenu } from './mobile-nav';
import { Button } from '../components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/dropdown-menu';

const LOCALES: ReadonlyArray<{ locale: Locale; label: string }> = [
  { locale: 'uk', label: 'UA' },
  { locale: 'en', label: 'EN' },
];

/** Перемикач мови зі справжніми посиланнями (`<a href hreflang>`), доступними краулерам. */
export function LocaleSwitcher({ vertical }: { vertical?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const current = useCurrentLocale();

  const onClick = (event: React.MouseEvent, locale: Locale) => {
    event.preventDefault();
    if (locale === current) return;
    localStorage.setItem(LS_KEYS.LOCALE, locale);
    // cookie читає proxy для редіректа з непрефіксованих URL
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    router.push(`${switchLocaleInPathname(pathname, locale)}${window.location.search}`);
  };

  return (
    <div className={cn('flex items-center', vertical && 'flex-col')}>
      {LOCALES.map(({ locale, label }) => (
        <NextLink
          key={locale}
          href={switchLocaleInPathname(pathname, locale)}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === current ? 'true' : undefined}
          onClick={(event) => onClick(event, locale)}
          className={cn(
            'inline-flex items-center justify-center rounded-v2-pill px-2 text-sm transition-colors',
            vertical ? 'h-8 min-w-11 text-xs' : 'h-11 min-w-11',
            locale === current
              ? 'font-semibold text-v2-ink'
              : 'font-[450] text-v2-secondary hover:text-v2-ink',
          )}
        >
          {label}
        </NextLink>
      ))}
    </div>
  );
}

const navLinkClass =
  'inline-flex h-11 items-center rounded-v2-sm px-3 text-sm font-[450] text-v2-ink transition-colors hover:text-v2-primary';

type NavItem = { href: string; label: string };

/** Випадне меню розділу навігації (Opportunities▾ в Upwork). */
function NavMenu({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(navLinkClass, 'gap-1 data-[state=open]:text-v2-primary')}>
        {label}
        <ChevronDown className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <NextLink href={item.href}>{item.label}</NextLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Меню акаунта: аватар → профіль, вкладки кабінету, вихід. */
export function AccountMenu({
  items,
  side = 'bottom',
}: {
  items: NavItem[];
  side?: 'bottom' | 'right';
}) {
  const { i18n } = useLingui();
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const name = [user?.profile?.name, user?.profile?.lastName].filter(Boolean).join(' ');

  const onLogout = async () => {
    await logout();
    router.push(routes.HOME);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={i18n._('common.nav.profile')}
        className="rounded-v2-pill outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
      >
        <Avatar size="sm" fallback={name?.[0]} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={side === 'right' ? 'start' : 'end'} side={side} surface="popover">
        <DropdownMenuLabel className="truncate text-v2-ink">{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem key={item.href} compact asChild>
            <NextLink href={item.href}>{item.label}</NextLink>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem compact onSelect={onLogout}>
          <LogOut />
          {i18n._('auth.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Пункти меню акаунта (вкладки кабінету). */
export function useAccountItems(): NavItem[] {
  const { i18n } = useLingui();
  const profileId = useAuthStore((s) => s.user?.profile?._id);
  if (!profileId) return [];
  return [
    { href: routes.DASHBOARD, label: i18n._('profile.tabs.overview') },
    { href: routes.DASHBOARD_NOTIFICATIONS, label: i18n._('profile.tabs.notifications') },
    { href: routes.DASHBOARD_PROFILES, label: i18n._('profile.tabs.profiles') },
    { href: routes.DASHBOARD_REVIEWS, label: i18n._('profile.tabs.reviews') },
    { href: routes.DASHBOARD_SETTINGS, label: i18n._('profile.tabs.settings') },
  ];
}

/** Верхня навігація сайту: логотип, основні розділи, мова, вхід/профіль. */
export function SiteHeader() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname();
  const isAuth = useAuthStore((s) => s.isAuth);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const showAuth = mounted && isAuth;
  // В адмінці навігація — у власній лівій панелі, верхня шапка лише на мобільному
  const hideOnDesktop = showAuth || /^\/(uk|en)\/admin(?!\/login)(\/|$)/.test(pathname);
  const returnUrl = getReturnUrlFromLocation(pathname);
  const loginHref = buildAuthHref(routes.LOGIN, returnUrl);
  const registerHref = buildAuthHref(routes.REGISTER, returnUrl);

  const links = [
    { href: routes.REQUEST, label: t('common.nav.viewRequests') },
    { href: routes.CREATE, label: t('common.nav.createRequest') },
    { href: routes.CATEGORIES, label: t('common.nav.categories') },
    { href: routes.HOW_IT_WORKS, label: t('common.nav.howItWorks') },
  ];
  const accountItems = useAccountItems();

  return (
    <header
      className={cn(
        'ui-v2 sticky top-0 z-50 border-b border-v2-border bg-v2-surface pt-[env(safe-area-inset-top)]',
        // для залогінених на md+ навігація — у лівій панелі
        hideOnDesktop && 'md:hidden',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link
            href={routes.HOME}
            aria-label="Shukayu"
            className="text-2xl font-semibold tracking-tight text-v2-primary"
          >
            {/* Залогінений на мобільному: компактна кругла позначка, як «up» в Upwork */}
            {showAuth && (
              <span
                aria-hidden
                className="flex size-10 items-center justify-center rounded-full bg-v2-primary text-xl text-v2-on-primary md:hidden"
              >
                S
              </span>
            )}
            <span className={cn(showAuth && 'hidden md:inline')}>Shukayu</span>
          </Link>
          <nav aria-label="Main" className="hidden items-center md:flex">
            {showAuth ? (
              <>
                <NavMenu label={t('common.nav.requests')} items={links.slice(0, 3)} />
                <Link href={links[3].href} className={navLinkClass}>
                  {links[3].label}
                </Link>
              </>
            ) : (
              links.map((l) => (
                <Link key={l.href} href={l.href} className={navLinkClass}>
                  {l.label}
                </Link>
              ))
            )}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          {showAuth ? (
            <AccountMenu items={accountItems} />
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href={loginHref}>{t('common.nav.login')}</Link>
              </Button>
              <Button asChild>
                <Link href={registerHref}>{t('common.nav.register')}</Link>
              </Button>
            </>
          )}
        </div>

        <MobileMenu
          authenticated={showAuth}
          links={links}
          accountItems={accountItems}
          loginHref={loginHref}
          registerHref={registerHref}
        />
      </div>
    </header>
  );
}
