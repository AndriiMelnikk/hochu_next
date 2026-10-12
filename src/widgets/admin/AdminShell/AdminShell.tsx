'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Shield } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { ADMIN_NAV_ITEMS, hasPermission, useAdminPreviewStore } from '@/entities/admin';
import { RolePreviewSelect } from '@/features/admin';
import { AdminNav } from '@/widgets/admin/AdminNav';
import { Badge } from '@shared/ui/badge';
import { Button } from '@shared/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@shared/ui/sheet';
import { useCurrentLocale } from '@shared/ui/link';
import { localizeHref } from '@/locales/config';

interface AdminShellProps {
  children: ReactNode;
}

function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(uk|en)(?=\/|$)/, '') || '/';
}

export function AdminShell({ children }: AdminShellProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useCurrentLocale();
  const previewRole = useAdminPreviewStore((s) => s.previewRole);
  const [mobileOpen, setMobileOpen] = useState(false);

  const allowedItems = useMemo(
    () => ADMIN_NAV_ITEMS.filter((item) => hasPermission(previewRole, item.permission)),
    [previewRole],
  );

  useEffect(() => {
    const currentPath = stripLocale(pathname);
    if (currentPath === '/admin' || currentPath === '/admin/') {
      const first = allowedItems[0];
      if (first) {
        router.replace(localizeHref(locale, first.href));
      }
      return;
    }

    const required = [...ADMIN_NAV_ITEMS]
      .sort((a, b) => b.href.length - a.href.length)
      .find((item) => currentPath === item.href || currentPath.startsWith(`${item.href}/`));

    if (required && !hasPermission(previewRole, required.permission)) {
      const first = allowedItems[0];
      if (first) {
        router.replace(localizeHref(locale, first.href));
      }
    }
  }, [allowedItems, locale, pathname, previewRole, router]);

  return (
    <div className="mx-auto w-full max-w-[1120px] px-4 pb-16 lg:px-6">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{t('admin.title')}</h1>
          <p className="text-muted-foreground">{t('admin.description')}</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="destructive" className="text-sm px-3 py-1.5">
            <Shield className="h-4 w-4 mr-2" />
            {t(`admin.roles.${previewRole}`)}
          </Badge>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label={t('admin.nav.openMenu')}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:max-w-[280px]">
              <SheetHeader>
                <SheetTitle>{t('admin.nav.aria')}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <RolePreviewSelect />
                <AdminNav onNavigate={() => setMobileOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex gap-6">
        <aside className="hidden w-[260px] shrink-0 lg:block">
          <div className="sticky top-28 space-y-6 rounded-xl border border-border bg-card p-4">
            <RolePreviewSelect />
            <AdminNav />
          </div>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
