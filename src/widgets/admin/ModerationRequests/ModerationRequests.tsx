'use client';

import { useRef, useState } from 'react';
import { CheckCircle, Eye, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useLingui } from '@lingui/react';
import {
  useBulkModerate,
  useModerateRequest,
  useModerationRequests,
  type IModerationRequest,
  type ModerationFilter,
} from '@/entities/admin';
import {
  ApproveRejectActions,
  PermissionGate,
  RejectReasonDialog,
  getAdminErrorMessage,
} from '@/features/admin';
import {
  Button,
  Checkbox,
  ErrorState,
  Heading,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/ui-v2';
import { RequestDetailModal } from './RequestDetailModal';
import { RequestStatusBadge } from './RequestStatusBadge';
import { formatDateTime } from './formatDateTime';

const PAGE_SIZE = 10;
const TABS: ModerationFilter[] = ['pending', 'active', 'rejected', 'all'];

export function ModerationRequests() {
  const { i18n } = useLingui();
  const t = (id: string, v?: Record<string, string | number>) => i18n._(id, v);

  const [status, setStatus] = useState<ModerationFilter>('pending');
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [q, setQ] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [detailId, setDetailId] = useState<string | null>(null);
  const [bulkRejectOpen, setBulkRejectOpen] = useState(false);
  const debounce = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const { data, isLoading, isError, isFetching, refetch } = useModerationRequests({
    status,
    q: q || undefined,
    page,
    pageSize: PAGE_SIZE,
  });
  const { mutateAsync: moderate } = useModerateRequest();
  const { mutateAsync: bulk, isPending: bulkBusy } = useBulkModerate();

  const items = data?.results ?? [];
  const counts = data?.counts;
  const totalPages = Math.max(1, Math.ceil((data?.count ?? 0) / PAGE_SIZE));
  const allSelected = items.length > 0 && items.every((i) => selected.has(i.id));

  const resetView = () => {
    setPage(1);
    setSelected(new Set());
  };
  const changeStatus = (next: string) => {
    setStatus(next as ModerationFilter);
    resetView();
  };
  const changeSearch = (value: string) => {
    setSearchInput(value);
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      setQ(value.trim());
      resetView();
    }, 300);
  };
  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(items.map((i) => i.id)));

  const runBulk = async (action: 'approve' | 'reject', reason?: string) => {
    const result = await bulk({ ids: [...selected], action, reason });
    setSelected(new Set(result.failed.map((f) => f.id)));
    if (result.failed.length === 0) {
      toast.success(t('admin.requests.bulk.done', { count: result.succeeded.length }));
    } else {
      toast.warning(
        t('admin.requests.bulk.partial', {
          ok: result.succeeded.length,
          failed: result.failed.length,
        }),
      );
    }
  };

  const approveSelected = async () => {
    try {
      await runBulk('approve');
    } catch (e) {
      toast.error(getAdminErrorMessage(e, (id) => t(id)));
    }
  };

  const tabLabel = (tab: ModerationFilter) => {
    const base = t(`admin.requests.tab.${tab}`);
    if (!counts) return base;
    const n = tab === 'all' ? counts.pending + counts.active + counts.rejected : counts[tab];
    return `${base} (${n})`;
  };

  const row = (request: IModerationRequest) => (
    <TableRow key={request.id} data-state={selected.has(request.id) ? 'selected' : undefined}>
      <PermissionGate permission="moderation.requests">
        <TableCell className="w-10">
          <Checkbox
            checked={selected.has(request.id)}
            onCheckedChange={() => toggle(request.id)}
            aria-label={t('admin.requests.bulk.selectRow', { title: request.title })}
          />
        </TableCell>
      </PermissionGate>
      <TableCell className="max-w-[320px]">
        <button
          type="button"
          className="block max-w-full truncate text-left font-medium hover:underline"
          onClick={() => setDetailId(request.id)}
        >
          {request.title}
        </button>
        {request.category && (
          <span className="block truncate text-sm text-v2-muted">{request.category.title}</span>
        )}
      </TableCell>
      <TableCell>
        {request.buyer?.name || '—'}
        {request.buyer?.email && (
          <span className="block text-sm text-v2-muted">{request.buyer.email}</span>
        )}
      </TableCell>
      <TableCell className="whitespace-nowrap">
        {formatDateTime(request.createdAt, i18n.locale)}
      </TableCell>
      <TableCell className="max-w-[220px]">
        <RequestStatusBadge status={request.status} />
        {request.status === 'rejected' && request.rejectionReason && (
          <span
            className="mt-1 block truncate text-sm text-v2-muted"
            title={request.rejectionReason}
          >
            {request.rejectionReason}
          </span>
        )}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            shape="circle"
            aria-label={t('admin.actions.view')}
            onClick={() => setDetailId(request.id)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <PermissionGate permission="moderation.requests">
            <ApproveRejectActions
              entityLabel={request.title}
              canApprove={request.status !== 'active'}
              canReject={request.status !== 'rejected'}
              onApprove={async () => {
                await moderate({ id: request.id, action: 'approve' });
              }}
              onReject={async (reason) => {
                await moderate({ id: request.id, action: 'reject', reason });
              }}
              onResolved={() =>
                setSelected((prev) => {
                  const next = new Set(prev);
                  next.delete(request.id);
                  return next;
                })
              }
            />
          </PermissionGate>
        </div>
      </TableCell>
    </TableRow>
  );

  return (
    <section className="space-y-6">
      <header>
        <Heading level="title" as="h1">
          {t('admin.requests.title')}
        </Heading>
        <p className="mt-1 text-v2-muted">{t('admin.requests.description')}</p>
      </header>

      <div className="space-y-4">
        <Tabs value={status} onValueChange={changeStatus}>
          <TabsList className="overflow-x-auto">
            {TABS.map((tab) => (
              <TabsTrigger key={tab} value={tab}>
                {tabLabel(tab)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Input
          search
          value={searchInput}
          onChange={(e) => changeSearch(e.target.value)}
          placeholder={t('admin.requests.searchPlaceholder')}
        />

        {selected.size > 0 && (
          <PermissionGate permission="moderation.requests">
            <div
              role="region"
              aria-label={t('admin.requests.bulk.label')}
              className="flex flex-wrap items-center gap-3 rounded-v2-lg border border-v2-border bg-v2-surface-subtle px-4 py-3"
            >
              <span className="text-sm font-semibold">
                {t('admin.requests.bulk.selected', { count: selected.size })}
              </span>
              <Button size="sm" onClick={approveSelected} disabled={bulkBusy}>
                <CheckCircle />
                {t('admin.requests.bulk.approve')}
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() => setBulkRejectOpen(true)}
                disabled={bulkBusy}
              >
                <XCircle />
                {t('admin.requests.bulk.reject')}
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setSelected(new Set())}>
                {t('admin.requests.bulk.clear')}
              </Button>
            </div>
          </PermissionGate>
        )}

        {isError ? (
          <div className="flex flex-col items-center gap-3">
            <ErrorState message={t('admin.error.generic')} />
            <Button variant="outline" size="sm" onClick={() => void refetch()}>
              {t('admin.error.retry')}
            </Button>
          </div>
        ) : isLoading ? (
          <p className="py-12 text-center text-v2-muted">{t('admin.requests.loading')}</p>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <p className="text-base font-semibold">{t('admin.empty.title')}</p>
            <p className="mt-2 max-w-sm text-sm text-v2-muted">
              {t(`admin.requests.empty.${status}`)}
            </p>
          </div>
        ) : (
          <div className={isFetching ? 'opacity-70 transition-opacity' : undefined}>
            <Table>
              <TableHeader>
                <TableRow>
                  <PermissionGate permission="moderation.requests">
                    <TableHead className="w-10">
                      <Checkbox
                        checked={allSelected}
                        onCheckedChange={toggleAll}
                        aria-label={t('admin.requests.bulk.selectAll')}
                      />
                    </TableHead>
                  </PermissionGate>
                  <TableHead>{t('admin.requests.table.title')}</TableHead>
                  <TableHead>{t('admin.requests.table.author')}</TableHead>
                  <TableHead>{t('admin.requests.table.date')}</TableHead>
                  <TableHead>{t('admin.requests.table.status')}</TableHead>
                  <TableHead>{t('admin.requests.table.actions')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{items.map(row)}</TableBody>
            </Table>
            {totalPages > 1 && (
              <Pagination
                className="mt-4"
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(next) => {
                  setPage(next);
                  setSelected(new Set());
                }}
              />
            )}
          </div>
        )}
      </div>

      <RequestDetailModal requestId={detailId} onClose={() => setDetailId(null)} />
      <RejectReasonDialog
        open={bulkRejectOpen}
        onOpenChange={setBulkRejectOpen}
        title={t('admin.requests.bulk.rejectTitle', { count: selected.size })}
        onConfirm={(reason) => runBulk('reject', reason)}
      />
    </section>
  );
}
