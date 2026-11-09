'use client';

import { useSyncExternalStore, type ReactNode } from 'react';

import { useAuthStore } from '@/entities/auth/store/authStore';

import HomeFeed from './HomeFeed';

/**
 * Гість (і краулер) бачить сторінку про сервіс — вона рендериться на сервері.
 * Залогінений після гідрації отримує персональну стрічку.
 */
export default function HomeSwitch({ children }: { children: ReactNode }) {
  const isAuth = useAuthStore((s) => s.isAuth);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (mounted && isAuth) return <HomeFeed />;
  return <>{children}</>;
}
