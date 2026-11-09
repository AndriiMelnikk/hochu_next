'use client';

import { useMemo, useState } from 'react';
import { Eye } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useClientPagination } from '@/shared/hooks/useClientPagination';
import { moderationRequests, type IModerationRequest } from '@/entities/admin';
import { ApproveRejectActions, PermissionGate } from '@/features/admin';
import {
  Pagination,
  Badge,
  Heading,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';

export function ModerationRequests() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<IModerationRequest[]>(moderationRequests);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.filter((i) => i.status === 'pending');
    return items.filter(
      (i) =>
        i.status === 'pending' &&
        (i.title.toLowerCase().includes(q) || i.author.toLowerCase().includes(q)),
    );
  }, [items, query]);
  const { page, setPage, totalPages, pageItems } = useClientPagination(filtered);

  const resolve = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'approved' } : item)),
    );
  };

  return (
    <section className="space-y-6">
      <header>
        <Heading level="title" as="h1">
          {t('admin.requests.title')}
        </Heading>
        <p className="mt-1 text-v2-muted">{t('admin.requests.description')}</p>
      </header>
      <div className="space-y-4">
        <Input
          search
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('admin.requests.searchPlaceholder')}
        />

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <p className="text-base font-semibold">{t('admin.empty.title')}</p>
            <p className="mt-2 max-w-sm text-sm text-v2-muted">{t('admin.empty.requests')}</p>
          </div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('admin.requests.table.id')}</TableHead>
                  <TableHead>{t('admin.requests.table.title')}</TableHead>
                  <TableHead>{t('admin.requests.table.author')}</TableHead>
                  <TableHead>{t('admin.requests.table.date')}</TableHead>
                  <TableHead>{t('admin.requests.table.status')}</TableHead>
                  <TableHead>{t('admin.requests.table.actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pageItems.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>#{request.id}</TableCell>
                    <TableCell className="font-medium">{request.title}</TableCell>
                    <TableCell>{request.author}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>
                      <Badge tone="neutral">{t('admin.requests.status.pending')}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" shape="circle" aria-label={t('admin.actions.view')}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <PermissionGate permission="moderation.requests">
                          <ApproveRejectActions
                            entityLabel={request.title}
                            onResolved={() => resolve(request.id)}
                          />
                        </PermissionGate>
                      </div>
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
