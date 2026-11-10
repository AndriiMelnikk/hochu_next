'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Shield } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { ADMIN_NAV_ITEMS, hasPermission, useAdminMe, useAdminRole } from '@/entities/admin';
import { ChangePasswordModal, MockZone, RolePreviewSelect } from '@/features/admin';
import { AdminNav } from '@/widgets/admin/AdminNav';
import { AdminRail } from '@/widgets/admin/AdminRail';
import { AdminSubNav } from '@/widgets/admin/AdminSubNav';
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
  const previewRole = useAdminRole();
  const isLoginPage = stripLocale(pathname) === '/admin/login';
  const { data: me, isLoading: meLoading } = useAdminMe({ enabled: !isLoginPage });
  const [mobileOpen, setMobileOpen] = useState(false);

  const allowedItems = useMemo(
    () => ADMIN_NAV_ITEMS.filter((item) => hasPermission(previewRole, item.permission)),
    [previewRole],
  );

  useEffect(() => {
    // Роль невідома, доки не прийшов профіль: не редіректимо за «запасною» роллю
    if (!me) return;
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
  }, [allowedItems, locale, me, pathname, previewRole, router]);

  const roleBadge = (
    <Badge tone="danger">
      <Shield className="mr-1.5 size-4" />
      {t(`admin.roles.${previewRole}`)}
    </Badge>
  );

  if (stripLocale(pathname) === '/admin/login') return <>{children}</>;
  // Меню й дозволи будуються з ролі з бекенду — до її отримання нічого не показуємо
  if (meLoading || !me) {
    return (
      <Container className="ui-v2">
        <p className="py-24 text-center text-v2-muted">{t('admin.requests.loading')}</p>
      </Container>
    );
  }

  const currentItem = [...ADMIN_NAV_ITEMS]
    .sort((a, b) => b.href.length - a.href.length)
    .find(
      (item) =>
        stripLocale(pathname) === item.href || stripLocale(pathname).startsWith(`${item.href}/`),
    );

  return (
    <Container className="ui-v2">
      <AdminRail />
      <div className="min-w-0">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <p className="hidden text-base font-semibold md:block">{t('admin.title')}</p>
            {roleBadge}
            <span className="hidden text-sm text-v2-muted sm:inline">{me.name || me.login}</span>
            <ChangePasswordModal />
          </div>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                shape="circle"
                className="md:hidden"
                aria-label={t('admin.nav.openMenu')}
              >
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
        <AdminSubNav />
        <MockZone active={currentItem?.mock === true}>{children}</MockZone>
      </div>
    </Container>
  );
}
