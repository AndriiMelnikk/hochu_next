import { useQuery } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';
import { getProposalsResponseSchema } from '../schemas/proposalSchema';
import type { IGetProposalsRequest } from '../types/requests/GetProposals';

export const useProposals = (requestId?: string | number, params?: IGetProposalsRequest) => {
  return useQuery({
    queryKey: ['proposals', 'list', requestId, params?.page, params?.pageSize],
    queryFn: async () => {
      if (requestId === undefined) throw new Error('requestId is required');
      const data = await proposalService.getByRequestId(requestId, params ?? {});
      return getProposalsResponseSchema.parse(data);
    },
    enabled: !!requestId,
  });
};
