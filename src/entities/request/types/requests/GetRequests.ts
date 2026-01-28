export interface IGetRequestsRequest {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
}
