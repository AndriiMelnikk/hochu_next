import { useQuery } from '@tanstack/react-query';
import { reviewService } from '../services/reviewService';

export const useReviewStats = (targetProfileId: string) => {
  return useQuery({
    queryKey: ['reviewStats', targetProfileId],
    queryFn: () => reviewService.getStats(targetProfileId),
    enabled: !!targetProfileId,
  });
};
