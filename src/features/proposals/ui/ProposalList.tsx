'use client';

import { useLingui } from '@lingui/react';
import { ProposalItem } from './ProposalItem';
import { useProposals, type IProposalWithSeller, ProposalStatus } from '@/entities/proposal';
import { Loading } from '@shared/ui/loading';
import { useQueryPagination } from '@shared/hooks';
import { UniversalPagination } from '@shared/ui/universal-pagination';
import { useMemo } from 'react';
import { RequestStatus } from '@/entities/request';

interface ProposalListProps {
  requestId: string;
  onImageClick: (images: string[], index: number) => void;
  isOwner: boolean;
  currentUserId?: string;
  onProposalSuccess?: () => void;
  buyerId?: string;
  status?: ProposalStatus;
  type?: 'pending' | 'rejected';
  requestStatus?: RequestStatus;
}

export const ProposalList = ({
  requestId,
  onImageClick,
  isOwner,
  currentUserId,
  onProposalSuccess,
  buyerId,
  status,
  type,
  requestStatus,
}: ProposalListProps) => {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const paginationOptions = useMemo(() => ({ pageSize: 100 }), []);
  const { page, pageSize, setPage } = useQueryPagination<Record<string, never>>(paginationOptions);

  const { data, isLoading, error } = useProposals(requestId, { page, pageSize, status });

  if (isLoading) {
    return <Loading variant="full-page" />;
  }

  if (error) {
    return (
      <p className="text-sm text-destructive py-4">{t('request.detail.proposalsLoadError')}</p>
    );
  }

  const proposals = data?.results ?? [];

  const acceptedProposal =
    status != null
      ? undefined
      : proposals.find(
          (proposal) =>
            proposal.status === ProposalStatus.ACCEPTED ||
            proposal.status === ProposalStatus.COMPLETED,
        );

  const visibleProposals =
    status === ProposalStatus.REJECTED
      ? proposals
      : proposals.filter((proposal) => proposal.status === ProposalStatus.PENDING);

  const totalCount =
    status === ProposalStatus.REJECTED
      ? (data?.count ?? visibleProposals.length)
      : visibleProposals.length;

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!acceptedProposal && visibleProposals.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-4">{t('request.detail.proposalsEmpty')}</p>
    );
  }

  return (
    <div className="space-y-4">
      {acceptedProposal && status !== ProposalStatus.REJECTED && (
        <ProposalItem
          key={acceptedProposal._id}
          proposal={acceptedProposal as IProposalWithSeller}
          onImageClick={onImageClick}
          isOwner={isOwner}
          isProposalOwner={currentUserId != null && acceptedProposal.sellerId === currentUserId}
          onProposalSuccess={onProposalSuccess}
          buyerId={buyerId}
          requestStatus={requestStatus}
          isSelected
        />
      )}
      {visibleProposals.map((proposal) => (
        <ProposalItem
          key={proposal._id}
          proposal={proposal as IProposalWithSeller}
          onImageClick={onImageClick}
          isOwner={isOwner}
          isProposalOwner={currentUserId != null && proposal.sellerId === currentUserId}
          onProposalSuccess={onProposalSuccess}
          buyerId={buyerId}
          type={type}
          requestStatus={requestStatus}
        />
      ))}
      {totalPages > 1 && (
        <UniversalPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-6"
        />
      )}
    </div>
  );
};
