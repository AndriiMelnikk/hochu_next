import { z } from 'zod';
import { NotificationCategory, NotificationChannel } from '../types/Notification';

export const notificationChannelSchema = z.enum([
  NotificationChannel.IN_APP,
  NotificationChannel.EMAIL,
]);

export const notificationCategorySchema = z.enum([
  NotificationCategory.NEW_REQUESTS,
  NotificationCategory.REQUEST_UPDATES,
  NotificationCategory.MY_REQUEST_ACTIVITY,
  NotificationCategory.MY_PROPOSAL_STATUS,
  NotificationCategory.MESSAGES,
  NotificationCategory.REVIEWS,
  NotificationCategory.ACHIEVEMENTS,
]);

export const notificationSchema = z.object({
  _id: z.string(),
  accountId: z.string(),
  profileId: z.string().nullable().optional(),
  type: z.string(),
  category: notificationCategorySchema,
  title: z.string(),
  message: z.string(),
  link: z.string().nullable().optional(),
  metadata: z.record(z.unknown()).nullable().optional(),
  read: z.boolean(),
  createdAt: z.string(),
});

export const categoryPreferenceSchema = z.object({
  enabled: z.boolean(),
  channels: z.array(notificationChannelSchema),
});

export const newRequestsPreferenceSchema = categoryPreferenceSchema.extend({
  categories: z.array(z.string()),
  location: z.string().nullable(),
});

export const notificationPreferencesSchema = z.object({
  [NotificationCategory.NEW_REQUESTS]: newRequestsPreferenceSchema,
  [NotificationCategory.REQUEST_UPDATES]: categoryPreferenceSchema,
  [NotificationCategory.MY_REQUEST_ACTIVITY]: categoryPreferenceSchema,
  [NotificationCategory.MY_PROPOSAL_STATUS]: categoryPreferenceSchema,
  [NotificationCategory.MESSAGES]: categoryPreferenceSchema,
  [NotificationCategory.REVIEWS]: categoryPreferenceSchema,
  [NotificationCategory.ACHIEVEMENTS]: categoryPreferenceSchema,
});

export const requestSubscriptionSchema = z.object({
  _id: z.string(),
  sellerProfileId: z.string(),
  categories: z.array(z.string()),
  location: z.string().nullable(),
  budgetMin: z.number().nullable(),
  budgetMax: z.number().nullable(),
  enabled: z.boolean(),
  channels: z.array(notificationChannelSchema),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const paginationResultSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    count: z.number(),
    results: z.array(itemSchema),
    page: z.number(),
    pageSize: z.number(),
    next: z.string().nullable().optional(),
    previous: z.string().nullable().optional(),
  });
