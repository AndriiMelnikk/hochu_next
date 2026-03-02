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
    const { buyerId, ...params } = searchParams;
    if (buyerId) {
      return this.getByBuyer(buyerId, params, config);
    }
    return (await api.get(ENDPOINTS.REQUESTS.BASE, { params, ...config })).data;
  }

  async getByBuyer(
    buyerId: string,
    searchParams: Omit<IGetRequestsRequest, 'buyerId'> = {},
    config?: AxiosRequestConfig,
  ): Promise<IGetRequestsResponse> {
    const endpoint = ENDPOINTS.REQUESTS.FEED(buyerId);
    return (await api.get(endpoint, { params: searchParams, ...config })).data;
  }

  async getByProposals(
    profileId: string,
    searchParams: Omit<IGetRequestsRequest, 'buyerId'> = {},
    config?: AxiosRequestConfig,
  ): Promise<IGetRequestsResponse> {
    const endpoint = ENDPOINTS.REQUESTS.PROPOSALS(profileId);
    return (await api.get(endpoint, { params: searchParams, ...config })).data;
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

  /**
   * Завантажує одне зображення для запиту (POST /api/upload/post, multipart field "file").
   * Повертає URL завантаженого файлу.
   */
  async uploadPostImage(file: File, requestConfig?: AxiosRequestConfig): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post<{ url?: string; path?: string } | string>(
      ENDPOINTS.UPLOAD.POST_IMAGE,
      formData,
      {
        ...requestConfig,
        headers: {
          ...requestConfig?.headers,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    const data = response.data;
    if (typeof data === 'string') return data;
    const url = data?.url ?? data?.path;
    if (typeof url !== 'string') throw new Error('Upload response missing url/path');
    return url;
  }

  async deleteFile(url: string, config?: AxiosRequestConfig): Promise<void> {
    return (await api.delete(ENDPOINTS.UPLOAD.DELETE_FILE, { ...config, params: { url } })).data;
  }
}

export const requestService = new RequestService();
