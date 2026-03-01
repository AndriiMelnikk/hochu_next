import type { ItemCondition } from '@/entities/request';

export enum ProposalStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  COMPLETED = 'completed',
}

export enum ProposalRejectionReason {
  USER_BLOCKED = 'USER_BLOCKED',
  REQUEST_NOT_FOUND = 'REQUEST_NOT_FOUND',
  REQUEST_NOT_ACTIVE = 'REQUEST_NOT_ACTIVE',
  OWN_REQUEST = 'OWN_REQUEST',
  ALREADY_PROPOSED = 'ALREADY_PROPOSED',
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
  lastName?: string | null;
  memberSince?: string;
  xp?: number;
}

export interface IProposal {
  _id: string;
  requestId: string;
  sellerId: string;
  price: number;
  title: string;
  description: string;
  estimatedTime: number;
  warranty?: number | null;
  itemCondition?: ItemCondition;
  images: string[];
  status: ProposalStatus;
  createdAt: string;
  updatedAt: string;
}

export interface IProposalWithSeller extends IProposal {
  seller?: IProposalSeller;
}
