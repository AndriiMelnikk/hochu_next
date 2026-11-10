'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { useAuthStore } from '@/entities/auth/store/authStore';

import { SideRail } from './side-rail';

/**
 * Каркас сторінки: гість — верхній хедер, залогінений — ліва панель (md+),
 * на мобільному лишається верхній хедер із бургер-меню.
 */
export function AppFrame({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const isAuth = useAuthStore((s) => s.isAuth);
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  // В адмінці замість користувацької панелі виводиться власна (AdminRail), а відступ лишається.
  const isAdmin = /^\/(uk|en)\/admin(?!\/login)(\/|$)/.test(usePathname());
  const railed = mounted && (isAuth || isAdmin);

  return (
    <div className={cn('flex min-h-dvh flex-col', railed && 'md:pl-20')}>
      {railed && !isAdmin && <SideRail />}
      {header}
      <main id="main-content" tabIndex={-1} className="ui-v2 flex-1 pt-8 pb-12 outline-none">
        {children}
      </main>
      {footer}
    </div>
  );
}
