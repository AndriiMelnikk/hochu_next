'use client';

import { useLingui } from '@lingui/react';

import { Card, CardBody, CardDescription, CardHead, CardTitle, Heading } from '@/ui-v2';
import { NotificationSettingsContent } from '@/widgets/app/NotificationSettings';

export default function NotificationPrefsContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="space-y-6">
      <Heading level="title" as="h1">
        {t('profile.tabs.settings')}
      </Heading>
      <Card>
        <CardHead>
          <CardTitle>{t('profile.notifications.title')}</CardTitle>
          <CardDescription>{t('profile.notifications.settingsDescription')}</CardDescription>
        </CardHead>
        <CardBody>
          <NotificationSettingsContent />
        </CardBody>
      </Card>
    </div>
  );
}
