'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuthStore } from '@/entities/auth';
import { Loader2 } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { AuthRequired } from '@/features/auth';

export default function ProfilePage() {
  const { user, isAuth, isLoading } = useAuthStore();
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  useEffect(() => {
    if (isAuth && user?.profile?._id) {
      redirect(`/profile/${user.profile._id}`);
    }
  }, [isAuth, user]);

  if (isLoading || (isAuth && !user?.profile?._id)) {
    return (
      <div className="flex flex-col items-center justify-center py-24 min-h-[50vh]">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">{t('request.create.categoriesLoading')}</p>
      </div>
    );
  }

  if (isAuth) {
    return null; // Redirecting...
  }

  return (
    <div className="flex-1 flex flex-col min-h-[50vh]">
      <AuthRequired
        title={t('request.profile.authRequired.title')}
        description={t('request.profile.authRequired.description')}
        className="flex-1"
      />
    </div>
  );
}
