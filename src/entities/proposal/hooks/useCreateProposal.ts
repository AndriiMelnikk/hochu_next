import { useMutation, useQueryClient } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';
import { proposalSchema } from '../schemas/proposalSchema';
import type { ICreateProposalRequest } from '../types/requests/CreateProposal';

export const useCreateProposal = (requestId: string | number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Omit<ICreateProposalRequest, 'requestId'>) => {
      const data = await proposalService.create(requestId, payload);
      // We might need a separate response schema if it returns IProposalWithSeller
      // reusing proposalSchema might fail if backend returns extra fields or different structure
      // For now assume it returns valid proposal data
      return data;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['proposals', requestId] });
      void queryClient.invalidateQueries({ queryKey: ['requests', 'detail', requestId] });
    },
  });
};
