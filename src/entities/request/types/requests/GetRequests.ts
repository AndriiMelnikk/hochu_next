export interface IGetRequestsRequest {
  page?: number;
  pageSize?: number;
  search?: string;
  category?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  status?: string;
  buyerId?: string;
}
