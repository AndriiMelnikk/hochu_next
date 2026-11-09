'use client';

import { useLingui } from '@lingui/react';
import { useCompleteProposal } from '@/entities/proposal/hooks/useCompleteProposal';
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

interface CompleteProposalModalProps {
  requestId: string;
  proposalId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const CompleteProposalModal = ({
  requestId,
  proposalId,
  open,
  onOpenChange,
  onSuccess,
}: CompleteProposalModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { mutateAsync: completeProposal, isPending: isCompleting } = useCompleteProposal(requestId);

  const handleCompleteProposal = async () => {
    try {
      await completeProposal(proposalId);
      toast.success(t('proposal.complete.success'));
      onOpenChange(false);
      onSuccess?.();
    } catch {
      toast.error(t('proposal.complete.error'));
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{t('proposal.complete.confirmTitle')}</ModalTitle>
          <ModalDescription>
            <p>{t('proposal.complete.confirmDescription_1')}</p>
            <br />
            <p>{t('proposal.complete.confirmDescription_2')}</p>
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.edit.cancel')}
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleCompleteProposal();
            }}
            disabled={isCompleting}
          >
            {isCompleting ? t('proposal.edit.submitting') : t('proposal.complete.submit')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
