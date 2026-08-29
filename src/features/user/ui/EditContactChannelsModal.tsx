'use client';

import { useLingui } from '@lingui/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@shared/ui/dialog';
import type { IUser } from '@/entities/user';
import { EditContactChannelsForm } from './EditContactChannelsForm';

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('profile.contacts.title')}</DialogTitle>
          <DialogDescription>{t('profile.contacts.description')}</DialogDescription>
        </DialogHeader>
        <EditContactChannelsForm user={user} onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
};
