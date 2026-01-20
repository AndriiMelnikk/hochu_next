export interface IUser {
  _id?: string;
  name: string;
  email: string;
  avatar: string | null;
  rating?: number;
  reviewsCount?: number;
  isVerified?: boolean;
  memberSince?: string;
  completedDeals?: number;
  role: 'buyer' | 'seller' | 'admin';
  location?: string | null;
  xp?: number;
  unlockedAchievements?: string[];
  topAchievements?: string[];
}
