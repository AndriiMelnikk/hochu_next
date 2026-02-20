import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface UseQueryPaginationOptions<T> {
  pageSize?: number;
  pageParam?: string;
  pageSizeParam?: string;
  initialFilters?: Partial<T>;
  serialize?: (filters: Partial<T>) => Record<string, string>;
  deserialize?: (params: URLSearchParams) => Partial<T>;
}

interface UseQueryPaginationReturn<T> {
  page: number;
  pageSize: number;
  filters: Partial<T>;
  setPage: (page: number) => void;
  setFilters: (newFilters: Partial<T>) => void;
  setFilter: <K extends keyof T>(key: K, value: T[K]) => void;
  resetFilters: () => void;
  queryParams: Partial<T> & { page: number; pageSize: number };
}

const DEFAULT_INITIAL_FILTERS = {};

export function useQueryPagination<T extends Record<string, unknown>>({
  pageSize = 20,
  pageParam = 'page',
  pageSizeParam = 'pageSize',
  initialFilters = DEFAULT_INITIAL_FILTERS as Partial<T>,
  serialize,
  deserialize,
}: UseQueryPaginationOptions<T> = {}): UseQueryPaginationReturn<T> {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get current page from URL or default to 1
  const pageParamValue = searchParams.get(pageParam);
  const page = pageParamValue ? Math.max(1, parseInt(pageParamValue, 10) || 1) : 1;

  // Get current filters from URL
  const filters = useMemo(() => {
    if (deserialize) {
      return deserialize(searchParams);
    }

    // Default deserialization: treat everything except page/pageSize as a filter
    const currentFilters: Partial<T> = { ...initialFilters };
    let hasChanges = false;

    searchParams.forEach((value, key) => {
      if (key !== pageParam && key !== pageSizeParam) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((currentFilters as any)[key] !== value) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (currentFilters as any)[key] = value;
          hasChanges = true;
        }
      }
    });

    // If no keys from searchParams were added, and initialFilters is empty,
    // we might want to return a stable empty object if possible.
    // However, currentFilters is a new object every time.
    // If we want stability, we should use a custom hook for deep comparison or just accept it.
    // For now, let's keep it as is but note that `filters` is new every time.
    return currentFilters;
  }, [searchParams, deserialize, pageParam, pageSizeParam, initialFilters]);

  // Helper to update URL params
  const updateParams = useCallback(
    (newParams: Record<string, string | number | undefined | null>) => {
      const next = new URLSearchParams(searchParams.toString());

      Object.entries(newParams).forEach(([key, value]) => {
        if (value === undefined || value === null || value === '') {
          next.delete(key);
        } else {
          next.set(key, String(value));
        }
      });

      router.push(`${pathname}?${next.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  // Set page
  const setPage = useCallback(
    (newPage: number) => {
      updateParams({ [pageParam]: newPage });
    },
    [updateParams, pageParam],
  );

  // Set multiple filters (resets page)
  const setFilters = useCallback(
    (newFilters: Partial<T>) => {
      const paramsToUpdate: Record<string, string | number | undefined> = {
        [pageParam]: 1, // Reset page
      };

      if (serialize) {
        const serialized = serialize(newFilters);
        Object.assign(paramsToUpdate, serialized);
      } else {
        Object.assign(paramsToUpdate, newFilters);
      }

      // We need to remove keys that are not in newFilters if we want to replace state?
      // Or just merge? The requirement usually implies merging or replacing specific keys.
      // Let's assume merge behavior for setFilters but we might want to clear others.
      // For now, let's just update the provided keys.
      // Actually, usually setFilters implies "update these filters".

      updateParams(paramsToUpdate);
    },
    [updateParams, pageParam, serialize],
  );

  // Set single filter
  const setFilter = useCallback(
    <K extends keyof T>(key: K, value: T[K]) => {
      setFilters({ [key]: value } as unknown as Partial<T>);
    },
    [setFilters],
  );

  // Reset all filters to initial
  const resetFilters = useCallback(() => {
    // This might need improvement to actually clear URL params that are not in initialFilters
    // For now, let's just set page to 1

    // If we want to clear everything else, we'd need to know which keys to clear.
    // A simpler way is to replace the searchParams entirely.

    const next = new URLSearchParams();
    // Keep page/pageSize if we want? Or reset to defaults.
    next.set(pageParam, '1');

    // Restore initial filters
    if (initialFilters) {
      Object.entries(initialFilters).forEach(([k, v]) => {
        if (v) next.set(k, String(v));
      });
    }

    router.push(`${pathname}?${next.toString()}`, { scroll: false });
  }, [router, pathname, pageParam, initialFilters]);

  const queryParams = useMemo(
    () => ({
      ...filters,
      page,
      pageSize,
    }),
    [filters, page, pageSize],
  );

  return {
    page,
    pageSize,
    filters,
    setPage,
    setFilters,
    setFilter,
    resetFilters,
    queryParams,
  };
}
