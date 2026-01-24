import { AxiosRequestConfig } from 'axios';
import { api, ENDPOINTS } from '@shared/api';
import type { IGetCategoriesResponse } from '../types/responses/GetCategories';

class CategoryService {
  async get(config?: AxiosRequestConfig): Promise<IGetCategoriesResponse> {
    return (await api.get(ENDPOINTS.CATEGORIES.BASE, config)).data;
  }
}

export const categoryService = new CategoryService();
