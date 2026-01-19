import { useQuery } from '@tanstack/react-query';
import { requestService } from '../services/requestService';
import { requestSchema } from '../schemas/requestSchema';

export const useRequest = (id: string | number | undefined) => {
  return useQuery({
    queryKey: ['requests', id],
    queryFn: async () => {
      if (!id) throw new Error('Request ID is required');
      const data = await requestService.getOne(id);
      return requestSchema.parse(data);
    },
    enabled: !!id,
  });
};
