export interface IAccount {
  _id: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface IProfile {
  _id: string;
  type: 'buyer' | 'seller';
  rating: number;
  xp: number;
  completedDeals: number;
  accountId?: string;
  avatar?: string | null;
  name?: string;
  isBlocked?: boolean;
  blockedUntil?: string | null;
  reviewsCount?: number;
  isVerified?: boolean;
  memberSince?: string;
  location?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUser {
  account: IAccount;
  profile: IProfile;
}
