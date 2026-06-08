import { useQuery } from '@tanstack/react-query';
import { notificationService } from '../services/notificationService';
import type { IGetNotificationsRequest } from '../types/requests/GetNotifications';

export const useNotifications = (params: IGetNotificationsRequest, enabled = true) => {
  return useQuery({
    queryKey: [
      'notifications',
      'list',
      params.page,
      params.pageSize,
      params.unread,
      params.category,
      params.profileId,
    ],
    queryFn: () => notificationService.get(params),
    enabled,
    retry: 1,
  });
};
