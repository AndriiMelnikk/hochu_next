'use client';

import { useLingui } from '@lingui/react';

import { Heading } from '@/ui-v2';

import { NotificationsTabContent } from '@/widgets/app/NotificationsTab';

export default function NotificationsContent() {
  const { i18n } = useLingui();

  return (
    <div className="space-y-6">
      <Heading level="title" as="h1">
        {i18n._('profile.tabs.notifications')}
      </Heading>
      <NotificationsTabContent />
    </div>
  );
}
