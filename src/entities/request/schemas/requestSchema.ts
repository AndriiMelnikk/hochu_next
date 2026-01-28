import { z } from 'zod';

const userShortSchema = z.object({
  _id: z.string(),
  name: z.string(),
  avatar: z.string().nullable().optional(),
  rating: z.number().optional().default(0),
  memberSince: z.string().optional(),
  completedDeals: z.number().optional().default(0),
  location: z.string().nullable().optional(),
  xp: z.number().optional(),
});

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
    updatedAt: z.string().optional(),
    views: z.number(),
    proposalsCount: z.number(),
    images: z.array(z.string()),
    buyerId: z.union([z.string(), z.number(), userShortSchema]),
    status: z.enum(['pending', 'active', 'closed', 'rejected']),
    edits: z.array(
      z.object({
        text: z.string(),
        timestamp: z.string(),
      }),
    ),
  })
  .transform((data) => {
    const buyerObj = typeof data.buyerId === 'object' ? data.buyerId : null;
    const buyerId = buyerObj ? buyerObj._id : String(data.buyerId);

    return {
      ...data,
      id: String(data.id ?? data._id ?? ''),
      buyerId,
      buyer: buyerObj
        ? {
            id: buyerObj._id,
            name: buyerObj.name,
            avatar: buyerObj.avatar,
            rating: buyerObj.rating || 0,
            reviewsCount: 0, // Mock for now as it is not in the response
            isVerified: false, // Mock for now
            memberSince: buyerObj.memberSince
              ? new Date(buyerObj.memberSince).getFullYear().toString()
              : '',
            completedDeals: buyerObj.completedDeals || 0,
          }
        : undefined,
    };
  });

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
