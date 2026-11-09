'use client';

import { useLingui } from '@lingui/react';
import type { IRequest } from '@/entities/request';
import { EditRequestForm } from './EditRequestForm';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '@/ui-v2';

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
    onOpenChange(false);
    // Invalidate after the dialog starts closing so Radix can release the
    // pointer-events lock before the page re-renders with fresh request data.
    window.setTimeout(() => {
      onSuccess();
    }, 0);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <ModalHeader>
          <ModalTitle>{t('request.edit.title')}</ModalTitle>
        </ModalHeader>
        <div className="flex-1 overflow-hidden">
          <EditRequestForm
            key={request._id}
            request={request}
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />
        </div>
      </ModalContent>
    </Modal>
  );
};
