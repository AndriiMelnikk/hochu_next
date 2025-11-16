import { z } from "zod";

export const reviewSchema = z.object({
  id: z.number(),
  userId: z.number(),
  targetUserId: z.number(),
  rating: z.number().min(1).max(5),
  comment: z.string(),
  createdAt: z.string(),
});

