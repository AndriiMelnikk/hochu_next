import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notificationPreferenceService } from '../services/notificationPreferenceService';
import type { IUpdateNotificationPreferencesRequest } from '../types/NotificationPreferences';

export const useUpdateNotificationPreferences = (profileId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: IUpdateNotificationPreferencesRequest) =>
      notificationPreferenceService.update(profileId, payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['notification-preferences', profileId] });
    },
  });
};
