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
import { toast } from 'sonner';
import { useCancelAcceptedProposal } from '@/entities/proposal/hooks/useCancelAcceptedProposal';

interface CancelAcceptedProposalModalProps {
  requestId: string;
  proposalId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const CancelAcceptedProposalModal = ({
  requestId,
  proposalId,
  open,
  onOpenChange,
  onSuccess,
}: CancelAcceptedProposalModalProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const { mutateAsync: cancelAccepted, isPending } = useCancelAcceptedProposal(requestId);

  const handleCancelAccepted = async () => {
    try {
      await cancelAccepted(proposalId);
      toast.success(t('proposal.cancelAccepted.success'));
      onOpenChange(false);
      onSuccess?.();
    } catch {
      toast.error(t('proposal.cancelAccepted.error'));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('proposal.cancelAccepted.confirmTitle')}</DialogTitle>
          <DialogDescription>{t('proposal.cancelAccepted.confirmDescription')}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.reject.cancel')}
          </Button>
          <Button
            variant="destructive"
            onClick={(e) => {
              e.preventDefault();
              void handleCancelAccepted();
            }}
            disabled={isPending}
          >
            {isPending ? t('proposal.edit.submitting') : t('proposal.cancelAccepted.submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
