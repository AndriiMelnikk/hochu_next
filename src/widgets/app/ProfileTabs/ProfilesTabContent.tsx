'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { routes } from '@/app/router/routes';
import { useAuthStore } from '@/entities/auth';
import { useRequestStore } from '@/entities/request';
import { useProfiles } from '@/entities/user';
import type { IProfile, ProfileType } from '@/entities/user';
import { CreateProfileModal } from '@features/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';
import { Plus, ShoppingCart, Store } from 'lucide-react';
import { toast } from 'react-toastify';
import { Loading } from '@/shared/ui/loading';

const PROFILE_TYPE_ICONS: Record<ProfileType, typeof ShoppingCart> = {
  buyer: ShoppingCart,
  seller: Store,
};

import { useLingui } from '@lingui/react';

export default function ProfilesTabContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const PROFILE_TYPE_LABELS: Record<ProfileType, string> = {
    buyer: t('profile.type.buyer'),
    seller: t('profile.type.seller'),
  };

  const router = useRouter();
  const queryClient = useQueryClient();
  const resetRequestStore = useRequestStore((s) => s.reset);
  const { user, currentProfileId, switchProfile } = useAuthStore();
  const { data: profiles = [], isLoading, error, refetch } = useProfiles();
  const [createModalType, setCreateModalType] = useState<ProfileType | null>(null);

  const activeProfileId = currentProfileId ?? user?.profile?._id;

  const hasBuyer = profiles.some((p) => p.type === 'buyer');
  const hasSeller = profiles.some((p) => p.type === 'seller');

  const canCreateBuyer = !hasBuyer;
  const canCreateSeller = !hasSeller;

  const handleSwitchProfile = async (profileId: string) => {
    if (profileId === activeProfileId) return;
    try {
      await switchProfile(profileId);
      queryClient.clear();
      resetRequestStore();
      router.push(routes.PROFILE_BY_ID(profileId));
      toast.success(t('profile.profiles.switchSuccess'));
    } catch {
      toast.error(t('profile.profiles.switchError'));
    }
  };

  const handleOpenCreateModal = (type: ProfileType) => setCreateModalType(type);
  const handleCloseCreateModal = () => setCreateModalType(null);

  if (isLoading) {
    return <Loading variant="full-page" />;
  }

  if (error) {
    return (
      <div className="p-8 text-center text-destructive">
        {t('profile.profiles.loadingError')}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('profile.profiles.title')}</CardTitle>
          <CardDescription>
            {t('profile.profiles.description')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile._id}
                profile={profile}
                isActive={profile._id === activeProfileId}
                onSelect={() => handleSwitchProfile(profile._id)}
                labels={PROFILE_TYPE_LABELS}
              />
            ))}
          </div>

          {(canCreateBuyer || canCreateSeller) && (
            <div className="flex flex-wrap gap-3 pt-4 border-t">
              {canCreateBuyer && (
                <Button variant="outline" onClick={() => handleOpenCreateModal('buyer')}>
                  <Plus className="h-4 w-4 mr-2" />
                  {t('profile.profiles.createBuyer')}
                </Button>
              )}
              {canCreateSeller && (
                <Button variant="outline" onClick={() => handleOpenCreateModal('seller')}>
                  <Plus className="h-4 w-4 mr-2" />
                  {t('profile.profiles.createSeller')}
                </Button>
              )}
            </div>
          )}

          {createModalType && (
            <CreateProfileModal
              type={createModalType}
              open={!!createModalType}
              onOpenChange={(open) => {
                if (!open) handleCloseCreateModal();
              }}
              onSuccess={refetch}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

interface ProfileCardProps {
  profile: IProfile;
  isActive: boolean;
  onSelect: () => void;
  labels: Record<ProfileType, string>;
}

function ProfileCard({ profile, isActive, onSelect, labels }: ProfileCardProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  
  const Icon = PROFILE_TYPE_ICONS[profile.type];
  const label = labels[profile.type];
  const displayName = [profile.name, profile.lastName].filter(Boolean).join(' ') || label;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        flex w-full min-w-0 items-center gap-4 rounded-lg border p-4 text-left transition-colors
        hover:bg-accent/50
        ${isActive ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border'}
      `}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
          isActive ? 'bg-primary text-primary-foreground' : 'bg-muted'
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium truncate">{displayName}</p>
        <p className="text-sm text-muted-foreground truncate">{label}</p>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {t('profile.profiles.stats')
            .replace('{rating}', profile.rating.toString())
            .replace('{xp}', profile.xp.toString())
            .replace('{deals}', profile.completedDeals.toString())}
        </p>
      </div>
      {isActive && (
        <span className="shrink-0 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
          {t('profile.profiles.currentBadge')}
        </span>
      )}
    </button>
  );
}
