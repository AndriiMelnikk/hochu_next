import { useQuery } from '@tanstack/react-query';
import { notificationPreferenceService } from '../services/notificationPreferenceService';

export const useNotificationPreferences = (profileId?: string) => {
  return useQuery({
    queryKey: ['notification-preferences', profileId],
    queryFn: () => notificationPreferenceService.getByProfileId(profileId!),
    enabled: !!profileId,
  });
};
