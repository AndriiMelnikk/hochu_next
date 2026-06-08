import { NotificationCategory } from '../types/Notification';
import type { IGetNotificationsRequest } from '../types/requests/GetNotifications';

export type NotificationScope = 'all' | 'account' | 'buyer' | 'seller';

interface MapNotificationFiltersInput {
  scope: NotificationScope;
  unread?: string;
  category?: string;
  buyerProfileId?: string;
  sellerProfileId?: string;
  page: number;
  pageSize: number;
}

export function mapNotificationFilters(
  input: MapNotificationFiltersInput,
): IGetNotificationsRequest {
  const params: IGetNotificationsRequest = {
    page: input.page,
    pageSize: input.pageSize,
  };

  if (input.unread === 'true') {
    params.unread = true;
  }

  if (input.category) {
    params.category = input.category as NotificationCategory;
  }

  switch (input.scope) {
    case 'account':
      params.category = NotificationCategory.MESSAGES;
      break;
    case 'buyer':
      if (input.buyerProfileId) {
        params.profileId = input.buyerProfileId;
      }
      break;
    case 'seller':
      if (input.sellerProfileId) {
        params.profileId = input.sellerProfileId;
      }
      break;
    default:
      break;
  }

  return params;
}
