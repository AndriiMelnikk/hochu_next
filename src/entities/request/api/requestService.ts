import { AxiosRequestConfig } from "axios";
import { api } from "@/shared/api";
import type { IGetRequestsRequest, IGetRequestsResponse, IRequest } from "../model/types";

class RequestService {
  async get(
    searchParams: IGetRequestsRequest = {},
    config?: AxiosRequestConfig
  ): Promise<IGetRequestsResponse> {
    return (await api.get(`/requests/`, { params: searchParams, ...config })).data;
  }

  async getOne(id: number, config?: AxiosRequestConfig): Promise<IRequest> {
    return (await api.get(`/requests/${id}/`, config)).data;
  }
}

export const requestService = new RequestService();

