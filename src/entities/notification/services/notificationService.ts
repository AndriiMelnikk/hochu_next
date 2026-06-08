import type { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type { INotification } from '../types/Notification';
import type { IGetNotificationsRequest } from '../types/requests/GetNotifications';
import type { IPaginationResult } from '../types/responses/PaginationResult';
import { notificationSchema, paginationResultSchema } from '../schemas/notificationSchema';

class NotificationService {
  async get(
    params: IGetNotificationsRequest = {},
    config?: AxiosRequestConfig,
  ): Promise<IPaginationResult<INotification>> {
    const response = await api.get(ENDPOINTS.NOTIFICATIONS.BASE, { params, ...config });
    const schema = paginationResultSchema(notificationSchema);
    return schema.parse(response.data) as IPaginationResult<INotification>;
  }

  async getUnreadCount(config?: AxiosRequestConfig): Promise<number> {
    const response = await api.get<{ count: number }>(ENDPOINTS.NOTIFICATIONS.UNREAD_COUNT, config);
    return typeof response.data?.count === 'number' ? response.data.count : 0;
  }

  async markRead(id: string, config?: AxiosRequestConfig): Promise<void> {
    await api.patch(ENDPOINTS.NOTIFICATIONS.READ(id), undefined, config);
  }

  async markAllRead(config?: AxiosRequestConfig): Promise<void> {
    await api.patch(ENDPOINTS.NOTIFICATIONS.READ_ALL, undefined, config);
  }
}

export const notificationService = new NotificationService();
