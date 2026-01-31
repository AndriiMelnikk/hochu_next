import { z } from 'zod';

const objectIdSchema = z.union([
  z.string(),
  z.object({ _id: z.string() }).passthrough(),
  z.object({ $oid: z.string() }).passthrough(),
]);

export const categorySchema = z.lazy(() =>
  z
    .object({
      _id: objectIdSchema,
      title: z.string(),
      description: z.string().nullable().optional(),
      slug: z.string(),
      parentId: objectIdSchema.nullable().optional(),
      parent: objectIdSchema.nullable().optional(),
      path: z.array(objectIdSchema).optional(),
      level: z.number().optional(),
      icon: z.string().nullable().optional(),
      order: z.number().optional(),
      isActive: z.boolean().optional(),
      children: z.array(categorySchema).optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .passthrough(),
);

export const getCategoriesResponseSchema = z.union([
  z.array(categorySchema),
  z.object({
    results: z.array(categorySchema),
  }),
]);
