import { z } from 'zod';

export const RequestSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  budgetMin: z.number(),
  budgetMax: z.number(),
  location: z.string(),
  createdAt: z.string(),
  views: z.number(),
  proposalsCount: z.number(),
  urgency: z.string(),
  buyer: z.object({
    id: z.number(),
    name: z.string(),
    avatar: z.string(),
    rating: z.number(),
    reviewsCount: z.number(),
  }),
  images: z.array(z.string()).optional(),
  edits: z
    .array(
      z.object({
        text: z.string(),
        timestamp: z.string(),
      }),
    )
    .optional(),
});

export const GetRequestsResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(RequestSchema),
});

export type RequestType = z.infer<typeof RequestSchema>;
export type GetRequestsResponseType = z.infer<typeof GetRequestsResponseSchema>;
