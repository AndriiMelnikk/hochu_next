import { useQuery } from '@tanstack/react-query';
import { locationService } from '../services/locationService';
import { searchCitiesResponseSchema } from '../schemas/locationSchema';
import type { ICity } from '../types/Location';

export const useCities = (query: string, limit: number = 50) => {
  return useQuery({
    queryKey: ['locations', 'cities', query, limit],
    queryFn: async () => {
      if (!query || query.length < 2) return [];
      const response = await locationService.searchCities({ query, limit });
      const parsed = searchCitiesResponseSchema.parse(response);
      return parsed.data;
    },
    enabled: query.length >= 2,
    retry: false,
  });
};
