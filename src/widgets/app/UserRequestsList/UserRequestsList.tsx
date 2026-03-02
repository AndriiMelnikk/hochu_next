'use client';

import { useMemo, useEffect, useState } from 'react';
import { useLingui } from '@lingui/react';
import { useRequestStore, REQUEST_STATUS_LABELS } from '@/entities/request';
import { useCategories } from '@/entities/category';
import { useDebounce, useQueryPagination } from '@shared/hooks';
import { CascadingSelect, type CascadingSelectItem } from '@shared/ui/cascading-select';
import { UniversalPagination } from '@shared/ui/universal-pagination';
import { Loading } from '@shared/ui/loading';
import { Error } from '@shared/ui/error';
import { Input } from '@shared/ui/input';
import { Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { RequestStatus } from '@/entities/request/types/Request';
import { RequestCard } from '@/features/requests';

interface UserRequestsListProps {
  userId: string;
}

export default function UserRequestsList({ userId }: UserRequestsListProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const paginationOptions = useMemo(() => ({}), []);
  const { page, pageSize, setPage, filters, setFilter } = useQueryPagination<{
    category: string;
    search: string;
    status: string;
  }>(paginationOptions);

  const [searchQuery, setSearchQuery] = useState(filters.search || '');
  const [prevFiltersSearch, setPrevFiltersSearch] = useState(filters.search);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  if (filters.search !== prevFiltersSearch) {
    setPrevFiltersSearch(filters.search);
    if ((filters.search || '') !== debouncedSearchQuery) {
      setSearchQuery(filters.search || '');
    }
  }

  useEffect(() => {
    if ((filters.search || '') !== debouncedSearchQuery) {
      setFilter('search', debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, setFilter, filters.search]);

  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategories();

  const cascadingCategories = useMemo<CascadingSelectItem[]>(() => {
    return categories.map((cat) => ({
      id: cat._id,
      name: cat.title,
      parentId: cat.parentId || null,
    }));
  }, [categories]);

  const {
    requests,
    loading: isRequestsLoading,
    error: requestsError,
    fetchRequests,
  } = useRequestStore();

  useEffect(() => {
    fetchRequests({
      page,
      pageSize,
      category: filters.category || undefined,
      search: filters.search || undefined,
      status: filters.status || undefined,
      buyerId: userId,
    });
  }, [page, pageSize, filters, fetchRequests, userId]);

  const requestResults = requests?.results || [];
  const totalCount = requests?.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Search and Filters */}
      <div className="bg-card rounded-2xl shadow-md p-6 mb-8 border border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="mb-4 grid gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder={t('request.list.searchPlaceholder')}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tags */}
          <div className="mb-4 grid gap-4">
            <CascadingSelect
              items={cascadingCategories}
              value={filters.category || ''}
              onValueChange={(id) => setFilter('category', id || '')}
              placeholder={
                isCategoriesLoading
                  ? t('request.create.categoriesLoading')
                  : t('request.create.categoryPlaceholder')
              }
              disabled={isCategoriesLoading || isCategoriesError}
              emptyLabel={
                isCategoriesError
                  ? t('request.create.categoriesError')
                  : t('request.create.categoriesEmpty')
              }
              backLabel={t('request.create.categoryBackLabel')}
              moreLabel={t('request.create.categoryMoreLabel')}
              clearable
            />
          </div>

          {/* Status Filter */}
          <div className="mb-4 grid gap-4">
            <Select
              value={filters.status || 'all'}
              onValueChange={(value) => setFilter('status', value === 'all' ? '' : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Всі статуси" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Всі статуси</SelectItem>
                {Object.values(RequestStatus).map((status) => (
                  <SelectItem key={status} value={status}>
                    {t(REQUEST_STATUS_LABELS[status as keyof typeof REQUEST_STATUS_LABELS])}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-muted-foreground">
          {isRequestsLoading ? (
            <Loading variant="inline" />
          ) : requestsError ? (
            <Error variant="inline" message={t('request.list.loadingError')} />
          ) : (
            <>
              {t('request.list.foundPrefix')}{' '}
              <span className="font-semibold text-foreground">{totalCount}</span>{' '}
              {t('request.list.foundSuffix')}
            </>
          )}
        </p>
      </div>

      {/* Requests Grid */}
      {isRequestsLoading ? (
        <Loading variant="block" />
      ) : requestsError ? (
        <Error variant="block" message={t('request.list.requestsError')} />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {requestResults.map((request) => (
            <RequestCard
              key={request._id.toString()}
              request={request}
              categoryName={request.category.name}
              status={request.status as RequestStatus}
            />
          ))}
        </div>
      )}

      {!isRequestsLoading && !requestsError && totalPages > 1 && (
        <UniversalPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-8"
        />
      )}
    </>
  );
}
