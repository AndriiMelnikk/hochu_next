import { IReview } from '../Review';

export interface IGetReviewsResponse {
  results: IReview[];
  count: number;
  next: string | null;
  previous: string | null;
}
