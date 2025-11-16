import { AxiosRequestConfig } from "axios";
import { api } from "@shared/api/api";
import type { ILoginRequest, IRegisterRequest, IAuthResponse } from "../types/Auth";
import { LS_KEYS } from "../const";

class AuthService {
  async login(data: ILoginRequest, config?: AxiosRequestConfig): Promise<IAuthResponse> {
    const response = await api.post<IAuthResponse>("/api/auth/login", data, config);
    if (response.data.access_token) {
      localStorage.setItem(LS_KEYS.ACCESS_TOKEN, response.data.access_token);
      localStorage.setItem(LS_KEYS.REFRESH_TOKEN, response.data.refresh_token);
    }
    return response.data;
  }

  async register(data: IRegisterRequest, config?: AxiosRequestConfig): Promise<IAuthResponse> {
    const response = await api.post<IAuthResponse>("/api/auth/register", data, config);
    if (response.data.access_token) {
      localStorage.setItem(LS_KEYS.ACCESS_TOKEN, response.data.access_token);
      localStorage.setItem(LS_KEYS.REFRESH_TOKEN, response.data.refresh_token);
    }
    return response.data;
  }

  async logout(): Promise<void> {
    localStorage.removeItem(LS_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(LS_KEYS.REFRESH_TOKEN);
  }

  getToken(): string | null {
    return localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = new AuthService();

