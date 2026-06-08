export interface IPaginationResult<T> {
  count: number;
  results: T[];
  page: number;
  pageSize: number;
  next?: string | null;
  previous?: string | null;
}
