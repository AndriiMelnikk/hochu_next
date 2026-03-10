import { z } from 'zod';
import {
  UserRoleEnum,
  userSchema,
  accountSchema,
  profileSchema,
} from '../../user/schemas/userSchema';

export const loginSchema = z.object({
  email: z.string().email('Невірний формат email'),
  password: z.string().min(6, 'Пароль має бути мінімум 6 символів'),
});

export const registerSchema = z.object({
  email: z.string().email('Невірний формат email'),
  password: z.string().min(6, 'Пароль має бути мінімум 6 символів'),
  name: z.string().min(2, "Ім'я має бути мінімум 2 символи"),
  lastName: z.string().optional(),
  type: z.enum(UserRoleEnum as [string, ...string[]]),
});

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, "Старий пароль обов'язковий"),
  newPassword: z.string().min(6, 'Новий пароль має бути мінімум 6 символів'),
});

export const authResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
  account: accountSchema,
  profiles: z.array(
    z.object({
      id: z.string(),
      name: z.string().optional(),
      lastName: z.string().optional().nullable(),
      type: z.enum(UserRoleEnum as [string, ...string[]]),
      rating: z.number(),
      xp: z.number(),
      completedDeals: z.number(),
    }),
  ),

  currentProfileId: z.string(),
});
