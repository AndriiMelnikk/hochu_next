'use client';

import { useLingui } from '@lingui/react';
import { useCancelProposal } from '@/entities/proposal/hooks/useCancelProposal';
import { toast } from 'sonner';
import {
  Button,
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/ui-v2';

interface CancelProposalModalProps {
  requestId: string;
  proposalId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const CancelProposalModal = ({
  requestId,
  proposalId,
  open,
  onOpenChange,
  onSuccess,
}: CancelProposalModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { mutateAsync: cancelProposal, isPending: isCancelling } = useCancelProposal(requestId);

  const handleCancelProposal = async () => {
    try {
      await cancelProposal(proposalId);
      toast.success(t('proposal.cancel.success'));
      onOpenChange(false);
      onSuccess?.();
    } catch {
      toast.error(t('proposal.cancel.error'));
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{t('proposal.cancel.confirmTitle')}</ModalTitle>
          <ModalDescription>{t('proposal.cancel.confirmDescription')}</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.edit.cancel')}
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              handleCancelProposal();
            }}
            disabled={isCancelling}
          >
            {isCancelling ? t('proposal.edit.submitting') : t('proposal.item.cancelButton')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
