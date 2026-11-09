'use client';

import { useLingui } from '@lingui/react';

import { Heading } from '@/ui-v2';

import ProfilesTabContent from '@/widgets/app/ProfileTabs/ProfilesTabContent';

export default function ProfilesContent() {
  const { i18n } = useLingui();

  return (
    <div className="space-y-6">
      <Heading level="title" as="h1">
        {i18n._('profile.tabs.profiles')}
      </Heading>
      <ProfilesTabContent />
    </div>
  );
}
