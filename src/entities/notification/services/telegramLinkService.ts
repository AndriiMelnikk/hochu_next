import type { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type { ITelegramLinkStatus, ITelegramLinkToken } from '../types/TelegramLink';
import {
  telegramLinkStatusSchema,
  telegramLinkTokenSchema,
} from '../schemas/notificationSchema';

class TelegramLinkService {
  async getStatus(config?: AxiosRequestConfig): Promise<ITelegramLinkStatus> {
    const response = await api.get(ENDPOINTS.TELEGRAM.STATUS, config);
    return telegramLinkStatusSchema.parse(response.data) as ITelegramLinkStatus;
  }

  async createLinkToken(config?: AxiosRequestConfig): Promise<ITelegramLinkToken> {
    const response = await api.post(ENDPOINTS.TELEGRAM.LINK_TOKEN, undefined, config);
    return telegramLinkTokenSchema.parse(response.data) as ITelegramLinkToken;
  }

  async unlink(config?: AxiosRequestConfig): Promise<ITelegramLinkStatus> {
    const response = await api.delete(ENDPOINTS.TELEGRAM.UNLINK, config);
    return telegramLinkStatusSchema.parse(response.data) as ITelegramLinkStatus;
  }
}

export const telegramLinkService = new TelegramLinkService();
