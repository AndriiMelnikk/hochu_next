import { useEffect, useState } from 'react';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import { useQueryClient } from '@tanstack/react-query';
import { useMe } from '@entities/user';
import { useAuthStore } from '@entities/auth';
import { useRequestStore } from '@entities/request';
import { useLingui } from '@lingui/react';
import { EditProfileForm, EditContactChannelsForm } from '@features/user';
import { ChangePasswordModal } from '@features/auth';
import { routes } from '@/app/router/routes';
import { toast } from 'sonner';
import { PROFILE_HASH } from '@/widgets/app/ProfileTabs/const';

import { Lock } from 'lucide-react';
import { NotificationSettingsContent } from '@/widgets/app/NotificationSettings';
import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardHead,
  CardTitle,
  LoadingState,
} from '@/ui-v2';

const ProfileSettings = () => {
  const router = useLocalizedRouter();
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: user, isLoading, error } = useMe();
  const queryClient = useQueryClient();
  const resetRequestStore = useRequestStore((s) => s.reset);
  const logout = useAuthStore((s) => s.logout);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash.replace(/^#/, '') !== PROFILE_HASH.CONTACTS) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById('profile-contacts')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

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
    return <LoadingState className="min-h-[30vh]" />;
  }

  if (error || !user) {
    return (
      <div className="p-8 text-center text-v2-danger">
        Сталася помилка при завантаженні даних профілю
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Особиста інформація */}
      <Card>
        <CardHead>
          <CardTitle>{t('profile.edit.title')}</CardTitle>
          <CardDescription>{t('profile.edit.description')}</CardDescription>
        </CardHead>
        <CardBody>
          <EditProfileForm user={user} />
        </CardBody>
      </Card>

      {/* Канали зв&apos;язку */}
      <Card id="profile-contacts" className="scroll-mt-24">
        <CardHead>
          <CardTitle>{t('profile.contacts.title')}</CardTitle>
          <CardDescription>{t('profile.contacts.description')}</CardDescription>
        </CardHead>
        <CardBody>
          <EditContactChannelsForm user={user} />
        </CardBody>
      </Card>

      {/* Verification Section */}
      <Card className="relative overflow-hidden">
        <CardHead className="opacity-50">
          <CardTitle>
            <p className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-v2-muted" />{' '}
              {t('profile.verification.title') || 'Верифікація акаунту'}
            </p>
          </CardTitle>
          <CardDescription>{t('common.availableLater') || 'Буде доступно пізніше'}</CardDescription>
        </CardHead>
      </Card>

      {/* Налаштування сповіщень / підписки */}
      <Card>
        <CardHead>
          <CardTitle>{t('profile.notifications.title')}</CardTitle>
          <CardDescription>{t('profile.notifications.settingsDescription')}</CardDescription>
        </CardHead>
        <CardBody>
          <NotificationSettingsContent />
        </CardBody>
      </Card>

      {/* Конфіденційність */}
      <Card>
        <CardHead>
          <CardTitle>{t('profile.security.title') || 'Конфіденційність та безпека'}</CardTitle>
          <CardDescription>
            {t('profile.security.description') || 'Керуйте своїми даними та налаштуваннями безпеки'}
          </CardDescription>
        </CardHead>
        <CardBody className="space-y-6">
          <div className="pt-4 flex gap-2">
            <Button variant="outline" onClick={() => setIsChangePasswordOpen(true)}>
              {t('profile.security.changePassword') || 'Змінити пароль'}
            </Button>
            <Button
              variant="outline"
              className="text-v2-danger hover:bg-v2-hover hover:text-v2-danger"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              {t('auth.logout') || 'Вийти з акаунту'}
            </Button>
          </div>
        </CardBody>
      </Card>

      <ChangePasswordModal open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen} />
    </div>
  );
};

export default ProfileSettings;
