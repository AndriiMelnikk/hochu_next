'use client';

import { useLingui } from '@lingui/react';
import type { IProposalWithSeller } from '@/entities/proposal';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/dialog';
import { EditProposalForm } from './EditProposalForm';

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>{t('proposal.edit.title')}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <EditProposalForm proposal={proposal} onSuccess={handleSuccess} onCancel={handleCancel} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
