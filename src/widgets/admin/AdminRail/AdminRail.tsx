'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useLingui } from '@lingui/react';
import {
  BarChart3,
  FileText,
  Home,
  LogOut,
  ShieldCheck,
  UserCog,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  ADMIN_NAV_GROUP_KEYS,
  ADMIN_NAV_ITEMS,
  hasPermission,
  useAdminPreviewStore,
  useAdminRole,
  type IAdminNavItem,
} from '@/entities/admin';
import { MockTag, RolePreviewSelect } from '@/features/admin';
import { routes } from '@/app/router/routes';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import Link from '@shared/ui/link';
import { cn } from '@shared/utils/cn';
import { ClickFlyout, LocaleSwitcher, flyoutItemClass } from '@/ui-v2';

const GROUP_ICONS: Record<IAdminNavItem['group'], LucideIcon> = {
  analytics: BarChart3,
  moderation: ShieldCheck,
  content: FileText,
  staff: Users,
};

const stripLocale = (pathname: string) => pathname.replace(/^\/(uk|en)(?=\/|$)/, '') || '/';

const railItemClass = (active: boolean) =>
  cn(
    'flex w-[72px] flex-col items-center gap-1 rounded-v2-lg px-0 py-2 text-[10px] font-[450] leading-3 outline-none transition-colors',
    'focus-visible:ring-2 focus-visible:ring-v2-primary [&_svg]:size-6',
    active
      ? 'bg-v2-hover font-semibold text-v2-ink'
      : 'text-v2-secondary hover:bg-v2-hover hover:text-v2-ink',
  );

/** Ліва панель адмінки: той самий вигляд, що й SideRail для залогінених. */
export function AdminRail() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const currentPath = stripLocale(usePathname());
  const previewRole = useAdminRole();
  const router = useLocalizedRouter();
  const queryClient = useQueryClient();

  const logout = async () => {
    await fetch('/api/admin-session', { method: 'DELETE' });
    // Кеш профілю й черг не повинен дістатись наступному співробітнику
    queryClient.removeQueries({ queryKey: ['admin'] });
    useAdminPreviewStore.getState().setPreviewRole(null);
    router.replace('/admin/login');
    router.refresh();
  };

  const groups = useMemo(() => {
    const allowed = ADMIN_NAV_ITEMS.filter((item) => hasPermission(previewRole, item.permission));
    const map = new Map<IAdminNavItem['group'], IAdminNavItem[]>();
    for (const item of allowed) map.set(item.group, [...(map.get(item.group) ?? []), item]);
    return Array.from(map.entries());
  }, [previewRole]);

  const isItemActive = (item: IAdminNavItem) =>
    currentPath === item.href ||
    (item.href !== '/admin/analytics' && currentPath.startsWith(`${item.href}/`));

  return (
    <aside className="ui-v2 fixed inset-y-0 left-0 z-50 hidden w-20 flex-col items-center border-r border-v2-border bg-v2-surface py-4 md:flex">
      <Link
        href={routes.HOME}
        aria-label="Shukayu"
        className="mb-4 flex size-10 items-center justify-center rounded-v2-lg bg-v2-primary text-lg font-semibold text-v2-on-primary"
      >
        S
      </Link>

      <nav
        aria-label={t('admin.nav.aria')}
        className="flex flex-1 flex-col items-center gap-1 overflow-y-auto"
      >
        <Link href={routes.HOME} className={railItemClass(false)}>
          <Home />
          <span>{t('admin.nav.backToSite')}</span>
        </Link>

        {groups.map(([group, items]) => {
          const Icon = GROUP_ICONS[group];
          const active = items.some(isItemActive);
          const inner = (
            <>
              <Icon />
              <span>{t(ADMIN_NAV_GROUP_KEYS[group])}</span>
            </>
          );

          // Один розділ — звичайне посилання, кілька — меню по кліку (як у SideRail)
          if (items.length === 1) {
            return (
              <Link
                key={group}
                href={items[0].href}
                aria-current={active ? 'page' : undefined}
                className={railItemClass(active)}
              >
                {inner}
              </Link>
            );
          }
          return (
            <ClickFlyout
              key={group}
              trigger={
                <button
                  type="button"
                  aria-current={active ? 'page' : undefined}
                  className={railItemClass(active)}
                >
                  {inner}
                </button>
              }
            >
              {(close) =>
                items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={close}
                    aria-current={isItemActive(item) ? 'page' : undefined}
                    className={cn(
                      flyoutItemClass,
                      isItemActive(item) && 'bg-v2-hover font-semibold',
                    )}
                  >
                    {t(item.labelKey)}
                    {item.mock && <MockTag />}
                  </Link>
                ))
              }
            </ClickFlyout>
          );
        })}

        {groups.length === 0 && (
          <p className="px-2 py-4 text-center text-[10px] text-v2-muted">{t('admin.nav.empty')}</p>
        )}
      </nav>

      <div className="mb-2">
        <ClickFlyout
          trigger={
            <button type="button" className={railItemClass(false)}>
              <UserCog />
              <span>{t('admin.nav.role')}</span>
            </button>
          }
        >
          {() => (
            <div className="px-2 py-1">
              <RolePreviewSelect />
            </div>
          )}
        </ClickFlyout>
      </div>

      <button type="button" className={railItemClass(false)} onClick={logout}>
        <LogOut />
        <span>{t('admin.nav.logout')}</span>
      </button>

      <LocaleSwitcher vertical />
    </aside>
  );
}
