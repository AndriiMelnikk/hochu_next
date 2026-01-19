import { z } from 'zod';

export const messageSchema = z.object({
  id: z.number(),
  senderId: z.number(),
  receiverId: z.number(),
  content: z.string(),
  createdAt: z.string(),
  read: z.boolean(),
});
