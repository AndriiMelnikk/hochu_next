import type { NotificationCategory, NotificationChannel } from './Notification';

export interface ICategoryPreference {
  enabled: boolean;
  channels: NotificationChannel[];
}

export interface INewRequestsPreference extends ICategoryPreference {
  categories: string[];
  location: string | null;
}

export interface INotificationPreferences {
  [NotificationCategory.NEW_REQUESTS]: INewRequestsPreference;
  [NotificationCategory.REQUEST_UPDATES]: ICategoryPreference;
  [NotificationCategory.MY_REQUEST_ACTIVITY]: ICategoryPreference;
  [NotificationCategory.MY_PROPOSAL_STATUS]: ICategoryPreference;
  [NotificationCategory.MESSAGES]: ICategoryPreference;
  [NotificationCategory.REVIEWS]: ICategoryPreference;
  [NotificationCategory.ACHIEVEMENTS]: ICategoryPreference;
}

export type IUpdateNotificationPreferencesRequest = Partial<{
  [NotificationCategory.NEW_REQUESTS]: Partial<INewRequestsPreference>;
  [NotificationCategory.REQUEST_UPDATES]: Partial<ICategoryPreference>;
  [NotificationCategory.MY_REQUEST_ACTIVITY]: Partial<ICategoryPreference>;
  [NotificationCategory.MY_PROPOSAL_STATUS]: Partial<ICategoryPreference>;
  [NotificationCategory.MESSAGES]: Partial<ICategoryPreference>;
  [NotificationCategory.REVIEWS]: Partial<ICategoryPreference>;
  [NotificationCategory.ACHIEVEMENTS]: Partial<ICategoryPreference>;
}>;
