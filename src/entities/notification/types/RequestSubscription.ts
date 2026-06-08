import type { NotificationChannel } from './Notification';

export interface IRequestSubscription {
  _id: string;
  sellerProfileId: string;
  categories: string[];
  location: string | null;
  budgetMin: number | null;
  budgetMax: number | null;
  enabled: boolean;
  channels: NotificationChannel[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ICreateRequestSubscriptionRequest {
  categories?: string[];
  location?: string | null;
  budgetMin?: number | null;
  budgetMax?: number | null;
  enabled?: boolean;
  channels?: NotificationChannel[];
}

export type IUpdateRequestSubscriptionRequest = Partial<ICreateRequestSubscriptionRequest>;
