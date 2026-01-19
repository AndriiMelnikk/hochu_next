export interface IRequest {
  id: number;
  title: string;
  description: string;
  category: string;
  budgetMin: number;
  budgetMax: number;
  location: string;
  createdAt: string;
  views: number;
  proposalsCount: number;
  urgency: string;
  buyer: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
  };
  images?: string[];
  edits?: Array<{
    text: string;
    timestamp: string;
  }>;
}

export interface IGetRequestsRequest {
  page?: number;
  page_size?: number;
  category?: string;
  search?: string;
}

export interface IGetRequestsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IRequest[];
}
