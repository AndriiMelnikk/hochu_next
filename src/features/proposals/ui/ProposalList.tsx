'use client';

import { useLingui } from '@lingui/react';
import { ProposalItem } from './ProposalItem';
import { useProposals, type IProposalWithSeller, type ProposalStatus } from '@/entities/proposal';
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
  const totalCount = data?.count ?? proposals.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          isOwner={isOwner}
          isProposalOwner={currentUserId != null && proposal.sellerId === currentUserId}
          onProposalSuccess={onProposalSuccess}
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
