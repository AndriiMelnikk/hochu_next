import { AxiosRequestConfig } from "axios";
import { mockRequestService } from "@/shared/api/mock/requestMock";
import type { IGetRequestsRequest, IGetRequestsResponse, IRequest } from "../model/types";

class RequestService {
  async get(
    searchParams: IGetRequestsRequest = {},
    config?: AxiosRequestConfig
  ): Promise<IGetRequestsResponse> {
    // В production тут буде реальний API виклик
    // return (await api.get(`/requests/`, { params: searchParams, ...config })).data;
    
    // Поки що використовуємо mock
    return mockRequestService.getAll(searchParams);
  }

  async getOne(id: number, config?: AxiosRequestConfig): Promise<IRequest> {
    // В production: return (await api.get(`/requests/${id}/`, config)).data;
    return mockRequestService.getById(id);
  }
}

export const requestService = new RequestService();

