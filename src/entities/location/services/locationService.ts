import { AxiosRequestConfig } from 'axios';
import { api, ENDPOINTS } from '@shared/api';
import type { ISearchCitiesResponse, ISearchCitiesDto } from '../types/Location';

class LocationService {
  async searchCities(
    params: ISearchCitiesDto,
    config?: AxiosRequestConfig,
  ): Promise<ISearchCitiesResponse> {
    return (await api.get(ENDPOINTS.LOCATIONS.CITIES, { ...config, params })).data;
  }
}

export const locationService = new LocationService();
