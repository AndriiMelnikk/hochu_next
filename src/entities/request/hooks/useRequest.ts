import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { requestService } from '../services/requestService';
import { requestSchema } from '../schemas/requestSchema';
import { IRequestWithBuyer } from '../types/Request';

export const useRequest = (
  id: string | number | undefined,
  options?: Omit<UseQueryOptions<IRequestWithBuyer>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<IRequestWithBuyer>({
    queryKey: ['requests', id],
    queryFn: async () => {
      if (!id) throw new Error('Request ID is required');
      const data = await requestService.getOne(id);
      return requestSchema.parse(data) as unknown as IRequestWithBuyer;
    },
    enabled: !!id,
    ...options,
  });
};
