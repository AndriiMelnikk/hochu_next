'use client';

import { useLingui } from '@lingui/react';
import { ProposalItem } from './ProposalItem';
import { useProposals, type IProposalWithSeller } from '@/entities/proposal';
import { Loading } from '@shared/ui/loading';

interface ProposalListProps {
  requestId: string;
  onImageClick: (images: string[], index: number) => void;
}

export const ProposalList = ({ requestId, onImageClick }: ProposalListProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const { data, isLoading, error } = useProposals(requestId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loading variant="inline" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-sm text-destructive py-4">{t('request.detail.proposalsLoadError')}</p>
    );
  }

  const proposals = data?.results ?? [];

  if (proposals.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-4">{t('request.detail.proposalsEmpty')}</p>
    );
  }

  return (
    <div className="space-y-4">
      {proposals.map((proposal) => (
        <ProposalItem
          key={proposal._id}
          proposal={proposal as IProposalWithSeller}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};
