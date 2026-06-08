import type { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type {
  INotificationPreferences,
  IUpdateNotificationPreferencesRequest,
} from '../types/NotificationPreferences';
import { notificationPreferencesSchema } from '../schemas/notificationSchema';

class NotificationPreferenceService {
  async getByProfileId(
    profileId: string,
    config?: AxiosRequestConfig,
  ): Promise<INotificationPreferences> {
    const response = await api.get(ENDPOINTS.NOTIFICATION_PREFERENCES.BY_PROFILE(profileId), config);
    return notificationPreferencesSchema.parse(response.data) as INotificationPreferences;
  }

  async update(
    profileId: string,
    payload: IUpdateNotificationPreferencesRequest,
    config?: AxiosRequestConfig,
  ): Promise<INotificationPreferences> {
    const response = await api.patch(
      ENDPOINTS.NOTIFICATION_PREFERENCES.BY_PROFILE(profileId),
      payload,
      config,
    );
    return notificationPreferencesSchema.parse(response.data) as INotificationPreferences;
  }
}

export const notificationPreferenceService = new NotificationPreferenceService();
