import { IUser } from '@/entities/user';

export enum RequestStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  ACTIVE = 'active',
}

export enum ItemCondition {
  NEW = 'new',
  USED = 'used',
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
  urgency: string;
  itemCondition: ItemCondition;
  buyer: IUser;
  images: string[];
  views: number;
  proposalsCount: number;
  status: RequestStatus;
  edits: Array<{ text: string; timestamp: string }>;
  createdAt: string;
  updatedAt: string;
}
