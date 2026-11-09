'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Shield } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { ADMIN_NAV_ITEMS, hasPermission, useAdminPreviewStore } from '@/entities/admin';
import { RolePreviewSelect } from '@/features/admin';
import { AdminNav } from '@/widgets/admin/AdminNav';
import { useCurrentLocale } from '@shared/ui/link';
import { localizeHref } from '@/locales/config';
import {
  Badge,
  Button,
  Container,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/ui-v2';

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

  const roleBadge = (
    <Badge tone="danger">
      <Shield className="mr-1.5 size-4" />
      {t(`admin.roles.${previewRole}`)}
    </Badge>
  );

  return (
    <Container className="ui-v2">
      <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-6 overflow-y-auto">
            <div className="space-y-2 px-3">
              <p className="text-base font-semibold">{t('admin.title')}</p>
              {roleBadge}
            </div>
            <RolePreviewSelect />
            <AdminNav />
          </div>
        </aside>

        <div className="min-w-0">
          <div className="mb-6 flex items-center justify-between gap-3 lg:hidden">
            {roleBadge}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" shape="circle" aria-label={t('admin.nav.openMenu')}>
                  <Menu className="size-5" />
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
          {children}
        </div>
      </div>
    </Container>
  );
}
