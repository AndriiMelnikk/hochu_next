import { AxiosRequestConfig } from "axios";
import { api } from "@shared/api/api";
import type { IGetRequestsRequest, ICreateRequestRequest } from "../types/requests";
import type { IGetRequestsResponse } from "../types/responses/GetRequests";
import type { IRequestWithBuyer } from "../types/Request";

class RequestService {
  async get(
    searchParams: IGetRequestsRequest = {},
    config?: AxiosRequestConfig
  ): Promise<IGetRequestsResponse> {
    const urlSearchParams = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        urlSearchParams.append(key, String(value));
      }
    });

    const url = `/api/requests${urlSearchParams.toString() ? `?${urlSearchParams.toString()}` : ""}`;
    return (await api.get(url, config)).data;
  }

  async getOne(id: string | number, config?: AxiosRequestConfig): Promise<IRequestWithBuyer> {
    return (await api.get(`/api/requests/${id}`, config)).data;
  }

  async create(data: ICreateRequestRequest, config?: AxiosRequestConfig): Promise<IRequestWithBuyer> {
    return (await api.post("/api/requests", data, config)).data;
  }

  async update(
    id: string | number,
    data: Partial<ICreateRequestRequest>,
    config?: AxiosRequestConfig
  ): Promise<IRequestWithBuyer> {
    return (await api.patch(`/api/requests/${id}`, data, config)).data;
  }

  async delete(id: string | number, config?: AxiosRequestConfig): Promise<void> {
    return (await api.delete(`/api/requests/${id}`, config)).data;
  }
}

export const requestService = new RequestService();

