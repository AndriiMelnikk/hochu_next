'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, UserRound, X } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { cn } from '@/lib/utils';
import { routes } from '@app/router/routes';
import { useAuthStore } from '@/entities/auth/store/authStore';
import { buildAuthHref, getReturnUrlFromLocation } from '@/features/auth';
import { switchLocaleInPathname, type Locale } from '@/locales/config';
import { LS_KEYS } from '@shared/config/envVars';
import Link, { useCurrentLocale } from '@/shared/ui/link';

import { Button } from '../components/button';

const LOCALES: ReadonlyArray<{ locale: Locale; label: string }> = [
  { locale: 'uk', label: 'UA' },
  { locale: 'en', label: 'EN' },
];

/** Перемикач мови зі справжніми посиланнями (`<a href hreflang>`), доступними краулерам. */
function LocaleSwitcher() {
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
    <div className="flex items-center">
      {LOCALES.map(({ locale, label }) => (
        <NextLink
          key={locale}
          href={switchLocaleInPathname(pathname, locale)}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === current ? 'true' : undefined}
          onClick={(event) => onClick(event, locale)}
          className={cn(
            'inline-flex h-11 min-w-11 items-center justify-center rounded-v2-pill px-2 text-sm transition-colors',
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

/** Верхня навігація сайту: логотип, основні розділи, мова, вхід/профіль. */
export function SiteHeader() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname();
  const isAuth = useAuthStore((s) => s.isAuth);
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const showAuth = mounted && isAuth;
  const returnUrl = getReturnUrlFromLocation(pathname);
  const loginHref = buildAuthHref(routes.LOGIN, returnUrl);
  const registerHref = buildAuthHref(routes.REGISTER, returnUrl);

  const links = [
    { href: routes.REQUEST, label: t('common.nav.viewRequests') },
    { href: routes.CREATE, label: t('common.nav.createRequest') },
    { href: routes.CATEGORIES, label: t('common.nav.categories') },
    { href: routes.HOW_IT_WORKS, label: t('common.nav.howItWorks') },
  ];

  const close = () => setOpen(false);

  return (
    <header className="ui-v2 sticky top-0 z-50 border-b border-v2-border bg-v2-surface">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link
            href={routes.HOME}
            className="text-2xl font-semibold tracking-tight text-v2-primary"
            onClick={close}
          >
            Shukayu
          </Link>
          <nav aria-label="Main" className="hidden items-center md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={navLinkClass}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          {showAuth ? (
            <Button asChild variant="ghost" shape="circle" aria-label={t('common.nav.profile')}>
              <Link href={routes.PROFILE}>
                <UserRound className="size-5" />
              </Link>
            </Button>
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

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-v2-pill hover:bg-v2-hover md:hidden"
          aria-label={open ? t('common.nav.closeMenu') : t('common.nav.openMenu')}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-v2-border bg-v2-surface px-4 pb-4 pt-2 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={navLinkClass} onClick={close}>
                {l.label}
              </Link>
            ))}
            {showAuth && (
              <Link href={routes.PROFILE} className={navLinkClass} onClick={close}>
                {t('common.nav.profile')}
              </Link>
            )}
          </nav>
          {!showAuth && (
            <div className="mt-3 flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full">
                <Link href={loginHref} onClick={close}>
                  {t('common.nav.login')}
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href={registerHref} onClick={close}>
                  {t('common.nav.register')}
                </Link>
              </Button>
            </div>
          )}
          <div className="mt-2">
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
