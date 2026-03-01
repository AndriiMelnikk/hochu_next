import { z } from 'zod';
import { ItemCondition, RequestStatus } from '../types/Request';

export const requestBuyerSchema = z.object({
  _id: z.string(),

  rating: z.number(),
  memberSince: z.string(),
  completedDeals: z.number(),
  lastName: z.string().nullable(),
  location: z.string().nullable(),
  xp: z.number(),
  name: z.string(),
  avatar: z.string().nullable(),
  reviewsCount: z.number().optional(),
  isVerified: z.boolean().optional(),
});

export const requestSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.object({
    id: z.string(),
    name: z.string(),
  }),
  budgetMin: z.number().optional(),
  budgetMax: z.number(),
  location: z.string().optional(),
  urgency: z.number(),
  itemCondition: z.nativeEnum(ItemCondition),
  buyerId: requestBuyerSchema,
  images: z.array(z.string()),
  views: z.number(),
  proposalsCount: z.number(),
  rejectedProposalsCount: z.number(),
  pendingProposalsCount: z.number(),
  status: z.nativeEnum(RequestStatus),
  edits: z.array(z.any()),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number().optional(),
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
  budgetMin: z.union([
    z.coerce.number().min(0, 'Мінімальний бюджет має бути більше 0'),
    z.undefined(),
  ]),
  budgetMax: z.coerce.number().min(0, 'Максимальний бюджет має бути більше 0'),
  location: z.string().optional(),
  urgency: z.coerce.number(),
  itemCondition: z.nativeEnum(ItemCondition),
  images: z.array(z.string()).optional(),
});

export const updateRequestSchema = z.object({
  title: z.string().min(1, "Заголовок обов'язковий"),
  description: z.string().min(10, 'Опис має бути мінімум 10 символів'),
  category: z.string().min(1, "Категорія обов'язкова"),
  budgetMin: z.union([
    z.coerce.number().min(0, 'Мінімальний бюджет має бути більше 0'),
    z.undefined(),
  ]),
  budgetMax: z.coerce.number().min(0, 'Максимальний бюджет має бути більше 0'),
  location: z.string().optional(),
  urgency: z.coerce.number(),
  itemCondition: z.nativeEnum(ItemCondition),
  images: z.array(z.string()).optional(),
});
