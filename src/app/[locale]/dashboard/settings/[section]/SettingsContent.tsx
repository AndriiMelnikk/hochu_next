'use client';

import { useLingui } from '@lingui/react';

import { Heading } from '@/ui-v2';

import ProfileSettings, {
  type SettingsSection,
} from '@/widgets/app/ProfileSettings/ProfileSettings';

export default function SettingsContent({ section }: { section: SettingsSection }) {
  const { i18n } = useLingui();

  return (
    <div className="space-y-6">
      <Heading level="title" as="h1">
        {i18n._(`profile.settings.nav.${section}`)}
      </Heading>
      <ProfileSettings section={section} />
    </div>
  );
}
