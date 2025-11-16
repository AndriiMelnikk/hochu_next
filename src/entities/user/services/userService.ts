import { AxiosRequestConfig } from "axios";
import { api } from "@shared/api/api";
import type { IUser } from "../types/User";

class UserService {
  async get(id: string | number, config?: AxiosRequestConfig): Promise<IUser> {
    return (await api.get(`/api/users/${id}`, config)).data;
  }

  async getMe(config?: AxiosRequestConfig): Promise<IUser> {
    return (await api.get("/api/users/me", config)).data;
  }
}

export const userService = new UserService();

