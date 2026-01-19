import { useQuery } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';
import { getProposalsResponseSchema } from '../schemas/proposalSchema';

export const useProposals = (requestId?: number) => {
  return useQuery({
    queryKey: ['proposals', 'list', requestId],
    queryFn: async () => {
      const data = await proposalService.get(requestId);
      return getProposalsResponseSchema.parse(data);
    },
  });
};
