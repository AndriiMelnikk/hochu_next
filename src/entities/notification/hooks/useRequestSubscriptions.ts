import { useQuery } from '@tanstack/react-query';
import { requestSubscriptionService } from '../services/requestSubscriptionService';
import type { IGetRequestSubscriptionsRequest } from '../types/requests/GetRequestSubscriptions';

export const useRequestSubscriptions = (
  profileId?: string,
  params: IGetRequestSubscriptionsRequest = {},
) => {
  return useQuery({
    queryKey: ['request-subscriptions', profileId, params.page, params.pageSize],
    queryFn: () => requestSubscriptionService.get(profileId!, params),
    enabled: !!profileId,
  });
};
