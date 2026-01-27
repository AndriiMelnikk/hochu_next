import { z } from 'zod';

export const requestSchema = z
  .object({
    id: z.union([z.string(), z.number()]).optional(),
    _id: z.union([z.string(), z.number()]).optional(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    budgetMin: z.number(),
    budgetMax: z.number(),
    location: z.string(),
    urgency: z.string(),
    createdAt: z.string(),
    views: z.number(),
    proposalsCount: z.number(),
    images: z.array(z.string()),
    buyerId: z.union([z.string(), z.number()]),
    status: z.enum(['pending', 'active', 'closed', 'rejected']),
    edits: z.array(
      z.object({
        text: z.string(),
        timestamp: z.string(),
      }),
    ),
  })
  .transform((data) => ({
    ...data,
    id: String(data.id ?? data._id ?? ''),
    buyerId: String(data.buyerId),
  }));

export const getRequestsResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(requestSchema),
});

export const createRequestSchema = z.object({
  title: z.string().min(1, "Заголовок обов'язковий"),
  description: z.string().min(10, 'Опис має бути мінімум 10 символів'),
  category: z.string().min(1, "Категорія обов'язкова"),
  budgetMin: z.coerce.number().min(0, 'Мінімальний бюджет має бути більше 0'),
  budgetMax: z.coerce.number().min(0, 'Максимальний бюджет має бути більше 0'),
  location: z.string().min(1, "Локація обов'язкова"),
  urgency: z.string(),
  images: z.array(z.string()).optional(),
});
