import { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import type { IUser, IProfile, ContactChannel, IUpdateProfileRequest } from '../types/User';

class UserService {
  async get(id: string | number, config?: AxiosRequestConfig): Promise<IProfile> {
    return (await api.get(`/api/users/profile/${id}`, config)).data;
  }

  async getMe(config?: AxiosRequestConfig): Promise<IUser> {
    return (await api.get('/api/users/me', config)).data;
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
