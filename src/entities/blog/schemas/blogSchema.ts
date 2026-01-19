import { z } from 'zod';

export const blogPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  author: z.string(),
  date: z.string(),
  readTime: z.string(),
  image: z.string(),
  content: z.string(),
});

export const getBlogPostsResponseSchema = z.object({
  count: z.number(),
  results: z.array(blogPostSchema),
});
