import { useMemo } from 'react';
import { HOME_LATEST_REQUESTS_LIMIT } from '../const';
import { useRequests } from './useRequests';

export const useLatestRequests = () => {
  const searchParams = useMemo(
    () => ({
      page: 1,
      pageSize: HOME_LATEST_REQUESTS_LIMIT,
    }),
    [],
  );

  return useRequests(searchParams);
};
