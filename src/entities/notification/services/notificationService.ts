import type { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type { INotification } from '../types/Notification';
import type { IGetNotificationsRequest } from '../types/requests/GetNotifications';
import type { IPaginationResult } from '../types/responses/PaginationResult';
import { notificationSchemaRaw, paginationResultSchema } from '../schemas/notificationSchema';
import { normalizeNotification } from '../utils/normalizeNotification';

class NotificationService {
  async get(
    params: IGetNotificationsRequest = {},
    config?: AxiosRequestConfig,
  ): Promise<IPaginationResult<INotification>> {
    const response = await api.get(ENDPOINTS.NOTIFICATIONS.BASE, { params, ...config });
    const schema = paginationResultSchema(notificationSchemaRaw);
    const data = schema.parse(response.data);
    const page = params.page ?? 1;
    const pageSize = params.pageSize ?? 20;

    return {
      count: data.count,
      results: data.results.map((item) =>
        normalizeNotification(item as Record<string, unknown>),
      ),
      page: data.page ?? page,
      pageSize: data.pageSize ?? pageSize,
      next: data.next ?? null,
      previous: data.previous ?? null,
    };
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
