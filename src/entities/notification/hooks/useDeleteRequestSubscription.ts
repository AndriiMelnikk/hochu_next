import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestSubscriptionService } from '../services/requestSubscriptionService';

export const useDeleteRequestSubscription = (profileId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (subscriptionId: string) =>
      requestSubscriptionService.delete(profileId, subscriptionId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['request-subscriptions', profileId] });
    },
  });
};
