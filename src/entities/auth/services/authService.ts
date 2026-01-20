import { AxiosRequestConfig } from 'axios';
import { api, ENDPOINTS } from '@shared/api';
import type { ILoginRequest } from '../types/requests/LoginRequest';
import type { IRegisterRequest } from '../types/requests/RegisterRequest';
import type { IAuthResponse } from '../types/responses/AuthResponse';
import { authResponseSchema } from '../schemas/authSchema';
import { LS_KEYS } from '../const';
import { userSchema } from '@/entities/user/schemas/userSchema';
import type { IUser } from '@/entities/user/types/User';

class AuthService {
  async login(data: ILoginRequest, config?: AxiosRequestConfig): Promise<IAuthResponse> {
    const response = await api.post<IAuthResponse>(ENDPOINTS.AUTH.LOGIN, data, config);

    console.log('response.data', response.data);
    // Валідація відповіді через Zod для гарантії цілісності даних
    try {
      const validatedData = authResponseSchema.parse(response.data);
      console.log('validatedData', validatedData);

      if (validatedData.access_token && typeof window !== 'undefined') {
        localStorage.setItem(LS_KEYS.ACCESS_TOKEN, validatedData.access_token);
        localStorage.setItem(LS_KEYS.REFRESH_TOKEN, validatedData.refresh_token);
      }
      return validatedData;
    } catch (error) {
      console.error('Zod validation error:', error);
      throw error;
    }
  }

  async register(data: IRegisterRequest, config?: AxiosRequestConfig): Promise<IAuthResponse> {
    const response = await api.post<IAuthResponse>(ENDPOINTS.AUTH.REGISTER, data, config);

    // Валідація відповіді через Zod
    try {
      const validatedData = authResponseSchema.parse(response.data);

      if (validatedData.access_token && typeof window !== 'undefined') {
        localStorage.setItem(LS_KEYS.ACCESS_TOKEN, validatedData.access_token);
        localStorage.setItem(LS_KEYS.REFRESH_TOKEN, validatedData.refresh_token);
      }
      return validatedData;
    } catch (error) {
      console.error('Zod validation error during registration:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(LS_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(LS_KEYS.REFRESH_TOKEN);
    }
  }

  async getMe(config?: AxiosRequestConfig): Promise<IUser> {
    const response = await api.get<IUser>(ENDPOINTS.USER.ME, config);

    console.log('response.data', response.data);
    return userSchema.parse(response.data) as IUser;
  }

  async refresh(refreshToken: string): Promise<{ access_token: string; refresh_token: string }> {
    const response = await api.post(ENDPOINTS.AUTH.REFRESH, { refresh_token: refreshToken });
    return response.data;
  }

  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
  }

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!this.getToken();
  }
}

export const authService = new AuthService();
