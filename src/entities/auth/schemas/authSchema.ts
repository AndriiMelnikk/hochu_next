import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Невірний формат email'),
  password: z.string().min(6, 'Пароль має бути мінімум 6 символів'),
});

export const registerSchema = z.object({
  email: z.string().email('Невірний формат email'),
  password: z.string().min(6, 'Пароль має бути мінімум 6 символів'),
  name: z.string().min(2, "Ім'я має бути мінімум 2 символи"),
});

export const authResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
  user: z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string(),
    avatar: z.string().nullable(),
    rating: z.number(),
    reviewsCount: z.number(),
    isVerified: z.boolean(),
    memberSince: z.string(),
    completedDeals: z.number(),
    role: z.enum(['buyer', 'seller']),
    location: z.string().nullable(),
    xp: z.number(),
  }),
});
