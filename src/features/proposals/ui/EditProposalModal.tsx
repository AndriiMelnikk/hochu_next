'use client';

import { useLingui } from '@lingui/react';
import type { IProposalWithSeller } from '@/entities/proposal';
import { EditProposalForm } from './EditProposalForm';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '@/ui-v2';

interface EditProposalModalProps {
  proposal: IProposalWithSeller;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const EditProposalModal = ({
  proposal,
  open,
  onOpenChange,
  onSuccess,
}: EditProposalModalProps) => {
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
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <ModalHeader>
          <ModalTitle>{t('proposal.edit.title')}</ModalTitle>
        </ModalHeader>
        <div className="flex-1 overflow-hidden">
          <EditProposalForm
            key={proposal._id}
            proposal={proposal}
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />
        </div>
      </ModalContent>
    </Modal>
  );
};
