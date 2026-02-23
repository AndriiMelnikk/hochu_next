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
import { useCancelProposal } from '@/entities/proposal/hooks/useCancelProposal';
import { toast } from 'sonner';

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('proposal.cancel.confirmTitle')}</DialogTitle>
          <DialogDescription>{t('proposal.cancel.confirmDescription')}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.edit.cancel')}
          </Button>
          <Button
            variant="destructive"
            onClick={(e) => {
              e.preventDefault();
              handleCancelProposal();
            }}
            disabled={isCancelling}
          >
            {isCancelling ? t('proposal.edit.submitting') : t('proposal.item.cancelButton')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
