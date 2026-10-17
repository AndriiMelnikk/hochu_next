import { NotificationChannel } from '../types/Notification';

/** Channels available without a Telegram bot link. */
export const DEFAULT_NOTIFICATION_CHANNELS: NotificationChannel[] = [
  NotificationChannel.IN_APP,
  NotificationChannel.EMAIL,
];

export const ALL_NOTIFICATION_CHANNELS: NotificationChannel[] = [
  NotificationChannel.IN_APP,
  NotificationChannel.EMAIL,
  NotificationChannel.TELEGRAM,
];

export function channelsForEnabled(
  enabled: boolean,
  previous: NotificationChannel[] = DEFAULT_NOTIFICATION_CHANNELS,
  options?: { telegramLinked?: boolean },
): NotificationChannel[] {
  if (!enabled) return [];

  const telegramLinked = options?.telegramLinked ?? false;
  const base =
    previous.length > 0
      ? previous.filter((channel) => ALL_NOTIFICATION_CHANNELS.includes(channel))
      : DEFAULT_NOTIFICATION_CHANNELS;

  return base.filter(
    (channel) => channel !== NotificationChannel.TELEGRAM || telegramLinked,
  );
}

export function toggleNotificationChannel(
  channels: NotificationChannel[],
  channel: NotificationChannel,
  checked: boolean,
  options?: { telegramLinked?: boolean },
): NotificationChannel[] {
  if (channel === NotificationChannel.TELEGRAM && !options?.telegramLinked) {
    return channels.filter((c) => c !== NotificationChannel.TELEGRAM);
  }

  if (checked) {
    return channels.includes(channel) ? channels : [...channels, channel];
  }

  const next = channels.filter((c) => c !== channel);
  return next.length > 0 ? next : channels;
}
