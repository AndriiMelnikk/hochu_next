'use client';

import { useLingui } from '@lingui/react';
import type { IUser } from '@/entities/user';
import { EditContactChannelsForm } from './EditContactChannelsForm';
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle } from '@/ui-v2';

interface EditContactChannelsModalProps {
  user: IUser;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const EditContactChannelsModal = ({
  user,
  open,
  onOpenChange,
  onSuccess,
}: EditContactChannelsModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const handleSuccess = () => {
    onOpenChange(false);
    window.setTimeout(() => {
      onSuccess?.();
    }, 0);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <ModalHeader>
          <ModalTitle>{t('profile.contacts.title')}</ModalTitle>
          <ModalDescription>{t('profile.contacts.description')}</ModalDescription>
        </ModalHeader>
        <EditContactChannelsForm user={user} onSuccess={handleSuccess} />
      </ModalContent>
    </Modal>
  );
};
