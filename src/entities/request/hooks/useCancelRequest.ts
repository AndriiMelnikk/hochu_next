import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestService } from '../services/requestService';

export const useCancelRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId: string) => requestService.cancel(requestId),
    onSuccess: (_, requestId) => {
      void queryClient.invalidateQueries({ queryKey: ['requests', requestId] });
    },
  });
};
