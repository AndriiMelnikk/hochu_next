'use client';

import { useLingui } from '@lingui/react';

import { routes } from '@app/router/routes';
import { ProfilesSwitcher } from '@features/user';

import { Card, CardBody, CardDescription, CardHead, CardTitle } from '@/ui-v2';

export default function ProfilesTabContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="space-y-6">
      <Card>
        <CardHead>
          <CardTitle>{t('profile.profiles.title')}</CardTitle>
          <CardDescription>{t('profile.profiles.description')}</CardDescription>
        </CardHead>
        <CardBody>
          <ProfilesSwitcher redirectTo={(id) => routes.DASHBOARD_PROFILES} />
        </CardBody>
      </Card>
    </div>
  );
}
