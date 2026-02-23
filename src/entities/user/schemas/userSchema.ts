import { z } from 'zod';
export type UserRole = 'buyer' | 'seller';
export const UserRoleEnum: UserRole[] = ['buyer', 'seller'];

export const accountSchema = z.object({
  _id: z.string(),
  email: z.string().email(),
  isAdmin: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number().optional(),
});

export const profileSchema = z.object({
  _id: z.string(),
  type: z.enum(UserRoleEnum as [string, ...string[]]),
  rating: z.number(),
  xp: z.number(),
  completedDeals: z.number(),
  accountId: z.string().optional(),
  avatar: z.string().optional().nullable(),
  name: z.string().optional(),
  isBlocked: z.boolean().optional(),
  blockedUntil: z.string().nullable().optional(),
  reviewsCount: z.number().optional(),
  isVerified: z.boolean().optional(),
  memberSince: z.string().optional(),
  location: z.string().nullable().optional(),
  contacts: z.record(z.string()).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  __v: z.number().optional(),
});

export const userSchema = z.object({
  account: accountSchema,
  profile: profileSchema,
});
