import { AxiosRequestConfig } from 'axios';
import { api, ENDPOINTS } from '@shared/api';
import { IRequest, IRequestWithBuyer } from '../types/Request';
import { ICreateRequestRequest } from '../types/requests/CreateRequest';
import { IUpdateRequestRequest } from '../types/requests/UpdateRequest';
import { IGetRequestsRequest } from '../types/requests/GetRequests';
import { IGetRequestsResponse } from '../types/responses/GetRequests';

class RequestService {
  async get(
    searchParams: IGetRequestsRequest = {},
    config?: AxiosRequestConfig,
  ): Promise<IGetRequestsResponse> {
    return (await api.get(ENDPOINTS.REQUESTS.BASE, { params: searchParams, ...config })).data;
  }

  async getOne(id: string | number, config?: AxiosRequestConfig): Promise<IRequestWithBuyer> {
    return (await api.get(ENDPOINTS.REQUESTS.BY_ID(id), config)).data;
  }

  async create(data: ICreateRequestRequest, config?: AxiosRequestConfig): Promise<IRequest> {
    return (await api.post(ENDPOINTS.REQUESTS.BASE, data, config)).data;
  }

  async update(
    id: string | number,
    data: IUpdateRequestRequest,
    config?: AxiosRequestConfig,
  ): Promise<IRequestWithBuyer> {
    return (await api.patch(ENDPOINTS.REQUESTS.BY_ID(id), data, config)).data;
  }

  async cancel(id: string | number, config?: AxiosRequestConfig): Promise<void> {
    const url = `${ENDPOINTS.REQUESTS.BY_ID(id)}/cancel`;
    return (await api.patch(url, {}, config)).data;
  }

  async delete(id: string | number, config?: AxiosRequestConfig): Promise<void> {
    return (await api.delete(ENDPOINTS.REQUESTS.BY_ID(id), config)).data;
  }
}

export const requestService = new RequestService();
