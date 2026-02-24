import { useMutation, useQueryClient } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';

export const useAcceptProposal = (requestId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (proposalId: string) => proposalService.accept(proposalId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['proposals', 'list', requestId] });
      void queryClient.invalidateQueries({ queryKey: ['requests', requestId] });
    },
  });
};
