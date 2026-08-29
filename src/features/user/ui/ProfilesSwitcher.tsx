'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { Plus } from 'lucide-react';

import { Button } from '@shared/ui/button';
import { Loading } from '@shared/ui/loading';
import { useProfiles, type IProfile, type ProfileType } from '@entities/user';

import { ProfileCard } from './ProfileCard';
import { CreateProfileModal } from './CreateProfileModal';
import { useProfileSwitch } from '../hooks/useProfileSwitch';

interface ProfilesSwitcherProps {
  /** Widget/page supplies the path so this feature does not import app or widgets. */
  redirectTo?: (profileId: string) => string;
  compact?: boolean;
  embedCreateModal?: boolean;
  onSwitched?: (profileId: string) => void;
  onCreateRequested?: (type: ProfileType) => void;
}

export function ProfilesSwitcher({
  redirectTo,
  compact = false,
  embedCreateModal = true,
  onSwitched,
  onCreateRequested,
}: ProfilesSwitcherProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: profiles = [], isLoading, error, refetch } = useProfiles();
  const { switchToProfile, activeProfileId } = useProfileSwitch({
    redirectTo,
    onSwitched,
  });
  const [createModalType, setCreateModalType] = useState<ProfileType | null>(null);

  const PROFILE_TYPE_LABELS: Record<ProfileType, string> = {
    buyer: t('profile.type.buyer'),
    seller: t('profile.type.seller'),
  };

  const canCreateBuyer = !profiles.some((p) => p.type === 'buyer');
  const canCreateSeller = !profiles.some((p) => p.type === 'seller');

  const handleCreate = (type: ProfileType) => {
    if (embedCreateModal) {
      setCreateModalType(type);
      return;
    }
    onCreateRequested?.(type);
  };

  if (isLoading) {
    return <Loading variant={compact ? 'block' : 'full-page'} />;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-destructive">{t('profile.profiles.loadingError')}</div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile._id}
            profile={profile}
            isActive={profile._id === activeProfileId}
            onSelect={() => {
              void switchToProfile(profile._id);
            }}
            labels={PROFILE_TYPE_LABELS}
          />
        ))}
      </div>

      {(canCreateBuyer || canCreateSeller) && (
        <div className="flex flex-wrap gap-3 pt-4 border-t">
          {canCreateBuyer && (
            <Button variant="outline" onClick={() => handleCreate('buyer')}>
              <Plus className="h-4 w-4 mr-2" />
              {t('profile.profiles.createBuyer')}
            </Button>
          )}
          {canCreateSeller && (
            <Button variant="outline" onClick={() => handleCreate('seller')}>
              <Plus className="h-4 w-4 mr-2" />
              {t('profile.profiles.createSeller')}
            </Button>
          )}
        </div>
      )}

      {embedCreateModal && (
        <CreateProfileModal
          type={createModalType ?? 'seller'}
          open={!!createModalType}
          onOpenChange={(open) => {
            if (!open) setCreateModalType(null);
          }}
          onSuccess={async (profile: IProfile) => {
            await refetch();
            await switchToProfile(profile._id);
          }}
        />
      )}
    </div>
  );
}
