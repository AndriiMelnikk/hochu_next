import { AxiosRequestConfig } from 'axios';
import { api } from '@shared/api/api';
import type { IUser, IProfile, ContactChannel } from '../types/User';

class UserService {
  async get(id: string | number, config?: AxiosRequestConfig): Promise<IProfile> {
    return (await api.get(`/api/users/profile/${id}`, config)).data;
  }

  async getMe(config?: AxiosRequestConfig): Promise<IUser> {
    return (await api.get('/api/users/me', config)).data;
  }

  async getContacts(
    id: string | number,
    config?: AxiosRequestConfig,
  ): Promise<Partial<Record<ContactChannel, string>>> {
    return (await api.get(`/api/users/${id}/contacts`, config)).data;
  }
}

export const userService = new UserService();
