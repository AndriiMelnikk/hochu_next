'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useLingui } from '@lingui/react';
import {
  ADMIN_NAV_GROUP_KEYS,
  ADMIN_NAV_ITEMS,
  hasPermission,
  useAdminPreviewStore,
} from '@/entities/admin';
import Link from '@shared/ui/link';
import { cn } from '@shared/utils/cn';

const stripLocale = (pathname: string) => pathname.replace(/^\/(uk|en)(?=\/|$)/, '') || '/';

/** Підменю поточної групи адмінки (Контент → Блог / Тарифи / Сторінки) — вкладки над сторінкою. */
export function AdminSubNav() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const currentPath = stripLocale(usePathname());
  const previewRole = useAdminPreviewStore((s) => s.previewRole);

  const { group, items } = useMemo(() => {
    const allowed = ADMIN_NAV_ITEMS.filter((i) => hasPermission(previewRole, i.permission));
    const current = [...ADMIN_NAV_ITEMS]
      .sort((a, b) => b.href.length - a.href.length)
      .find((i) => currentPath === i.href || currentPath.startsWith(`${i.href}/`));
    return {
      group: current?.group,
      items: current ? allowed.filter((i) => i.group === current.group) : [],
    };
  }, [currentPath, previewRole]);

  if (!group || items.length < 2) return null;

  const isActive = (href: string) =>
    currentPath === href || (href !== '/admin/analytics' && currentPath.startsWith(`${href}/`));

  return (
    <nav aria-label={t(ADMIN_NAV_GROUP_KEYS[group])} className="mb-6 overflow-x-auto">
      <ul className="flex min-w-max items-end gap-6 border-b border-v2-border">
        {items.map((item) => {
          const active = isActive(item.href);
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  '-mb-px flex h-[38px] items-center border-b-2 text-base transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary',
                  active
                    ? 'border-v2-ink font-semibold text-v2-ink'
                    : 'border-transparent font-[450] text-v2-muted hover:text-v2-ink',
                )}
              >
                {t(item.labelKey)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
