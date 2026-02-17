import { z } from 'zod';

import { ItemCondition } from '@/entities/request';

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
  // requestId: z.(),
  price: z.coerce.number().min(0, 'proposal.create.validation.price'),
  title: z.string().min(1, 'proposal.create.validation.title'),
  description: z.string().min(10, 'proposal.create.validation.description'),
  estimatedTime: z.string().min(1, 'proposal.create.validation.deliveryTime'),
  warranty: z.preprocess((val) => (val === '' ? undefined : val), z.string().optional()),
  itemCondition: z.nativeEnum(ItemCondition, {
    required_error: 'proposal.create.validation.itemCondition',
  }),
  /** Заглушка: масив URL фото (макс. 5) */
  images: z.array(z.string().url()).max(5).optional(),
});
