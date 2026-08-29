'use client';

import { useLingui } from '@lingui/react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { useLocalizedRouter } from '@shared/hooks/useLocalizedRouter';
import { useAuthStore } from '@entities/auth';
import { useRequestStore } from '@entities/request';

interface UseProfileSwitchOptions {
  /** Destination after switch. Provided by widgets/pages so this feature does not import app/widgets. */
  redirectTo?: (profileId: string) => string;
  onSwitched?: (profileId: string) => void;
}

export function useProfileSwitch({ redirectTo, onSwitched }: UseProfileSwitchOptions = {}) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useLocalizedRouter();
  const queryClient = useQueryClient();
  const resetRequestStore = useRequestStore((s) => s.reset);
  const { user, currentProfileId, switchProfile } = useAuthStore();
  const activeProfileId = currentProfileId ?? user?.profile?._id;

  const switchToProfile = async (profileId: string) => {
    if (profileId === activeProfileId) return false;
    try {
      await switchProfile(profileId);
      resetRequestStore();
      const nextUser = useAuthStore.getState().user;
      if (nextUser) {
        queryClient.setQueryData(['users', 'me'], nextUser);
      }
      if (redirectTo) {
        queryClient.clear();
        router.push(redirectTo(profileId));
      } else {
        await queryClient.invalidateQueries();
      }
      toast.success(t('profile.profiles.switchSuccess'));
      onSwitched?.(profileId);
      return true;
    } catch {
      toast.error(t('profile.profiles.switchError'));
      return false;
    }
  };

  return { switchToProfile, activeProfileId };
}
