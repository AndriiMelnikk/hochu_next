import { useMe } from '@entities/user';
import { EditProfileForm } from '@features/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';

import { Lock, Loader2 } from 'lucide-react';

const ProfileSettings = () => {
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
          <CardTitle>Особиста інформація</CardTitle>
          <CardDescription>Оновіть свої особисті дані та контактну інформацію</CardDescription>
        </CardHeader>
        <CardContent>
          <EditProfileForm user={user} />
        </CardContent>
      </Card>

      {/* Verification Section */}
      <Card className="relative overflow-hidden">
        <CardHeader className="opacity-50">
          <CardTitle>
            <p className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" /> Верифікація акаунту
            </p>
          </CardTitle>
          <CardDescription>Буде доступно пізніше</CardDescription>
        </CardHeader>
      </Card>

      {/* Налаштування сповіщень */}
      <Card className="relative overflow-hidden">
        <CardHeader className="opacity-50">
          <CardTitle>
            <p className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" /> Сповіщення
            </p>
          </CardTitle>
          <CardDescription>Буде доступно пізніше</CardDescription>
        </CardHeader>
      </Card>

      {/* Конфіденційність */}
      <Card>
        <CardHeader>
          <CardTitle>Конфіденційність та безпека</CardTitle>
          <CardDescription>Керуйте своїми даними та налаштуваннями безпеки</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="pt-4 space-y-4">
            <Button variant="outline">Змінити пароль</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
