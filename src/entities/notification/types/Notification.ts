export enum NotificationCategory {
  NEW_REQUESTS = 'new_requests',
  REQUEST_UPDATES = 'request_updates',
  MY_REQUEST_ACTIVITY = 'my_request_activity',
  MY_PROPOSAL_STATUS = 'my_proposal_status',
  MESSAGES = 'messages',
  REVIEWS = 'reviews',
  ACHIEVEMENTS = 'achievements',
}

export enum NotificationChannel {
  IN_APP = 'in_app',
  EMAIL = 'email',
}

export interface INotification {
  _id: string;
  accountId: string;
  profileId?: string | null;
  type: string;
  category: NotificationCategory;
  title: string;
  message: string;
  link?: string | null;
  metadata?: Record<string, unknown> | null;
  read: boolean;
  createdAt: string;
}
