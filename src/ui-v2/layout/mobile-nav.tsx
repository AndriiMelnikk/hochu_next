'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  Bell,
  ChevronDown,
  CirclePlus,
  Grid2x2,
  Home,
  LayoutList,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useLingui } from '@lingui/react';

import { cn } from '@/lib/utils';
import { routes } from '@app/router/routes';
import { useAuthStore } from '@/entities/auth/store/authStore';
import Link from '@/shared/ui/link';

import { Avatar } from '../components/avatar';
import { Button } from '../components/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle } from '../components/sheet';
import { LocaleSwitcher } from './site-header';

type NavItem = { href: string; label: string };

interface MobileMenuProps {
  /** Гість чи залогінений: гість — повноекранне меню, залогінений — бічна шторка з профілем. */
  authenticated: boolean;
  links: NavItem[];
  accountItems: NavItem[];
  loginHref: string;
  registerHref: string;
}

/** Мобільний хедер-меню за мотивами Upwork: кнопка-бургер + шторка/екран навігації. */
export function MobileMenu({ authenticated, ...rest }: MobileMenuProps) {
  const { i18n } = useLingui();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-v2-pill hover:bg-v2-hover md:hidden"
        aria-label={i18n._('common.nav.openMenu')}
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu className="size-7" />
      </button>
      {authenticated ? (
        <MemberDrawer {...rest} close={() => setOpen(false)} />
      ) : (
        <GuestScreen {...rest} close={() => setOpen(false)} />
      )}
    </Sheet>
  );
}

type PanelProps = Omit<MobileMenuProps, 'authenticated'> & { close: () => void };

/** Гість: повний екран зі списком розділів і нижньою панеллю «Увійти / Реєстрація». */
function GuestScreen({ links, loginHref, registerHref, close }: PanelProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <SheetContent side="full" hideClose className="inset-y-0 h-dvh gap-0">
      <SheetTitle className="sr-only">{t('common.nav.openMenu')}</SheetTitle>
      <SheetDescription className="sr-only">{t('common.nav.openMenu')}</SheetDescription>
      <div className="box-content flex h-16 shrink-0 items-center gap-3 border-b border-v2-border px-4 pt-[env(safe-area-inset-top)]">
        <SheetClose
          aria-label={t('common.nav.closeMenu')}
          className="inline-flex size-11 items-center justify-center rounded-v2-pill hover:bg-v2-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
        >
          <X className="size-7" />
        </SheetClose>
        <Link
          href={routes.HOME}
          onClick={close}
          className="text-2xl font-semibold tracking-tight text-v2-primary"
        >
          Shukayu
        </Link>
        <div className="ml-auto">
          <LocaleSwitcher />
        </div>
      </div>

      <nav aria-label="Mobile" className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="flex min-h-14 items-center text-xl font-[450] text-v2-ink hover:text-v2-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex shrink-0 items-center gap-3 border-t border-v2-border px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
        <Button asChild variant="ghost" className="px-6 text-base">
          <Link href={loginHref} onClick={close}>
            {t('common.nav.login')}
          </Link>
        </Button>
        <Button asChild className="h-12 flex-1 text-base">
          <Link href={registerHref} onClick={close}>
            {t('common.nav.register')}
          </Link>
        </Button>
      </div>
    </SheetContent>
  );
}

const drawerRow =
  'flex min-h-12 w-full items-center gap-4 rounded-v2-lg px-3 text-left text-base font-[450] text-v2-ink outline-none transition-colors hover:bg-v2-hover focus-visible:bg-v2-hover [&_svg]:size-6 [&_svg]:shrink-0';

/** Залогінений: бічна шторка (як у Upwork) — профіль, розділи, групи, мова, вихід. */
function MemberDrawer({ links, accountItems, close }: PanelProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const [accountOpen, setAccountOpen] = React.useState(false);

  const name = [user?.profile?.name, user?.profile?.lastName].filter(Boolean).join(' ');
  const typeLabel = user?.profile?.type ? t(`profile.type.${user.profile.type}`) : '';

  const main = [
    { href: routes.HOME, label: t('common.nav.home'), icon: Home },
    { href: links[0]?.href ?? routes.REQUEST, label: t('common.nav.requests'), icon: LayoutList },
    { href: routes.CATEGORIES, label: t('common.nav.categories'), icon: Grid2x2 },
    { href: routes.CREATE, label: t('common.nav.createRequest'), icon: CirclePlus },
    { href: routes.DASHBOARD_NOTIFICATIONS, label: t('profile.tabs.notifications'), icon: Bell },
  ];

  return (
    <SheetContent
      side="left"
      hideClose
      className="w-[min(86vw,340px)] max-w-none gap-0 bg-v2-surface-subtle"
    >
      <SheetTitle className="sr-only">{t('common.nav.openMenu')}</SheetTitle>
      <SheetDescription className="sr-only">{t('common.nav.openMenu')}</SheetDescription>

      {/* Хедер шторки: лого зліва, хрестик справа — всередині панелі */}
      <div className="flex items-center justify-between px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))]">
        <Link href={routes.HOME} onClick={close} className="text-2xl font-semibold text-v2-primary">
          Shukayu
        </Link>
        <SheetClose
          aria-label={t('common.nav.closeMenu')}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-v2-ink transition-colors duration-150 ease-v2-out hover:bg-v2-hover active:bg-v2-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
        >
          <X className="size-6" />
        </SheetClose>
      </div>

      <div className="mx-4 mb-2 border-b border-v2-border">
        <button
          type="button"
          className="flex w-full items-center gap-3 py-4 text-left outline-none focus-visible:bg-v2-hover"
          aria-expanded={accountOpen}
          onClick={() => setAccountOpen((v) => !v)}
        >
          <Avatar size="md" fallback={name?.[0]} />
          <span className="min-w-0 flex-1">
            <span className="block truncate text-lg font-semibold text-v2-ink">{name}</span>
            <span className="block text-sm text-v2-muted">{typeLabel}</span>
          </span>
          <ChevronDown
            aria-hidden
            className={cn(
              'size-5 shrink-0 text-v2-ink transition-transform duration-200 ease-v2-out',
              accountOpen && 'rotate-180',
            )}
          />
        </button>
        {accountOpen && (
          <ul className="pb-2">
            {accountItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex min-h-11 items-center rounded-v2-lg px-3 text-base text-v2-ink hover:bg-v2-hover active:bg-v2-hover"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <nav aria-label="Mobile" className="min-h-0 flex-1 overflow-y-auto px-2 py-2">
        <ul className="space-y-0.5">
          {main.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link href={href} onClick={close} className={drawerRow}>
                <Icon aria-hidden />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-1 border-t border-v2-border px-2 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2">
        <div className="px-1">
          <LocaleSwitcher />
        </div>
        <button
          type="button"
          className={drawerRow}
          onClick={async () => {
            close();
            await logout();
            router.push(routes.HOME);
          }}
        >
          <LogOut aria-hidden />
          {t('auth.logout')}
        </button>
      </div>
    </SheetContent>
  );
}
