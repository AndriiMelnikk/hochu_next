import { useMutation, useQueryClient } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';
import type { ICreateProposalRequest } from '../types/requests/CreateProposal';
import { ProposalRejectionReason } from '../types/Proposal';
import { getProposalRejectionReasonFromError } from '../utils/rejectionReason';

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
      void queryClient.invalidateQueries({ queryKey: ['proposals', 'list', requestId] });
      void queryClient.invalidateQueries({ queryKey: ['requests', 'detail', requestId] });
    },
    onError: (error) => {
      const reason = getProposalRejectionReasonFromError(error);
      if (reason === ProposalRejectionReason.NO_CONTACTS) {
        queryClient.setQueryData(['proposals', 'canPropose', requestId], {
          canPropose: false,
          reason,
        });
      }
    },
  });
};
