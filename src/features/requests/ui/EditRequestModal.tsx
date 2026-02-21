'use client';

import { useLingui } from '@lingui/react';
import type { IRequest } from '@/entities/request';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/dialog';
import { EditRequestForm } from './EditRequestForm';

interface EditRequestModalProps {
  request: IRequest;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const EditRequestModal = ({
  request,
  open,
  onOpenChange,
  onSuccess,
}: EditRequestModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const handleSuccess = () => {
    onSuccess();
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>{t('request.edit.title')}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <EditRequestForm request={request} onSuccess={handleSuccess} onCancel={handleCancel} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
