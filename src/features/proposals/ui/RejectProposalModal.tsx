'use client';

import { useLingui } from '@lingui/react';
import { useRejectProposal } from '@/entities/proposal/hooks/useRejectProposal';
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

interface RejectProposalModalProps {
  requestId: string;
  proposalId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const RejectProposalModal = ({
  requestId,
  proposalId,
  open,
  onOpenChange,
  onSuccess,
}: RejectProposalModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { mutateAsync: rejectProposal, isPending: isRejecting } = useRejectProposal(requestId);

  const handleRejectProposal = async () => {
    try {
      await rejectProposal(proposalId);
      toast.success(t('proposal.reject.success'));
      onOpenChange(false);
      onSuccess?.();
    } catch {
      toast.error(t('proposal.reject.error'));
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{t('proposal.reject.confirmTitle')}</ModalTitle>
          <ModalDescription>{t('proposal.reject.confirmDescription')}</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.reject.cancel')}
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              handleRejectProposal();
            }}
            disabled={isRejecting}
          >
            {isRejecting ? t('proposal.edit.submitting') : t('proposal.reject.submit')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
