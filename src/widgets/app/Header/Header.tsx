'use client';

import { Button } from '@shared/ui/button';
import { RegisterButton } from '@/features/auth';
import Link, { useCurrentLocale } from '@/shared/ui/link';
import { Menu, X, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { routes } from '@app/router/routes';
import { HeroBadge } from '@/shared/ui/hero-badge';
import { useAuthStore } from '@/entities/auth/store/authStore';
import { buildAuthHref, getReturnUrlFromLocation } from '@/features/auth';
import { useLingui } from '@lingui/react';
import { switchLocaleInPathname, type Locale } from '@/locales/config';
import { LS_KEYS } from '@shared/config/envVars';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

const LOCALE_OPTIONS: ReadonlyArray<{ locale: Locale; label: string }> = [
  { locale: 'uk', label: 'UA' },
  { locale: 'en', label: 'EN' },
];

/** Перемикач мови зі справжніми посиланнями (`<a href hreflang>`), доступними краулерам. */
const LocaleSwitcher = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useCurrentLocale();

  const handleClick = (event: React.MouseEvent, locale: Locale) => {
    event.preventDefault();
    if (locale === currentLocale) return;

    localStorage.setItem(LS_KEYS.LOCALE, locale);
    // Cookie використовується proxy для редіректа з непрефіксованих URL
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    router.push(`${switchLocaleInPathname(pathname, locale)}${window.location.search}`);
  };

  return (
    <div className={cn('flex items-center gap-1 text-xs', className)}>
      {LOCALE_OPTIONS.map(({ locale, label }) => (
        <NextLink
          key={locale}
          href={switchLocaleInPathname(pathname, locale)}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === currentLocale ? 'true' : undefined}
          onClick={(event) => handleClick(event, locale)}
          className={cn(
            'inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border px-2 transition-colors',
            locale === currentLocale
              ? 'bg-primary text-primary-foreground border-primary'
              : 'bg-background text-foreground hover:text-primary',
          )}
        >
          {label}
        </NextLink>
      ))}
    </div>
  );
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useAuthStore();
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useRouter();
  const pathname = usePathname();
  const showAuth = mounted && isAuth;
  const loginHref = buildAuthHref(routes.LOGIN, getReturnUrlFromLocation(pathname));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href={routes.HOME} className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Shukayu
              </div>
            </Link>
            {/* <HeroBadge>{t('common.hero.betaBadge')}</HeroBadge> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={routes.REQUEST}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('common.nav.viewRequests')}
            </Link>
            <Link
              href={routes.CREATE}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('common.nav.createRequest')}
            </Link>
            <Link
              href={routes.CATEGORIES}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('common.nav.categories')}
            </Link>
            <Link
              href={routes.HOW_IT_WORKS}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('common.nav.howItWorks')}
            </Link>
            {showAuth ? (
              <Link href={routes.PROFILE}>
                <User className="h-4 w-4" />
              </Link>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href={loginHref}>
                  <Button variant="outline" size="sm">
                    {t('common.nav.login')}
                  </Button>
                </Link>
                <RegisterButton size="sm" onClick={() => setIsOpen(false)} />
              </div>
            )}
            <LocaleSwitcher className="ml-4" />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center"
            aria-label={isOpen ? t('common.nav.closeMenu') : t('common.nav.openMenu')}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href={routes.REQUEST}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('common.nav.viewRequests')}
            </Link>
            <Link
              href={routes.CREATE}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('common.nav.createRequest')}
            </Link>
            <Link
              href={routes.CATEGORIES}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('common.nav.categories')}
            </Link>
            <Link
              href={routes.HOW_IT_WORKS}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('common.nav.howItWorks')}
            </Link>
            {showAuth ? (
              <Link
                href={routes.PROFILE}
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('common.nav.profile')}
              </Link>
            ) : (
              <div className="flex flex-col space-y-2 pt-4">
                <Link href={loginHref} onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    {t('common.nav.login')}
                  </Button>
                </Link>
                <RegisterButton size="sm" fullWidth onClick={() => setIsOpen(false)} />
              </div>
            )}
            <div className="pt-2">
              <LocaleSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
