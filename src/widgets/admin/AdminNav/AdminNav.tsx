'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useLingui } from '@lingui/react';
import {
  ADMIN_NAV_GROUP_KEYS,
  ADMIN_NAV_ITEMS,
  hasPermission,
  useAdminPreviewStore,
  type IAdminNavItem,
} from '@/entities/admin';
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
  const previewRole = useAdminPreviewStore((s) => s.previewRole);

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
    return <p className="px-3 py-4 text-sm text-muted-foreground">{t('admin.nav.empty')}</p>;
  }

  return (
    <nav className={cn('space-y-6', className)} aria-label={t('admin.nav.aria')}>
      {groups.map(([group, items]) => (
        <div key={group} className="space-y-2">
          <p className="px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t(ADMIN_NAV_GROUP_KEYS[group])}
          </p>
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
                      'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground hover:bg-muted',
                    )}
                  >
                    {t(item.labelKey)}
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
