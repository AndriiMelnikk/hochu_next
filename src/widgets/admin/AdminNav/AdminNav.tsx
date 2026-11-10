'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useLingui } from '@lingui/react';
import {
  ADMIN_NAV_GROUP_KEYS,
  ADMIN_NAV_ITEMS,
  hasPermission,
  useAdminRole,
  type IAdminNavItem,
} from '@/entities/admin';
import { MockTag } from '@/features/admin';
import Link from '@shared/ui/link';
import { cn } from '@shared/utils/cn';

interface AdminNavProps {
  onNavigate?: () => void;
  className?: string;
}

function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(uk|en)(?=\/|$)/, '') || '/';
}

export function AdminNav({ onNavigate, className }: AdminNavProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname();
  const currentPath = stripLocale(pathname);
  const previewRole = useAdminRole();

  const groups = useMemo(() => {
    const allowed = ADMIN_NAV_ITEMS.filter((item) => hasPermission(previewRole, item.permission));
    const map = new Map<IAdminNavItem['group'], IAdminNavItem[]>();
    for (const item of allowed) {
      const list = map.get(item.group) ?? [];
      list.push(item);
      map.set(item.group, list);
    }
    return Array.from(map.entries());
  }, [previewRole]);

  if (groups.length === 0) {
    return <p className="px-3 py-4 text-sm text-v2-muted">{t('admin.nav.empty')}</p>;
  }

  return (
    <nav className={cn('space-y-6', className)} aria-label={t('admin.nav.aria')}>
      {groups.map(([group, items]) => (
        <div key={group} className="space-y-2">
          <p className="px-3 text-sm font-[450] text-v2-muted">{t(ADMIN_NAV_GROUP_KEYS[group])}</p>
          <ul className="space-y-1">
            {items.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== '/admin/analytics' && currentPath.startsWith(item.href));

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      'flex h-10 items-center rounded-v2-lg px-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-v2-primary',
                      isActive
                        ? 'bg-v2-hover font-semibold text-v2-ink'
                        : 'font-[450] text-v2-secondary hover:bg-v2-hover hover:text-v2-ink',
                    )}
                  >
                    {t(item.labelKey)}
                    {item.mock && <MockTag />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
