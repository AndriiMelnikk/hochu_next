import { z } from 'zod';

export const proposalSchema = z.object({
  id: z.number(),
  requestId: z.number(),
  sellerId: z.number(),
  price: z.number(),
  description: z.string(),
  estimatedTime: z.string(),
  createdAt: z.string(),
  status: z.enum(['pending', 'accepted', 'rejected']),
});

export const getProposalsResponseSchema = z.object({
  count: z.number(),
  results: z.array(proposalSchema),
});

export const createProposalSchema = z.object({
  requestId: z.number(),
  price: z.number().min(0, 'Ціна має бути більше 0'),
  description: z.string().min(10, 'Опис має бути мінімум 10 символів'),
  estimatedTime: z.string().min(1, "Час виконання обов'язковий"),
});
