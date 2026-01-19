export interface ICreateRequestRequest {
  title: string;
  description: string;
  category: string;
  budgetMin: number;
  budgetMax: number;
  location: string;
  urgency: string;
  images?: string[];
}
