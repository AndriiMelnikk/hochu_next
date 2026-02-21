import { ItemCondition, RequestStatus } from '../Request';

export interface IUpdateRequestRequest {
  title?: string;
  description?: string;
  category?: string;
  budgetMin?: number;
  budgetMax?: number;
  location?: string;
  urgency?: number;
  itemCondition?: ItemCondition;
  images?: string[];
  status?: RequestStatus;
}
