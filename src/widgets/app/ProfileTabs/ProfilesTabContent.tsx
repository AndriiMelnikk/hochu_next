'use client';

import { useLingui } from '@lingui/react';

import { routes } from '@app/router/routes';
import { ProfilesSwitcher } from '@features/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';

import { PROFILE_TAB } from './const';

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
          <ProfilesSwitcher redirectTo={(id) => routes.PROFILE_TAB(id, PROFILE_TAB.PROFILES)} />
        </CardContent>
      </Card>
    </div>
  );
}
