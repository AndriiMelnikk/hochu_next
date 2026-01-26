import { z } from 'zod';

export const citySchema = z.object({
  ref: z.string(),
  name: z.string(),
  mainDescription: z.string(),
  settlementType: z.string().optional(),
  area: z.string().optional(),
  region: z.string().optional(),
  deliveryCityRef: z.string(),
});

export const searchCitiesResponseSchema = z.object({
  data: z.array(citySchema),
  meta: z.object({
    total: z.number(),
    source: z.string(),
  }),
});
