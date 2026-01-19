import { AxiosRequestConfig } from 'axios';
import { api, ENDPOINTS } from '@shared/api';
import type { IGetRequestsResponse } from '../types/responses/GetRequests';
import type { IRequestWithBuyer } from '../types/Request';
import { IGetRequestsRequest } from '../types/requests/GetRequests';
import { ICreateRequestRequest } from '../types/requests/CreateRequest';

class RequestService {
  async get(
    searchParams: IGetRequestsRequest = {},
    config?: AxiosRequestConfig,
  ): Promise<IGetRequestsResponse> {
    const urlSearchParams = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        urlSearchParams.append(key, String(value));
      }
    });

    const queryString = urlSearchParams.toString();
    const url = `${ENDPOINTS.REQUESTS.BASE}${queryString ? `?${queryString}` : ''}`;
    return (await api.get(url, config)).data;
  }

  async getOne(id: string | number, config?: AxiosRequestConfig): Promise<IRequestWithBuyer> {
    return (await api.get(ENDPOINTS.REQUESTS.BY_ID(id), config)).data;
  }

  async create(
    data: ICreateRequestRequest,
    config?: AxiosRequestConfig,
  ): Promise<IRequestWithBuyer> {
    return (await api.post(ENDPOINTS.REQUESTS.BASE, data, config)).data;
  }

  async update(
    id: string | number,
    data: Partial<ICreateRequestRequest>,
    config?: AxiosRequestConfig,
  ): Promise<IRequestWithBuyer> {
    return (await api.patch(ENDPOINTS.REQUESTS.BY_ID(id), data, config)).data;
  }

  async delete(id: string | number, config?: AxiosRequestConfig): Promise<void> {
    return (await api.delete(ENDPOINTS.REQUESTS.BY_ID(id), config)).data;
  }
}

export const requestService = new RequestService();
