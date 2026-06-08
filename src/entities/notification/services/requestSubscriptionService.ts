import type { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type {
  ICreateRequestSubscriptionRequest,
  IRequestSubscription,
  IUpdateRequestSubscriptionRequest,
} from '../types/RequestSubscription';
import type { IGetRequestSubscriptionsRequest } from '../types/requests/GetRequestSubscriptions';
import type { IPaginationResult } from '../types/responses/PaginationResult';
import { paginationResultSchema, requestSubscriptionSchema } from '../schemas/notificationSchema';

class RequestSubscriptionService {
  async get(
    profileId: string,
    params: IGetRequestSubscriptionsRequest = {},
    config?: AxiosRequestConfig,
  ): Promise<IPaginationResult<IRequestSubscription>> {
    const response = await api.get(ENDPOINTS.REQUEST_SUBSCRIPTIONS.BY_PROFILE(profileId), {
      params,
      ...config,
    });
    const schema = paginationResultSchema(requestSubscriptionSchema);
    const data = schema.parse(response.data);
    const page = params.page ?? 1;
    const pageSize = params.pageSize ?? 20;

    return {
      count: data.count,
      results: data.results as IRequestSubscription[],
      page: data.page ?? page,
      pageSize: data.pageSize ?? pageSize,
      next: data.next ?? null,
      previous: data.previous ?? null,
    };
  }

  async create(
    profileId: string,
    payload: ICreateRequestSubscriptionRequest,
    config?: AxiosRequestConfig,
  ): Promise<IRequestSubscription> {
    const response = await api.post(
      ENDPOINTS.REQUEST_SUBSCRIPTIONS.BY_PROFILE(profileId),
      payload,
      config,
    );
    return requestSubscriptionSchema.parse(response.data) as IRequestSubscription;
  }

  async update(
    profileId: string,
    subscriptionId: string,
    payload: IUpdateRequestSubscriptionRequest,
    config?: AxiosRequestConfig,
  ): Promise<IRequestSubscription> {
    const response = await api.patch(
      ENDPOINTS.REQUEST_SUBSCRIPTIONS.BY_ID(profileId, subscriptionId),
      payload,
      config,
    );
    return requestSubscriptionSchema.parse(response.data) as IRequestSubscription;
  }

  async delete(
    profileId: string,
    subscriptionId: string,
    config?: AxiosRequestConfig,
  ): Promise<void> {
    await api.delete(ENDPOINTS.REQUEST_SUBSCRIPTIONS.BY_ID(profileId, subscriptionId), config);
  }
}

export const requestSubscriptionService = new RequestSubscriptionService();
