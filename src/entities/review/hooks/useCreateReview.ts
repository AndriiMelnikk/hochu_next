import { useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewService } from '../services/reviewService';
import { ICreateReviewRequest } from '../types/requests/CreateReview';

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ICreateReviewRequest) => reviewService.create(data),
    onSuccess: (_, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['users', variables.targetProfileId] });
      void queryClient.invalidateQueries({ queryKey: ['reviews', variables.targetProfileId] });
    },
  });
};
