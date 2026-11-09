'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Bell, CirclePlus, Grid2x2, Home, LayoutList, LogOut, UserRound } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { cn } from '@/lib/utils';
import { routes, DASHBOARD_NOTIFICATION_SETTINGS } from '@app/router/routes';
import { useAuthStore } from '@/entities/auth';
import { useCategories } from '@/entities/category';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import Link from '@/shared/ui/link';

import { Avatar } from '../components/avatar';
import { LocaleSwitcher, useAccountItems } from './site-header';

type FlyoutLink = { href: string; label: string };

/** Спливаючий блок праворуч від елемента панелі: відкривається по кліку. */
function ClickFlyout({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: (close: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side="right"
          align="start"
          sideOffset={8}
          className="ui-v2 z-[60] w-60 rounded-v2-xl border border-v2-border bg-v2-surface px-1 py-2 shadow-v2-popover data-[state=open]:animate-in data-[state=open]:fade-in-0"
        >
          {children(() => setOpen(false))}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

const flyoutItemClass =
  'flex min-h-8 items-center rounded-v2-lg px-3 py-1 text-sm text-v2-ink outline-none hover:bg-v2-hover focus-visible:bg-v2-hover';

function FlyoutHeading({ children }: { children: React.ReactNode }) {
  return <p className="truncate px-3 pb-1 pt-1 text-sm font-semibold text-v2-ink">{children}</p>;
}

function FlyoutLinks({ links, close }: { links: FlyoutLink[]; close: () => void }) {
  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={flyoutItemClass} onClick={close}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

function RailAccount() {
  const { i18n } = useLingui();
  const router = useLocalizedRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const items = useAccountItems();
  const name = [user?.profile?.name, user?.profile?.lastName].filter(Boolean).join(' ');

  return (
    <ClickFlyout
      trigger={
        <button
          type="button"
          aria-label={i18n._('common.nav.profile')}
          className="rounded-v2-pill outline-none focus-visible:ring-2 focus-visible:ring-v2-primary"
        >
          <Avatar size="sm" fallback={name?.[0]} />
        </button>
      }
    >
      {(close) => (
        <>
          <FlyoutHeading>{name}</FlyoutHeading>
          <div className="my-1 h-px bg-v2-border" />
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={flyoutItemClass} onClick={close}>
              {item.label}
            </Link>
          ))}
          <div className="my-1 h-px bg-v2-border" />
          <button
            type="button"
            className={cn(flyoutItemClass, 'w-full gap-2 text-left')}
            onClick={async () => {
              close();
              await logout();
              router.push(routes.HOME);
            }}
          >
            <LogOut className="size-4" />
            {i18n._('auth.logout')}
          </button>
        </>
      )}
    </ClickFlyout>
  );
}

const ITEMS = [
  { href: routes.HOME, key: 'home', icon: Home },
  { href: routes.REQUEST, key: 'requests', icon: LayoutList },
  { href: routes.CATEGORIES, key: 'categories', icon: Grid2x2 },
  { href: routes.CREATE, key: 'create', icon: CirclePlus },
  { href: routes.DASHBOARD, key: 'dashboard', icon: UserRound },
  { href: routes.DASHBOARD_NOTIFICATIONS, key: 'notifications', icon: Bell },
] as const;

/** Ліва навігаційна панель для залогінених (80px, як у Upwork). */
export function SideRail() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname().replace(/^\/(uk|en)(?=\/|$)/, '') || '/';
  const accountItems = useAccountItems();
  const { data: categories = [] } = useCategories();

  const topCategories = React.useMemo(
    () =>
      categories
        .filter((c) => !c.parentId)
        .slice(0, 8)
        .map((c) => ({ href: `${routes.REQUEST}?category=${c._id}`, label: c.title })),
    [categories],
  );

  const flyoutLinks = (key: (typeof ITEMS)[number]['key']): FlyoutLink[] => {
    switch (key) {
      case 'requests':
        return [
          { href: routes.REQUEST, label: t('common.rail.flyout.allRequests') },
          { href: routes.DASHBOARD, label: t('common.rail.flyout.myRequests') },
        ];
      case 'categories':
        return [
          { href: routes.CATEGORIES, label: t('common.rail.flyout.allCategories') },
          ...topCategories,
        ];
      case 'dashboard':
        return accountItems.filter((i) => i.href !== routes.DASHBOARD_NOTIFICATIONS);
      case 'notifications':
        return [
          { href: routes.DASHBOARD_NOTIFICATIONS, label: t('profile.tabs.notifications') },
          { href: DASHBOARD_NOTIFICATION_SETTINGS, label: t('profile.tabs.settings') },
        ];
      default:
        return [];
    }
  };

  const isActive = (href: string) => {
    if (href === routes.HOME) return pathname === '/';
    if (href === routes.DASHBOARD) {
      return (
        pathname === href ||
        (pathname.startsWith(href) && !pathname.startsWith(routes.DASHBOARD_NOTIFICATIONS))
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="ui-v2 fixed inset-y-0 left-0 z-50 hidden w-20 flex-col items-center border-r border-v2-border bg-v2-surface py-4 md:flex">
      <Link
        href={routes.HOME}
        aria-label="Shukayu"
        className="mb-4 flex size-10 items-center justify-center rounded-v2-lg bg-v2-primary text-lg font-semibold text-v2-on-primary"
      >
        S
      </Link>
      <div className="mb-4">
        <RailAccount />
      </div>

      <nav aria-label="Main" className="flex flex-1 flex-col items-center gap-1 overflow-y-auto">
        {ITEMS.map(({ href, key, icon: Icon }) => {
          const active = isActive(href);
          const links = flyoutLinks(key);
          const className = cn(
            'flex w-[72px] flex-col items-center gap-1 rounded-v2-lg px-0 py-2 text-[10px] font-[450] leading-3 outline-none transition-colors',
            'focus-visible:ring-2 focus-visible:ring-v2-primary [&_svg]:size-6',
            active
              ? 'bg-v2-hover font-semibold text-v2-ink'
              : 'text-v2-secondary hover:bg-v2-hover hover:text-v2-ink',
          );
          const inner = (
            <>
              <Icon />
              <span>{t(`common.rail.${key}`)}</span>
            </>
          );

          // Одна дорога — звичайне посилання, кілька — меню по кліку
          if (links.length <= 1) {
            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={className}
              >
                {inner}
              </Link>
            );
          }
          return (
            <ClickFlyout
              key={key}
              trigger={
                <button
                  type="button"
                  aria-current={active ? 'page' : undefined}
                  className={className}
                >
                  {inner}
                </button>
              }
            >
              {(close) => <FlyoutLinks links={links} close={close} />}
            </ClickFlyout>
          );
        })}
      </nav>

      <LocaleSwitcher vertical />
    </aside>
  );
}
