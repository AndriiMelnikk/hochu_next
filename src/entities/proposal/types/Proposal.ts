import type { ItemCondition } from '@/entities/request';

export enum ProposalStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  COMPLETED = 'completed',
}

export interface IProposalSeller {
  _id: string;
  name: string;
  avatar?: string | null;
  rating?: number;
  reviewsCount?: number;
  completedDeals?: number;
  isVerified?: boolean;
  location?: string | null;
  xp?: number;
}

export interface IProposal {
  _id: string;
  requestId: string;
  sellerId: string;
  price: number;
  title: string;
  description: string;
  estimatedTime: string;
  warranty?: string | null;
  itemCondition?: ItemCondition;
  images: string[];
  status: ProposalStatus;
  createdAt: string;
  updatedAt: string;
}

export interface IProposalWithSeller extends IProposal {
  seller?: IProposalSeller;
}
