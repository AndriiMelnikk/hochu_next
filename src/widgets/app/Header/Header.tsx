'use client';

import { Button } from '@shared/ui/button';
import { RegisterButton } from '@/features/auth';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { routes } from '@app/router/routes';
import { HeroBadge } from '@/shared/ui/hero-badge';
import { useAuthStore } from '@/entities/auth/store/authStore';
import { useLingui } from '@lingui/react';
import type { Locale } from '@/locales/locale';
import { LS_KEYS } from '@shared/config/envVars';
import { messages as enMessages } from '@/locales/en/create';
import { messages as ukMessages } from '@/locales/uk/create';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>('uk');
  const { isAuth } = useAuthStore();
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const messagesByLocale = {
    en: enMessages,
    uk: ukMessages,
  } as const;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setCurrentLocale((i18n.locale as Locale) || 'uk');
  }, []);

  const handleLocaleChange = (locale: Locale) => {
    if (locale === currentLocale) return;

    setCurrentLocale(locale);

    if (typeof window !== 'undefined') {
      localStorage.setItem(LS_KEYS.LOCALE, locale);
      // Зберігаємо також у cookie, щоб сервер міг визначити локаль при наступних навігаціях/рендерах
      document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    }

    i18n.load(locale, messagesByLocale[locale]);
    i18n.activate(locale);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href={routes.HOME} className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Hochu
              </div>
            </Link>
            <HeroBadge>{t('common.hero.betaBadge')}</HeroBadge>
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
              href={routes.HOW_IT_WORKS}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('common.nav.howItWorks')}
            </Link>
            {isAuth ? (
              <Link href={routes.PROFILE}>
                <User className="h-4 w-4" />
              </Link>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href={routes.LOGIN}>
                  <Button variant="outline" size="sm">
                    {t('common.nav.login')}
                  </Button>
                </Link>
                <RegisterButton size="sm" onClick={() => setIsOpen(false)} />
              </div>
            )}
            <Select
              value={currentLocale}
              onValueChange={(value) => handleLocaleChange(value as Locale)}
            >
              <SelectTrigger className="ml-4 h-8 w-[80px] rounded-md border bg-background px-2 text-xs text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uk">UA</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
              href={routes.HOW_IT_WORKS}
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('common.nav.howItWorks')}
            </Link>
            {isAuth ? (
              <Link
                href={routes.PROFILE}
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('common.nav.profile')}
              </Link>
            ) : (
              <div className="flex flex-col space-y-2 pt-4">
                <Link href={routes.LOGIN} onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    {t('common.nav.login')}
                  </Button>
                </Link>
                <RegisterButton size="sm" fullWidth onClick={() => setIsOpen(false)} />
              </div>
            )}
            <div className="pt-2">
              <Select
                value={currentLocale}
                onValueChange={(value) => handleLocaleChange(value as Locale)}
              >
                <SelectTrigger className="h-8  rounded-md border bg-background px-2 text-xs text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uk">UA</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
