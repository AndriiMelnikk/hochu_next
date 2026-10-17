import type { AxiosRequestConfig } from 'axios';
import { z } from 'zod';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type { IAdminRequestSubscription } from '../types/admin';
import { adminRequestSubscriptions } from '../mocks/adminMockData';

const adminRequestSubscriptionSchema = z.object({
  id: z.string(),
  sellerProfileId: z.string(),
  sellerName: z.string(),
  accountId: z.string(),
  accountEmail: z.string(),
  categories: z.array(z.string()),
  location: z.string().nullable(),
  budgetMin: z.number().nullable(),
  budgetMax: z.number().nullable(),
  enabled: z.boolean(),
  channels: z.array(z.string()),
  telegramLinked: z.boolean(),
  createdAt: z.string(),
});

const adminRequestSubscriptionsResultSchema = z.object({
  count: z.number(),
  results: z.array(adminRequestSubscriptionSchema),
});

export interface IGetAdminRequestSubscriptionsParams {
  page?: number;
  pageSize?: number;
  q?: string;
  enabled?: boolean;
  telegramLinked?: boolean;
}

export interface IAdminRequestSubscriptionsResult {
  count: number;
  results: IAdminRequestSubscription[];
  /** True when response came from local mock (API not available yet). */
  fromMock?: boolean;
}

function filterMock(
  params: IGetAdminRequestSubscriptionsParams = {},
): IAdminRequestSubscriptionsResult {
  let list = [...adminRequestSubscriptions];
  const q = params.q?.trim().toLowerCase();
  if (q) {
    list = list.filter(
      (item) =>
        item.sellerName.toLowerCase().includes(q) ||
        item.accountEmail.toLowerCase().includes(q) ||
        item.accountId.toLowerCase().includes(q),
    );
  }
  if (params.enabled != null) {
    list = list.filter((item) => item.enabled === params.enabled);
  }
  if (params.telegramLinked != null) {
    list = list.filter((item) => item.telegramLinked === params.telegramLinked);
  }
  return { count: list.length, results: list, fromMock: true };
}

class AdminNotificationService {
  /**
   * Lists seller request subscriptions for staff.
   * Falls back to mock data until `/api/admin/request-subscriptions` is implemented.
   */
  async listRequestSubscriptions(
    params: IGetAdminRequestSubscriptionsParams = {},
    config?: AxiosRequestConfig,
  ): Promise<IAdminRequestSubscriptionsResult> {
    try {
      const response = await api.get(ENDPOINTS.ADMIN.REQUEST_SUBSCRIPTIONS, {
        ...config,
        params,
      });
      const parsed = adminRequestSubscriptionsResultSchema.parse(
        response.data,
      ) as Omit<IAdminRequestSubscriptionsResult, 'fromMock'>;
      return { ...parsed, fromMock: false };
    } catch {
      return filterMock(params);
    }
  }

  /**
   * Force-unlinks Telegram for an account (moderation).
   * No-op locally when the admin API is not available yet.
   */
  async unlinkTelegram(
    accountId: string,
    config?: AxiosRequestConfig,
  ): Promise<{ linked: false }> {
    try {
      await api.delete(ENDPOINTS.ADMIN.TELEGRAM_UNLINK(accountId), config);
      return { linked: false };
    } catch {
      return { linked: false };
    }
  }
}

export const adminNotificationService = new AdminNotificationService();
