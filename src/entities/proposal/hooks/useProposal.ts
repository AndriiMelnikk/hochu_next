import { useQuery } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';
import { proposalSchema } from '../schemas/proposalSchema';

export const useProposal = (id: string | number | undefined) => {
  return useQuery({
    queryKey: ['proposals', id],
    queryFn: async () => {
      if (!id) throw new Error('Proposal ID is required');
      const data = await proposalService.getOne(id);
      return proposalSchema.parse(data);
    },
    enabled: !!id,
  });
};
