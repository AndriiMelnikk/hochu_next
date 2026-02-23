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
import { useRejectProposal } from '@/entities/proposal/hooks/useRejectProposal';
import { toast } from 'sonner';

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('proposal.reject.confirmTitle')}</DialogTitle>
          <DialogDescription>{t('proposal.reject.confirmDescription')}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.reject.cancel')}
          </Button>
          <Button
            variant="destructive"
            onClick={(e) => {
              e.preventDefault();
              handleRejectProposal();
            }}
            disabled={isRejecting}
          >
            {isRejecting ? t('proposal.edit.submitting') : t('proposal.reject.submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
