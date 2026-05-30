import { AxiosRequestConfig } from 'axios';
import { api, ENDPOINTS } from '@shared/api';
import type { IContactRequest } from '../types/requests/ContactRequest';

class ContactService {
  async submit(data: IContactRequest, config?: AxiosRequestConfig): Promise<void> {
    await api.post(ENDPOINTS.CONTACT.BASE, data, config);
  }
}

export const contactService = new ContactService();
