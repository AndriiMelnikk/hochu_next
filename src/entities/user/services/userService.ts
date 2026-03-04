import { AxiosRequestConfig } from 'axios';
import { api, ENDPOINTS } from '@shared/api';
import type {
  IUser,
  IProfile,
  ContactChannel,
  IUpdateProfileRequest,
  ICreateProfileRequest,
} from '../types/User';

class UserService {
  async get(id: string | number, config?: AxiosRequestConfig): Promise<IProfile> {
    return (await api.get(`/api/users/profile/${id}`, config)).data;
  }

  async getMe(config?: AxiosRequestConfig): Promise<IUser> {
    return (await api.get(ENDPOINTS.USER.ME, config)).data;
  }

  async getMyProfiles(config?: AxiosRequestConfig): Promise<IProfile[]> {
    const { data } = await api.get(ENDPOINTS.USER.ME_PROFILES, config);
    return Array.isArray(data) ? data : (data?.profiles ?? data?.results ?? []);
  }

  async createProfile(
    payload: ICreateProfileRequest,
    config?: AxiosRequestConfig,
  ): Promise<IProfile> {
    const { data } = await api.post(ENDPOINTS.USER.PROFILE, payload, config);
    return data;
  }

  async updateMe(data: IUpdateProfileRequest, config?: AxiosRequestConfig): Promise<IUser> {
    return (await api.patch('/api/users/me', data, config)).data;
  }

  async updateContacts(
    id: string,
    contacts: Partial<Record<ContactChannel, string>>,
    config?: AxiosRequestConfig,
  ): Promise<IProfile> {
    return (await api.patch(`/api/users/${id}/contacts`, contacts, config)).data;
  }

  async getContacts(
    id: string | number,
    config?: AxiosRequestConfig,
  ): Promise<Partial<Record<ContactChannel, string>>> {
    return (await api.get(`/api/users/${id}/contacts`, config)).data;
  }

  async uploadAvatar(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const { data } = await api.post('/api/upload/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data.url;
  }
}

export const userService = new UserService();
