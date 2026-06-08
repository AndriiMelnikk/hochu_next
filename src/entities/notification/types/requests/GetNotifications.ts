import type { NotificationCategory } from '../Notification';

export interface IGetNotificationsRequest {
  unread?: boolean;
  category?: NotificationCategory;
  profileId?: string;
  page?: number;
  pageSize?: number;
}
