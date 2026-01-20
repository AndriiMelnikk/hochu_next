import { z } from 'zod';
import { userSchema } from '../../user/schemas/userSchema';

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
  user: userSchema,
});
