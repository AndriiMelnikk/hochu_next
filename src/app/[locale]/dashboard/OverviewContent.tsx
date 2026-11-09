'use client';

import { useLingui } from '@lingui/react';

import { Heading } from '@/ui-v2';
import { useAuthStore } from '@/entities/auth';
import UserRequestsList from '@/widgets/app/UserRequestsList';

export default function OverviewContent() {
  const { i18n } = useLingui();
  const user = useAuthStore((s) => s.user);
  if (!user) return null;
  return (
    <div className="space-y-6">
      <Heading level="title" as="h1">
        {i18n._('profile.tabs.overview')}
      </Heading>
      <UserRequestsList userId={user.profile._id} userType={user.profile.type} />
    </div>
  );
}
