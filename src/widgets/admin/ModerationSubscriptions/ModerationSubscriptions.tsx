'use client';

import { useMemo, useState } from 'react';
import { Unlink } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { useClientPagination } from '@/shared/hooks/useClientPagination';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { adminNotificationService } from '@/entities/admin/services/adminNotificationService';
import { MockZone, PermissionGate } from '@/features/admin';
import {
  Pagination,
  Badge,
  Button,
  Heading,
  Input,
  LoadingState,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui-v2';

type EnabledFilter = 'all' | 'enabled' | 'disabled';
type TelegramFilter = 'all' | 'linked' | 'unlinked';

export function ModerationSubscriptions() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const queryClient = useQueryClient();

  const [query, setQuery] = useState('');
  const [enabledFilter, setEnabledFilter] = useState<EnabledFilter>('all');
  const [telegramFilter, setTelegramFilter] = useState<TelegramFilter>('all');

  const listParams = useMemo(
    () => ({
      q: query.trim() || undefined,
      enabled: enabledFilter === 'all' ? undefined : enabledFilter === 'enabled' ? true : false,
      telegramLinked:
        telegramFilter === 'all' ? undefined : telegramFilter === 'linked' ? true : false,
    }),
    [enabledFilter, query, telegramFilter],
  );

  const { data, isLoading } = useQuery({
    queryKey: ['admin-request-subscriptions', listParams],
    queryFn: () => adminNotificationService.listRequestSubscriptions(listParams),
  });

  const { mutateAsync: unlinkTelegram, isPending: isUnlinking } = useMutation({
    mutationFn: (accountId: string) => adminNotificationService.unlinkTelegram(accountId),
    onSuccess: async () => {
      toast.success(t('admin.subscriptions.unlinkSuccess'));
      await queryClient.invalidateQueries({ queryKey: ['admin-request-subscriptions'] });
    },
    onError: () => {
      toast.error(t('admin.subscriptions.unlinkError'));
    },
  });

  const items = data?.results ?? [];
  const { page, setPage, totalPages, pageItems } = useClientPagination(items);
  const fromMock = data?.fromMock ?? false;

  return (
    <section className="space-y-6">
      <header>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Heading level="title" as="h1">
              {t('admin.subscriptions.title')}
            </Heading>
            <p className="mt-1 text-v2-muted">{t('admin.subscriptions.description')}</p>
          </div>
          {fromMock && <Badge tone="neutral">{t('admin.subscriptions.mockBadge')}</Badge>}
        </div>
      </header>
      <MockZone active={fromMock}>
        <div className="space-y-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex-1">
              <Input
                search
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('admin.subscriptions.searchPlaceholder')}
              />
            </div>
            <Select
              value={enabledFilter}
              onValueChange={(v) => setEnabledFilter(v as EnabledFilter)}
            >
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('admin.subscriptions.filter.enabledAll')}</SelectItem>
                <SelectItem value="enabled">{t('admin.subscriptions.filter.enabled')}</SelectItem>
                <SelectItem value="disabled">{t('admin.subscriptions.filter.disabled')}</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={telegramFilter}
              onValueChange={(v) => setTelegramFilter(v as TelegramFilter)}
            >
              <SelectTrigger className="w-full lg:w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('admin.subscriptions.filter.telegramAll')}</SelectItem>
                <SelectItem value="linked">
                  {t('admin.subscriptions.filter.telegramLinked')}
                </SelectItem>
                <SelectItem value="unlinked">
                  {t('admin.subscriptions.filter.telegramUnlinked')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <LoadingState variant="inline" />
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-center">
              <p className="text-base font-semibold">{t('admin.empty.title')}</p>
              <p className="mt-2 max-w-sm text-sm text-v2-muted">
                {t('admin.empty.subscriptions')}
              </p>
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('admin.subscriptions.table.seller')}</TableHead>
                    <TableHead>{t('admin.subscriptions.table.email')}</TableHead>
                    <TableHead>{t('admin.subscriptions.table.filters')}</TableHead>
                    <TableHead>{t('admin.subscriptions.table.channels')}</TableHead>
                    <TableHead>{t('admin.subscriptions.table.telegram')}</TableHead>
                    <TableHead>{t('admin.subscriptions.table.status')}</TableHead>
                    <TableHead>{t('admin.subscriptions.table.actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pageItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.sellerName}</TableCell>
                      <TableCell>{item.accountEmail}</TableCell>
                      <TableCell className="max-w-[220px] text-sm text-v2-muted">
                        <div className="space-y-1">
                          {item.categories.length > 0 && <p>{item.categories.join(', ')}</p>}
                          {item.location && <p>{item.location}</p>}
                          {(item.budgetMin != null || item.budgetMax != null) && (
                            <p>
                              {item.budgetMin ?? '—'} – {item.budgetMax ?? '—'}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {item.channels.map((channel) => (
                            <Badge key={channel} tone="neutral">
                              {t(`admin.subscriptions.channels.${channel}`)}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge tone={item.telegramLinked ? 'success' : 'neutral'}>
                          {item.telegramLinked
                            ? t('admin.subscriptions.telegram.linked')
                            : t('admin.subscriptions.telegram.unlinked')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge tone={item.enabled ? 'success' : 'neutral'}>
                          {item.enabled
                            ? t('admin.subscriptions.status.enabled')
                            : t('admin.subscriptions.status.disabled')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <PermissionGate permission="notifications.subscriptions">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            disabled={!item.telegramLinked || isUnlinking}
                            onClick={async () => {
                              try {
                                await unlinkTelegram(item.accountId);
                              } catch {
                                // toast handled in onError
                              }
                            }}
                          >
                            <Unlink className="mr-2 h-4 w-4" />
                            {t('admin.subscriptions.unlink')}
                          </Button>
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
      </MockZone>
    </section>
  );
}
