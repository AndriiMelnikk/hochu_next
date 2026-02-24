import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import { IReview } from '../types/Review';
import { ICreateReviewRequest } from '../types/requests/CreateReview';

class ReviewService {
  async create(data: ICreateReviewRequest): Promise<IReview> {
    const url = ENDPOINTS.REVIEWS.BASE;
    return (await api.post(url, data)).data;
  }
}

export const reviewService = new ReviewService();
