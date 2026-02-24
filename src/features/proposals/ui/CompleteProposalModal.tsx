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
import { useCompleteProposal } from '@/entities/proposal/hooks/useCompleteProposal';
import { toast } from 'sonner';

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('proposal.complete.confirmTitle')}</DialogTitle>
          <DialogDescription>{t('proposal.complete.confirmDescription')}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('proposal.edit.cancel')}
          </Button>
          <Button
            variant="default"
            onClick={(e) => {
              e.preventDefault();
              handleCompleteProposal();
            }}
            disabled={isCompleting}
          >
            {isCompleting ? t('proposal.edit.submitting') : t('proposal.complete.submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
