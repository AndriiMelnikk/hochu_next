export interface IReview {
  id: number;
  userId: number;
  targetUserId: number;
  rating: number;
  comment: string;
  createdAt: string;
}
