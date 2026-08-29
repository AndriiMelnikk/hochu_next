'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { ProfilesSwitcher } from '@features/user';
import { useLingui } from '@lingui/react';

export default function ProfilesTabContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('profile.profiles.title')}</CardTitle>
          <CardDescription>{t('profile.profiles.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <ProfilesSwitcher navigateAfterSwitch />
        </CardContent>
      </Card>
    </div>
  );
}
