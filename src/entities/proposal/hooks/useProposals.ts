import { useQuery } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';
import { getProposalsResponseSchema } from '../schemas/proposalSchema';

export const useProposals = (requestId?: string | number) => {
  return useQuery({
    queryKey: ['proposals', 'list', requestId],
    queryFn: async () => {
      if (requestId === undefined) throw new Error('requestId is required');
      const data = await proposalService.getByRequestId(requestId);
      return getProposalsResponseSchema.parse(data);
    },
    enabled: !!requestId,
  });
};
