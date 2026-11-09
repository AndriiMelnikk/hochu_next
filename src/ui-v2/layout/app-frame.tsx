'use client';

import * as React from 'react';

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
  const railed = mounted && isAuth;

  return (
    <div className={cn('flex min-h-screen flex-col', railed && 'md:pl-20')}>
      {railed && <SideRail />}
      {header}
      <main className="ui-v2 flex-1 pt-8 pb-12">{children}</main>
      {footer}
    </div>
  );
}
