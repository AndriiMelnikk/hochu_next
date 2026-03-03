import { ProfileType } from '@entities/user/types/User';

export interface IReview {
  _id: string;
  rating: number;
  comment: string;
  authorProfileId: {
    _id: string;
    name: string;
    lastName?: string;
    avatar: string | null;
  };
  targetProfileId: {
    _id: string;
    rating: number;
    type: ProfileType;
    name: string;
    lastName?: string;
    avatar: string | null;
  };
  requestId: { _id: string; title: string } | null;
  proposalId: {
    _id: string;
    requestId?: {
      _id: string;
      title: string;
    } | null;
  } | null;
  createdAt: string;
  updatedAt: string;
}
