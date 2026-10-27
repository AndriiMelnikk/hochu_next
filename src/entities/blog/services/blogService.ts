import { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import { ENDPOINTS } from '@shared/api/endpoints';
import type { IBlogPost } from '../types/Blog';
import type { IGetBlogPostsResponse } from '../types/responses/GetBlogPosts';

class BlogService {
  async get(config?: AxiosRequestConfig): Promise<IGetBlogPostsResponse> {
    return (await api.get(ENDPOINTS.BLOG.BASE, config)).data;
  }

  async getOne(id: string | number, config?: AxiosRequestConfig): Promise<IBlogPost> {
    return (await api.get(ENDPOINTS.BLOG.BY_ID(id), config)).data;
  }
}

export const blogService = new BlogService();
