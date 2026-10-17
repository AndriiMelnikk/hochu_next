'use client';

import { useLingui } from '@lingui/react';
import {
  ALL_NOTIFICATION_CHANNELS,
  NotificationChannel,
  toggleNotificationChannel,
} from '@/entities/notification';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';
import { cn } from '@/lib/utils';

interface NotificationChannelsSelectProps {
  value: NotificationChannel[];
  onChange: (channels: NotificationChannel[]) => void;
  disabled?: boolean;
  telegramLinked?: boolean;
  className?: string;
}

export const NotificationChannelsSelect = ({
  value,
  onChange,
  disabled,
  telegramLinked = false,
  className,
}: NotificationChannelsSelectProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className={cn('flex flex-wrap items-center gap-x-4 gap-y-2', className)}>
      <span className="text-xs text-muted-foreground">{t('profile.notifications.channels.label')}:</span>
      {ALL_NOTIFICATION_CHANNELS.map((channel) => {
        const isTelegram = channel === NotificationChannel.TELEGRAM;
        const channelDisabled = disabled || (isTelegram && !telegramLinked);
        const checked = value.includes(channel);
        const id = `notification-channel-${channel}`;

        return (
          <div key={channel} className="flex items-center gap-1.5">
            <Checkbox
              id={id}
              checked={checked}
              disabled={channelDisabled}
              onCheckedChange={(next) =>
                onChange(
                  toggleNotificationChannel(value, channel, next === true, {
                    telegramLinked,
                  }),
                )
              }
            />
            <Label
              htmlFor={id}
              className={cn(
                'text-sm font-normal',
                channelDisabled && 'text-muted-foreground',
              )}
              title={
                isTelegram && !telegramLinked
                  ? t('profile.notifications.telegram.connectRequired')
                  : undefined
              }
            >
              {t(`profile.notifications.channels.${channel}`)}
            </Label>
          </div>
        );
      })}
    </div>
  );
};
