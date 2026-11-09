'use client';

import { useLingui } from '@lingui/react';
import { useAcceptProposal } from '@/entities/proposal/hooks/useAcceptProposal';
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

interface AcceptProposalModalProps {
  requestId: string;
  proposalId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const AcceptProposalModal = ({
  requestId,
  proposalId,
  open,
  onOpenChange,
  onSuccess,
}: AcceptProposalModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { mutateAsync: acceptProposal, isPending: isAccepting } = useAcceptProposal(requestId);

  const handleAcceptProposal = async () => {
    try {
      await acceptProposal(proposalId);
      toast.success(t('proposal.accept.success'));
      onOpenChange(false);
      onSuccess?.();
    } catch {
      toast.error(t('proposal.accept.error'));
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{t('proposal.accept.confirmTitle')}</ModalTitle>
          <ModalDescription>
            <p>{t('proposal.accept.confirmDescription_1')}</p>
            <br />
            <p>{t('proposal.accept.confirmDescription_2')}</p>
            <br />
            <p>{t('proposal.accept.confirmDescription_3')}</p>
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.edit.cancel')}
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleAcceptProposal();
            }}
            disabled={isAccepting}
          >
            {isAccepting ? t('proposal.edit.submitting') : t('proposal.accept.submit')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
