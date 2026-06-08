'use client';

import { useMemo } from 'react';
import { useLingui } from '@lingui/react';
import { toast } from 'sonner';
import { useProfiles } from '@/entities/user';
import {
  mapNotificationFilters,
  useMarkAllNotificationsRead,
  useNotifications,
  type NotificationScope,
} from '@/entities/notification';
import { NotificationFilters, NotificationItem } from '@/features/notifications';
import { useQueryPagination } from '@/shared/hooks';
import { UniversalPagination } from '@/shared/ui/universal-pagination';
import { Button } from '@/shared/ui/button';
import { Loading } from '@/shared/ui/loading';

export default function NotificationsTabContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const paginationOptions = useMemo(() => ({ pageSize: 20 }), []);
  const { page, pageSize, setPage, filters, setFilter } = useQueryPagination<{
    unread: string;
    category: string;
    scope: NotificationScope;
  }>(paginationOptions);

  const unread = filters.unread ?? '';
  const category = filters.category ?? '';
  const scope = (filters.scope as NotificationScope) || 'all';

  const { data: profiles = [] } = useProfiles();
  const buyerProfile = profiles.find((p) => p.type === 'buyer');
  const sellerProfile = profiles.find((p) => p.type === 'seller');

  const apiParams = useMemo(
    () =>
      mapNotificationFilters({
        scope,
        unread,
        category,
        buyerProfileId: buyerProfile?._id,
        sellerProfileId: sellerProfile?._id,
        page,
        pageSize,
      }),
    [scope, unread, category, buyerProfile?._id, sellerProfile?._id, page, pageSize],
  );

  const { data, isLoading, error } = useNotifications(apiParams);
  const { mutate: markAllRead, isPending: isMarkingAll } = useMarkAllNotificationsRead();

  const items = data?.results ?? [];
  const totalCount = data?.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkAllRead = () => {
    markAllRead(undefined, {
      onSuccess: () => toast.success(t('profile.notifications.markAllReadSuccess')),
      onError: () => toast.error(t('profile.notifications.markAllReadError')),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <NotificationFilters
          unread={unread}
          scope={scope}
          category={category}
          onUnreadChange={(v) => setFilter('unread', v)}
          onScopeChange={(v) => setFilter('scope', v)}
          onCategoryChange={(v) => setFilter('category', v)}
          hasBuyerProfile={!!buyerProfile}
          hasSellerProfile={!!sellerProfile}
        />
        <Button
          variant="outline"
          size="sm"
          onClick={handleMarkAllRead}
          disabled={isMarkingAll}
          className="shrink-0"
        >
          {t('profile.notifications.markAllRead')}
        </Button>
      </div>

      {isLoading && <Loading variant="inline" />}

      {error && (
        <p className="text-center text-destructive py-8">
          {t('profile.notifications.inbox.error')}
        </p>
      )}

      {!isLoading && !error && items.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          {t('profile.notifications.inbox.empty')}
        </p>
      )}

      {!isLoading && !error && items.length > 0 && (
        <div className="space-y-3">
          {items.map((notification) => (
            <NotificationItem key={notification._id} notification={notification} />
          ))}
        </div>
      )}

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
}
