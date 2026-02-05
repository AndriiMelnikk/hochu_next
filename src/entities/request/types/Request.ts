export enum RequestStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum ItemCondition {
  NEW = 'new',
  USED = 'used',
}

export interface IRequest {
  _id: string;
  title: string;
  description: string;
  category: string;
  budgetMin: number;
  budgetMax: number;
  location: string;
  urgency: string;
  itemCondition: ItemCondition;
  buyerId: string;
  images: string[];
  views: number;
  proposalsCount: number;
  status: RequestStatus;
  edits: Array<{ text: string; timestamp: string }>;
  createdAt: string;
  updatedAt: string;
}

export interface IRequestWithBuyer extends IRequest {
  buyer?: {
    id: string | number;
    name: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
    isVerified: boolean;
    memberSince: string;
    completedDeals: number;
  };
}
