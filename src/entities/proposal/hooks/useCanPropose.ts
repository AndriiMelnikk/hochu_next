import { useQuery } from '@tanstack/react-query';
import { proposalService } from '../services/proposalService';

export const useCanPropose = (requestId: string | undefined) => {
  return useQuery({
    queryKey: ['proposals', 'canPropose', requestId],
    queryFn: () => proposalService.canPropose(requestId!),
    enabled: !!requestId,
  });
};
