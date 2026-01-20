import { z } from 'zod';

export const userSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().nullable(),
  rating: z.number().optional().default(0),
  reviewsCount: z.number().optional().default(0),
  isVerified: z.boolean().optional().default(false),
  memberSince: z.string().optional().default(''),
  completedDeals: z.number().optional().default(0),
  role: z.enum(['buyer', 'seller', 'admin']),
  location: z.string().nullable().optional(),
  xp: z.number().optional().default(0),
  unlockedAchievements: z.array(z.string()).optional().default([]),
  topAchievements: z.array(z.string()).optional().default([]),
});
