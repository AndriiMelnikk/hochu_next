import { useQuery } from '@tanstack/react-query';
import { requestService } from '../services/requestService';
import type { IGetRequestsRequest } from '../types/requests/GetRequests';
import { getRequestsResponseSchema } from '../schemas/requestSchema';
import type { IGetRequestsResponse } from '../types/responses/GetRequests';

export const useRequests = (
  searchParams: IGetRequestsRequest = {},
  options?: { initialData?: IGetRequestsResponse },
) => {
  return useQuery({
    queryKey: ['requests', 'list', searchParams],
    queryFn: async () => {
      const data = await requestService.get(searchParams);
      return getRequestsResponseSchema.parse(data) as IGetRequestsResponse;
    },
    initialData: options?.initialData,
  });
};
