'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/entities/auth';
import { Loader2 } from 'lucide-react';
import { useLingui } from '@lingui/react';
import Header from '@/widgets/app/Header';
import { AuthRequired } from '@/features/auth';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuth, isLoading } = useAuthStore();
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  useEffect(() => {
    if (isAuth && user?.profile?._id) {
      router.replace(`/profile/${user.profile._id}`);
    }
  }, [isAuth, user, router]);

  if (isLoading || (isAuth && !user?.profile?._id)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isAuth) {
    return null; // Redirecting...
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AuthRequired
        title={t('request.profile.authRequired.title')}
        description={t('request.profile.authRequired.description')}
        className="flex-1"
      />
    </div>
  );
}
