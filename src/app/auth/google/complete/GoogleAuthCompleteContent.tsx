'use client';

import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/entities/auth';
import { routes } from '@/app/router/routes';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';

export default function GoogleAuthCompleteContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const loginWithGoogleFromSession = useAuthStore((s) => s.loginWithGoogleFromSession);
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  useEffect(() => {
    if (status === 'loading') return;

    if (status === 'authenticated' && session?.backendAuth) {
      loginWithGoogleFromSession(session.backendAuth);
      toast.success(t('auth.google.messages.success'));
      signOut({ redirect: false }).finally(() => {
        router.replace(routes.HOME);
      });
      return;
    }

    if (status === 'unauthenticated' || !session?.backendAuth) {
      toast.error(t('auth.google.messages.error'));
      router.replace(routes.LOGIN);
    }
  }, [status, session, loginWithGoogleFromSession, router, t]);

  return (
    <div className="container mx-auto px-4 py-16 text-center text-muted-foreground">
      {t('auth.google.messages.loading')}
    </div>
  );
}
