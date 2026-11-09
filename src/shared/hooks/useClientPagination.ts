import { useState } from 'react';

/** Клієнтська пагінація для списків, які вже повністю завантажені. */
export function useClientPagination<T>(items: T[], pageSize = 10) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  // Якщо список скоротився (фільтр, видалення) — не виходимо за останню сторінку
  const current = Math.min(page, totalPages);
  const pageItems = items.slice((current - 1) * pageSize, current * pageSize);
  return { page: current, setPage, totalPages, pageItems };
}
