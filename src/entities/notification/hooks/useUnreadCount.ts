import { useQuery } from '@tanstack/react-query';
import { notificationService } from '../services/notificationService';

export const useUnreadCount = (enabled = true) => {
  return useQuery({
    queryKey: ['notifications', 'unread-count'],
    queryFn: async () => {
      try {
        return await notificationService.getUnreadCount();
      } catch {
        const data = await notificationService.get({ unread: true, page: 1, pageSize: 1 });
        return data.count;
      }
    },
    enabled,
    refetchInterval: 60_000,
  });
};
