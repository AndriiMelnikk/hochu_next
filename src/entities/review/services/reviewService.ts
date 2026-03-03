import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import { IReview } from '../types/Review';
import { ICreateReviewRequest } from '../types/requests/CreateReview';
import { IReviewStatsResponse } from '../types/responses/GetReviewStats';
import { IGetReviewsRequest, IGetReviewsResponse } from '../types';

class ReviewService {
  async create(data: ICreateReviewRequest): Promise<IReview> {
    const url = ENDPOINTS.REVIEWS.BASE;
    return (await api.post(url, data)).data;
  }

  async getStats(targetProfileId: string): Promise<IReviewStatsResponse> {
    const url = ENDPOINTS.REVIEWS.STATS(targetProfileId);
    return (await api.get(url)).data;
  }

  async get(params: IGetReviewsRequest): Promise<IGetReviewsResponse> {
    const url = ENDPOINTS.REVIEWS.BASE;
    const response = await api.get<IGetReviewsResponse>(url, { params });
    return response.data;
  }
}

export const reviewService = new ReviewService();
