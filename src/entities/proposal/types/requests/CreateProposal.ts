import { ItemCondition } from '@/entities/request';

/** DTO для створення пропозиції (відповідає CreateProposalDto на бекенді) */
export interface ICreateProposalRequest {
  requestId: number;
  price: number;
  title: string;
  description: string;
  estimatedTime: string;
  warranty?: string;
  itemCondition: ItemCondition;
  /** URL фото портфоліо (на даному етапі — заглушка) */
  images?: string[];
}
