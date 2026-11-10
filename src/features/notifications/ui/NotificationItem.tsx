'use client';

import { formatDateTime } from '@/lib/format';
import { useLingui } from '@lingui/react';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import { cn } from '@/lib/utils';
import type { INotification } from '@/entities/notification';
import { useMarkNotificationRead } from '@/entities/notification';

interface NotificationItemProps {
  notification: INotification;
}

export const NotificationItem = ({ notification }: NotificationItemProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useLocalizedRouter();
  const { mutate: markRead } = useMarkNotificationRead();

  const handleClick = () => {
    if (!notification.read) {
      markRead(notification._id);
    }
    if (notification.link) {
      router.push(notification.link);
    }
  };

  const dateLabel = notification.createdAt
    ? formatDateTime(notification.createdAt, i18n.locale)
    : '';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'w-full rounded-v2-lg border p-4 text-left transition-colors hover:bg-v2-hover',
        !notification.read && 'border-v2-primary bg-v2-primary',
      )}
    >
      <div className="flex items-start gap-3">
        {!notification.read && (
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-v2-primary" aria-hidden />
        )}
        <div className={cn('min-w-0 flex-1', notification.read && 'ml-5')}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-medium">{notification.title}</p>
            <span className="text-xs text-v2-muted">{dateLabel}</span>
          </div>
          <p className="mt-1 text-sm text-v2-muted line-clamp-2">{notification.message}</p>
          <p className="mt-2 text-xs text-v2-muted">
            {i18n._(`profile.notifications.categories.${notification.category}`) ||
              notification.category}
          </p>
        </div>
      </div>
    </button>
  );
};
