import { z } from 'zod';

import { ItemCondition } from '@/entities/request';
import { ProposalStatus } from '../types/Proposal';

const proposalSellerSchema = z
  .object({
    _id: z.string(),
    name: z.string(),
    avatar: z.string().nullable().optional(),
    rating: z.number().optional(),
    reviewsCount: z.number().optional(),
    completedDeals: z.number().optional(),
    isVerified: z.boolean().optional(),
    location: z.string().nullable().optional(),
    memberSince: z.string().optional(),
  })
  .optional();

export const proposalSchema = z.object({
  _id: z.string(),
  requestId: z.string(),
  sellerId: z.string(),
  price: z.number(),
  title: z.string(),
  description: z.string(),
  estimatedTime: z.number(),
  warranty: z.number().nullable().optional(),
  itemCondition: z.nativeEnum(ItemCondition).optional(),
  images: z.array(z.string()),
  status: z.nativeEnum(ProposalStatus),
  createdAt: z.string(),
  updatedAt: z.string(),
  seller: proposalSellerSchema,
});

export const getProposalsResponseSchema = z.object({
  results: z.array(proposalSchema),
});

export const createProposalSchema = z.object({
  price: z.coerce.number().min(0, 'proposal.create.validation.price'),
  title: z.string().min(1, 'proposal.create.validation.title'),
  description: z.string().min(10, 'proposal.create.validation.description'),
  estimatedTime: z.coerce.number().min(1, 'proposal.create.validation.deliveryTime'),
  warranty: z.preprocess((val) => (val === '' ? undefined : val), z.coerce.number().optional()),
  itemCondition: z.nativeEnum(ItemCondition, {
    required_error: 'proposal.create.validation.itemCondition',
  }),
  /** Заглушка: масив URL фото (макс. 5) */
  images: z.array(z.string().url()).max(5).optional(),
});
