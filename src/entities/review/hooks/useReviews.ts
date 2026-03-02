import { useQuery } from '@tanstack/react-query';
import { reviewService } from '../services/reviewService';
import { IGetReviewsRequest } from '../types/requests/GetReviews';

export const useReviews = (params: IGetReviewsRequest) => {
  return useQuery({
    queryKey: ['reviews', params],
    queryFn: () => reviewService.get(params),
    enabled: !!params.targetUserId || !!params.authorId,
  });
};
