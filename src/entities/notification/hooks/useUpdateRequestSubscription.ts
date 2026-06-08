import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestSubscriptionService } from '../services/requestSubscriptionService';
import type { IUpdateRequestSubscriptionRequest } from '../types/RequestSubscription';

export const useUpdateRequestSubscription = (profileId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      subscriptionId,
      payload,
    }: {
      subscriptionId: string;
      payload: IUpdateRequestSubscriptionRequest;
    }) => requestSubscriptionService.update(profileId, subscriptionId, payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['request-subscriptions', profileId] });
    },
  });
};
