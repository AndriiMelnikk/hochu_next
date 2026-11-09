'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import { useClientPagination } from '@/shared/hooks/useClientPagination';
import { moderationProposals, type IModerationProposal } from '@/entities/admin';
import { ApproveRejectActions, PermissionGate } from '@/features/admin';
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Heading,
} from '@/ui-v2';

export function ModerationProposals() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [items, setItems] = useState<IModerationProposal[]>(moderationProposals);
  const pending = items.filter((i) => i.status === 'pending');
  const { page, setPage, totalPages, pageItems } = useClientPagination(pending);

  return (
    <section className="space-y-6">
      <header>
        <Heading level="title" as="h1">
          {t('admin.proposals.title')}
        </Heading>
        <p className="mt-1 text-v2-muted">{t('admin.proposals.description')}</p>
      </header>
      <div className="space-y-4">
        {pending.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <p className="text-base font-semibold">{t('admin.empty.title')}</p>
            <p className="mt-2 max-w-sm text-sm text-v2-muted">{t('admin.empty.proposals')}</p>
          </div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('admin.proposals.table.id')}</TableHead>
                  <TableHead>{t('admin.proposals.table.requestId')}</TableHead>
                  <TableHead>{t('admin.proposals.table.author')}</TableHead>
                  <TableHead>{t('admin.proposals.table.price')}</TableHead>
                  <TableHead>{t('admin.proposals.table.date')}</TableHead>
                  <TableHead>{t('admin.proposals.table.actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pageItems.map((proposal) => (
                  <TableRow key={proposal.id}>
                    <TableCell>#{proposal.id}</TableCell>
                    <TableCell>#{proposal.requestId}</TableCell>
                    <TableCell>{proposal.author}</TableCell>
                    <TableCell>
                      {proposal.price} {t('admin.analytics.revenueCurrency')}
                    </TableCell>
                    <TableCell>{proposal.date}</TableCell>
                    <TableCell>
                      <PermissionGate permission="moderation.proposals">
                        <ApproveRejectActions
                          entityLabel={`#${proposal.id}`}
                          onResolved={() =>
                            setItems((prev) =>
                              prev.map((item) =>
                                item.id === proposal.id ? { ...item, status: 'approved' } : item,
                              ),
                            )
                          }
                        />
                      </PermissionGate>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {totalPages > 1 && (
              <Pagination
                className="mt-4"
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
