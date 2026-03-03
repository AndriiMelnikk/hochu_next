export interface IGetReviewsRequest {
  targetProfileId?: string;
  authorProfileId?: string;
  requestId?: string;
  proposalId?: string;
  page?: number;
  pageSize?: number;
}
