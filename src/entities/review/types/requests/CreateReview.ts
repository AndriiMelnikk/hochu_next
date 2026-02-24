export interface ICreateReviewRequest {
  targetProfileId: string;
  requestId?: string;
  proposalId?: string;
  rating: number;
  comment?: string;
}
