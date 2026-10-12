'use client';

import { useEffect, useRef } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import { useAuthStore } from '@/entities/auth';
import { routes } from '@/app/router/routes';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import { RETURN_URL_PARAM, resolvePostAuthRedirect } from '@/features/auth/lib/returnUrl';

export default function GoogleAuthCompleteContent() {
  const { data: session, status } = useSession();
  const router = useLocalizedRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get(RETURN_URL_PARAM);
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
      const redirectTo = resolvePostAuthRedirect(returnUrl);
      signOut({ redirect: false }).finally(() => {
        router.replace(redirectTo);
      });
      return;
    }

    if (status === 'unauthenticated' || !session?.backendAuth) {
      handledRef.current = true;
      // Якщо дійсно сталася помилка Google-логіну, ми вже потрапимо на /login з параметром ?error
      // і покажемо тост там. Тут просто перенаправляємо.
      router.replace(routes.LOGIN);
    }
  }, [status, session, loginWithGoogleFromSession, router, t, returnUrl]);

  return (
    <div className="container mx-auto px-4 py-16 text-center text-muted-foreground">
      {t('auth.google.messages.loading')}
    </div>
  );
}
