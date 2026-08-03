'use client';

import { useEffect, useRef } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import { useAuthStore } from '@/entities/auth';
import { routes } from '@/app/router/routes';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';

export default function GoogleAuthCompleteContent() {
  const { data: session, status } = useSession();
  const router = useLocalizedRouter();
  const loginWithGoogleFromSession = useAuthStore((s) => s.loginWithGoogleFromSession);
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const handledRef = useRef(false);

  useEffect(() => {
    // Уникаємо повторного виконання ефекту (StrictMode dev + зміна сесії після signOut)
    if (handledRef.current) return;

    if (status === 'loading') return;

    if (status === 'authenticated' && session?.backendAuth) {
      handledRef.current = true;
      loginWithGoogleFromSession(session.backendAuth);
      toast.success(t('auth.google.messages.success'));
      signOut({ redirect: false }).finally(() => {
        router.replace(routes.HOME);
      });
      return;
    }

    if (status === 'unauthenticated' || !session?.backendAuth) {
      handledRef.current = true;
      // Якщо дійсно сталася помилка Google-логіну, ми вже потрапимо на /login з параметром ?error
      // і покажемо тост там. Тут просто перенаправляємо.
      router.replace(routes.LOGIN);
    }
  }, [status, session, loginWithGoogleFromSession, router, t]);

  return (
    <div className="container mx-auto px-4 py-16 text-center text-muted-foreground">
      {t('auth.google.messages.loading')}
    </div>
  );
}
