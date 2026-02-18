export interface IAccount {
  _id: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IProfile {
  _id: string;
  accountId: string;
  avatar: string | null;
  name: string;
  isBlocked: boolean;
  blockedUntil: string | null;
  type: 'buyer' | 'seller';
  rating: number;
  reviewsCount: number;
  isVerified: boolean;
  memberSince: string;
  completedDeals: number;
  location: string | null;
  xp: number;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  account: IAccount;
  profile: IProfile;
}
