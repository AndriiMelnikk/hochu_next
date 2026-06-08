import { NotificationChannel } from '../types/Notification';

export const ALL_NOTIFICATION_CHANNELS: NotificationChannel[] = [
  NotificationChannel.IN_APP,
  NotificationChannel.EMAIL,
];

export function channelsForEnabled(enabled: boolean): NotificationChannel[] {
  return enabled ? ALL_NOTIFICATION_CHANNELS : [];
}
