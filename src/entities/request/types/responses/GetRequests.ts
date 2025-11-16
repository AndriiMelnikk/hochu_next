import { IRequest } from "../../Request";

export interface IGetRequestsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IRequest[];
}

