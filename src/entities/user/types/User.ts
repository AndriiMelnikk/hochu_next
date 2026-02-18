export interface IAccount {
  _id: string;
  name: string;
  email: string;
  avatar: string | null;
  isAdmin: boolean;
  isBlocked: boolean;
  blockedUntil: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IProfile {
  _id: string;
  accountId: string;
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
