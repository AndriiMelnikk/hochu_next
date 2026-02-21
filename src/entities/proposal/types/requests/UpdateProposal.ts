import { ItemCondition } from '@/entities/request';

export interface IUpdateProposalRequest {
  title?: string;
  description?: string;
  price?: number;
  estimatedTime?: number;
  warranty?: number | null;
  itemCondition?: ItemCondition;
  images?: string[];
}
