import { cache } from 'react';
import { requestService } from '../services/requestService';
import { RequestStatus, type IRequest } from '../types/Request';

const PAGE_SIZE = 100;
const MAX_PAGES = 100;

/** Усі запити зі статусом (посторінково; API не віддає totalPages, тож рахуємо з count) */
export const fetchAllRequests = cache(async (status: RequestStatus): Promise<IRequest[]> => {
  const results: IRequest[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages && page <= MAX_PAGES) {
    const response = await requestService.get({ page, pageSize: PAGE_SIZE, status });
    results.push(...response.results);
    totalPages = Math.ceil((response.count ?? 0) / PAGE_SIZE) || 1;
    page += 1;
  }

  return results;
});
