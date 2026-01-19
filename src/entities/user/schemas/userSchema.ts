import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string(),
  rating: z.number(),
  reviewsCount: z.number(),
  isVerified: z.boolean(),
  memberSince: z.string(),
  completedDeals: z.number(),
  role: z.enum(['buyer', 'seller']),
  location: z.string(),
  xp: z.number(),
  unlockedAchievements: z.array(z.string()),
  topAchievements: z.array(z.string()),
});
