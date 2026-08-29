'use client';

import { useLingui } from '@lingui/react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import { routes } from '@/app/router/routes';
import { useAuthStore } from '@/entities/auth';
import { useRequestStore } from '@/entities/request';
import { PROFILE_TAB } from '@/widgets/app/ProfileTabs/const';

interface UseProfileSwitchOptions {
  navigateAfterSwitch?: boolean;
  onSwitched?: () => void;
}

export function useProfileSwitch({
  navigateAfterSwitch = false,
  onSwitched,
}: UseProfileSwitchOptions = {}) {
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
      if (navigateAfterSwitch) {
        queryClient.clear();
        router.push(routes.PROFILE_TAB(profileId, PROFILE_TAB.PROFILES));
      } else {
        await queryClient.invalidateQueries();
      }
      toast.success(t('profile.profiles.switchSuccess'));
      onSwitched?.();
      return true;
    } catch {
      toast.error(t('profile.profiles.switchError'));
      return false;
    }
  };

  return { switchToProfile, activeProfileId };
}
