import { AxiosRequestConfig } from "axios";
import { api } from "@shared/api/api";
import type { IBlogPost } from "../types/Blog";
import type { IGetBlogPostsResponse } from "../types/responses/GetBlogPosts";

class BlogService {
  async get(config?: AxiosRequestConfig): Promise<IGetBlogPostsResponse> {
    return (await api.get("/api/blog", config)).data;
  }

  async getOne(id: string | number, config?: AxiosRequestConfig): Promise<IBlogPost> {
    return (await api.get(`/api/blog/${id}`, config)).data;
  }
}

export const blogService = new BlogService();

