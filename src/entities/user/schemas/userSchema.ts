import { z } from 'zod';

export const accountSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().nullable(),
  isAdmin: z.boolean(),
  isBlocked: z.boolean(),
  blockedUntil: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const profileSchema = z.object({
  _id: z.string(),
  accountId: z.string(),
  type: z.enum(['buyer', 'seller']),
  rating: z.number(),
  reviewsCount: z.number(),
  isVerified: z.boolean(),
  memberSince: z.string(),
  completedDeals: z.number(),
  location: z.string().nullable(),
  xp: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const userSchema = z.object({
  account: accountSchema,
  profile: profileSchema,
});
