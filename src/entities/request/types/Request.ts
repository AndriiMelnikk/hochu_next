export interface IRequest {
  id: number;
  title: string;
  description: string;
  category: string;
  budgetMin: number;
  budgetMax: number;
  location: string;
  urgency: string;
  createdAt: string;
  views: number;
  proposalsCount: number;
  images: string[];
  buyerId: number;
  edits: Array<{
    text: string;
    timestamp: string;
  }>;
}

export interface IRequestWithBuyer extends IRequest {
  buyer?: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
    isVerified: boolean;
    memberSince: string;
    completedDeals: number;
  };
}

