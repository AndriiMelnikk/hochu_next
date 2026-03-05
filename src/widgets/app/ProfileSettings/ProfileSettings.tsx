import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useMe } from '@entities/user';
import { useAuthStore } from '@entities/auth';
import { useRequestStore } from '@entities/request';
import { useLingui } from '@lingui/react';
import { EditProfileForm, EditContactChannelsForm } from '@features/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';
import { routes } from '@/app/router/routes';
import { toast } from 'sonner';

import { Lock, Loader2, LogOut } from 'lucide-react';

const ProfileSettings = () => {
  const router = useRouter();
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: user, isLoading, error } = useMe();
  const queryClient = useQueryClient();
  const resetRequestStore = useRequestStore((s) => s.reset);
  const logout = useAuthStore((s) => s.logout);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      queryClient.clear();
      resetRequestStore();
      router.push(routes.HOME);
      toast.success(t('auth.logoutSuccess') || 'Ви успішно вийшли з акаунту');
    } catch {
      toast.error(t('auth.logoutError') || 'Не вдалося вийти');
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="p-8 text-center text-destructive">
        Сталася помилка при завантаженні даних профілю
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Особиста інформація */}
      <Card>
        <CardHeader>
          <CardTitle>{t('profile.edit.title') || 'Особиста інформація'}</CardTitle>
          <CardDescription>
            {t('profile.edit.description') || 'Оновіть свої особисті дані та контактну інформацію'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditProfileForm user={user} />
        </CardContent>
      </Card>

      {/* Канали зв&apos;язку */}
      <Card>
        <CardHeader>
          <CardTitle>{t('profile.contacts.title') || 'Канали зв&apos;язку'}</CardTitle>
          <CardDescription>
            {t('profile.contacts.description') ||
              'Налаштуйте способи, за якими інші користувачі зможуть з вами зв&apos;язатися'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditContactChannelsForm user={user} />
        </CardContent>
      </Card>

      {/* Verification Section */}
      <Card className="relative overflow-hidden">
        <CardHeader className="opacity-50">
          <CardTitle>
            <p className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" />{' '}
              {t('profile.verification.title') || 'Верифікація акаунту'}
            </p>
          </CardTitle>
          <CardDescription>{t('common.availableLater') || 'Буде доступно пізніше'}</CardDescription>
        </CardHeader>
      </Card>

      {/* Налаштування сповіщень */}
      <Card className="relative overflow-hidden">
        <CardHeader className="opacity-50">
          <CardTitle>
            <p className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" />{' '}
              {t('profile.notifications.title') || 'Сповіщення'}
            </p>
          </CardTitle>
          <CardDescription>{t('common.availableLater') || 'Буде доступно пізніше'}</CardDescription>
        </CardHeader>
      </Card>

      {/* Конфіденційність */}
      <Card>
        <CardHeader>
          <CardTitle>{t('profile.security.title') || 'Конфіденційність та безпека'}</CardTitle>
          <CardDescription>
            {t('profile.security.description') || 'Керуйте своїми даними та налаштуваннями безпеки'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="pt-4 flex gap-2">
            <Button variant="outline">
              {t('profile.security.changePassword') || 'Змінити пароль'}
            </Button>
            <Button
              variant="outline"
              className="text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              {t('auth.logout') || 'Вийти з акаунту'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
