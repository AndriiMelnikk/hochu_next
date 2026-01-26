import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestService } from '../services/requestService';
import { requestSchema } from '../schemas/requestSchema';
import type { ICreateRequestRequest } from '../types/requests/CreateRequest';

export const useCreateRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: ICreateRequestRequest) => {
      const data = await requestService.create(payload);
      return requestSchema.parse(data);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['requests', 'list'] });
    },
  });
};
