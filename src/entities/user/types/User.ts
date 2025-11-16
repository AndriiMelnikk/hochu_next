export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  isVerified: boolean;
  memberSince: string;
  completedDeals: number;
  role: "buyer" | "seller";
  location: string;
  xp: number;
  unlockedAchievements: string[];
  topAchievements: string[];
}

