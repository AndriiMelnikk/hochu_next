'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import type { IProfile, ProfileType } from '@entities/user';
import { ProfilesSwitcher } from './ProfilesSwitcher';
import { CreateProfileModal } from './CreateProfileModal';
import { useProfileSwitch } from '../hooks/useProfileSwitch';
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle } from '@/ui-v2';

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
      <Modal
        open={open && !createType}
        onOpenChange={(next) => {
          if (createType) return;
          onOpenChange(next);
        }}
      >
        <ModalContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <ModalHeader>
            <ModalTitle>{t('profile.profiles.title')}</ModalTitle>
            <ModalDescription>{t('profile.profiles.description')}</ModalDescription>
          </ModalHeader>
          <ProfilesSwitcher
            compact
            embedCreateModal={false}
            onSwitched={handleSwitched}
            onCreateRequested={setCreateType}
          />
        </ModalContent>
      </Modal>

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
