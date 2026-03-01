import { IUser } from '@/entities/user';

export enum RequestStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  ACTIVE = 'active',
  PENDING = 'pending',
  CLOSED = 'closed',
  REJECTED = 'rejected',
}

export enum ItemCondition {
  NEW = 'new',
  USED = 'used',
}

export interface IRequestBuyer {
  _id: string;
  rating: number;
  memberSince: string;
  completedDeals: number;
  location: string | null;
  xp: number;
  name: string;
  lastName: string | null;
  avatar: string | null;
  reviewsCount?: number;
  isVerified?: boolean;
}

export interface IRequest {
  _id: string;
  title: string;
  description: string;
  category: {
    id: string;
    name: string;
  };
  budgetMin: number;
  budgetMax: number;
  location: string;
  urgency: number;
  itemCondition: ItemCondition;
  buyerId: IRequestBuyer;
  images: string[];
  views: number;
  proposalsCount: number;
  rejectedProposalsCount: number;
  pendingProposalsCount: number;
  status: RequestStatus;
  edits: Array<{
    timestamp: Date;
    changes?: Array<{ field: string; oldValue: unknown; newValue: unknown }>;
  }>;
  createdAt: string;
  updatedAt: string;
}

export type IRequestWithBuyer = IRequest;
