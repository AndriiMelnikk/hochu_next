import { ItemCondition } from '../Request';

export interface ICreateRequestRequest {
  title: string;
  description: string;
  category: string;
  budgetMin?: number;
  budgetMax: number;
  location?: string;
  urgency: number;
  itemCondition: ItemCondition;
  images?: string[];
}
