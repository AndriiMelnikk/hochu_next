import { useMe } from '@entities/user';
import { useLingui } from '@lingui/react';
import { EditProfileForm, EditContactChannelsForm } from '@features/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';

import { Lock, Loader2 } from 'lucide-react';

const ProfileSettings = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: user, isLoading, error } = useMe();

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
          <div className="pt-4 space-y-4">
            <Button variant="outline">
              {t('profile.security.changePassword') || 'Змінити пароль'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
