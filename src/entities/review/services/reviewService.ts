import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import { IReview } from '../types/Review';
import { ICreateReviewRequest } from '../types/requests/CreateReview';
import { IReviewStatsResponse } from '../types/responses/GetReviewStats';
import { IGetReviewsRequest } from '../types/requests/GetReviews';

class ReviewService {
  async create(data: ICreateReviewRequest): Promise<IReview> {
    const url = ENDPOINTS.REVIEWS.BASE;
    return (await api.post(url, data)).data;
  }

  async getStats(targetProfileId: string): Promise<IReviewStatsResponse> {
    const url = ENDPOINTS.REVIEWS.STATS(targetProfileId);
    return (await api.get(url)).data;
  }

  async get(params: IGetReviewsRequest): Promise<IReview[]> {
    const { targetUserId } = params;
    if (!targetUserId) {
      // should not happen due to 'enabled' in useReviews
      return [];
    }
    const url = ENDPOINTS.REVIEWS.BY_PROFILE_ID(targetUserId);
    return (await api.get(url, { params })).data;
  }
}

export const reviewService = new ReviewService();
