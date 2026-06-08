import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestSubscriptionService } from '../services/requestSubscriptionService';
import type { ICreateRequestSubscriptionRequest } from '../types/RequestSubscription';

export const useCreateRequestSubscription = (profileId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ICreateRequestSubscriptionRequest) =>
      requestSubscriptionService.create(profileId, payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['request-subscriptions', profileId] });
    },
  });
};
