import { IRequest } from '../Request';

export interface IGetRequestsResponse {
  results: IRequest[];
  count: number;
  page: number;
  pageSize: number;
  totalPages: number;
  next?: string;
  previous?: string;
}
