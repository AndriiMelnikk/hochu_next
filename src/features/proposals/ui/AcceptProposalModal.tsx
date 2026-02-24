'use client';

import { useLingui } from '@lingui/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@shared/ui/dialog';
import { Button } from '@shared/ui/button';
import { useAcceptProposal } from '@/entities/proposal/hooks/useAcceptProposal';
import { toast } from 'sonner';

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('proposal.accept.confirmTitle')}</DialogTitle>
          <DialogDescription>{t('proposal.accept.confirmDescription')}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.edit.cancel')}
          </Button>
          <Button
            variant="default"
            onClick={(e) => {
              e.preventDefault();
              handleAcceptProposal();
            }}
            disabled={isAccepting}
          >
            {isAccepting ? t('proposal.edit.submitting') : t('proposal.accept.submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
