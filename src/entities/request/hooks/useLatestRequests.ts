import { useMemo } from 'react';
import { HOME_LATEST_REQUESTS_LIMIT } from '../const';
import type { IGetRequestsResponse } from '../types/responses/GetRequests';
import { useRequests } from './useRequests';

export const useLatestRequests = (initialData?: IGetRequestsResponse) => {
  const searchParams = useMemo(
    () => ({
      page: 1,
      pageSize: HOME_LATEST_REQUESTS_LIMIT,
    }),
    [],
  );

  return useRequests(searchParams, { initialData });
};
