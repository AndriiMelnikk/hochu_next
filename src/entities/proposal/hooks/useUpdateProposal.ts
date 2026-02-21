import { useMutation, useQueryClient } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';
import type { IUpdateProposalRequest } from '../types/requests/UpdateProposal';

export const useUpdateProposal = (requestId: string, proposalId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: IUpdateProposalRequest) =>
      proposalService.update(proposalId, payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['proposals', 'list', requestId] });
      void queryClient.invalidateQueries({ queryKey: ['proposals', proposalId] });
    },
  });
};
