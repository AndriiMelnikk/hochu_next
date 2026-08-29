'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@shared/ui/dialog';
import type { IProfile, ProfileType } from '@entities/user';
import { ProfilesSwitcher } from './ProfilesSwitcher';
import { CreateProfileModal } from './CreateProfileModal';
import { useProfileSwitch } from '../hooks/useProfileSwitch';

interface SwitchProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const SwitchProfileModal = ({ open, onOpenChange, onSuccess }: SwitchProfileModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [createType, setCreateType] = useState<ProfileType | null>(null);

  const handleSwitched = () => {
    setCreateType(null);
    onOpenChange(false);
    window.setTimeout(() => {
      onSuccess?.();
    }, 0);
  };

  const { switchToProfile } = useProfileSwitch({ onSwitched: handleSwitched });

  return (
    <>
      <Dialog
        open={open && !createType}
        onOpenChange={(next) => {
          if (createType) return;
          onOpenChange(next);
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t('profile.profiles.title')}</DialogTitle>
            <DialogDescription>{t('profile.profiles.description')}</DialogDescription>
          </DialogHeader>
          <ProfilesSwitcher
            compact
            embedCreateModal={false}
            onSwitched={handleSwitched}
            onCreateRequested={setCreateType}
          />
        </DialogContent>
      </Dialog>

      <CreateProfileModal
        type={createType ?? 'seller'}
        open={!!createType}
        onOpenChange={(next) => {
          if (!next) setCreateType(null);
        }}
        onSuccess={async (profile: IProfile) => {
          setCreateType(null);
          await switchToProfile(profile._id);
        }}
      />
    </>
  );
};
