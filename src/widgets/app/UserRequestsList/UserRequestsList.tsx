import { useMemo, useEffect, useState } from 'react';
import { useLingui } from '@lingui/react';
import { useRequestStore, REQUEST_STATUS_LABELS } from '@/entities/request';
import { useCategories } from '@/entities/category';
import { useDebounce, useQueryPagination } from '@shared/hooks';
import { RequestStatus } from '@/entities/request/types/Request';
import { RequestCard } from '@/features/requests';
import { useAuth, useAuthStore } from '@/entities/auth';
import {
  ErrorState,
  Input,
  LoadingState,
  Pagination,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  CascadingSelect,
  type CascadingSelectItem,
} from '@/ui-v2';

interface UserRequestsListProps {
  userId: string;
  userType: 'buyer' | 'seller';
}

export default function UserRequestsList({ userId, userType }: UserRequestsListProps) {
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

  const requests = useRequestStore((state) => state.requests);
  const isRequestsLoading = useRequestStore((state) => state.loading);
  const requestsError = useRequestStore((state) => state.error);
  const fetchRequests = useRequestStore((state) => state.fetchRequests);
  const fetchRequestsByProposals = useRequestStore((state) => state.fetchRequestsByProposals);

  useEffect(() => {
    const fetchParams = {
      page,
      pageSize,
      category: filters.category || undefined,
      search: filters.search || undefined,
      status: filters.status || undefined,
    };

    if (userType === 'seller') {
      fetchRequestsByProposals(userId, fetchParams);
    } else {
      fetchRequests({ ...fetchParams, buyerId: userId });
    }
  }, [
    page,
    pageSize,
    filters.category,
    filters.search,
    filters.status,
    userId,
    userType,
    fetchRequests,
    fetchRequestsByProposals,
  ]);

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
      <div className="mb-8 rounded-v2-2xl border border-v2-border bg-v2-surface p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="grid gap-4">
            <Input
              search
              aria-label={t('request.list.searchPlaceholder')}
              placeholder={t('request.list.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Tags */}
          <div className="grid gap-4">
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
              clearable
            />
          </div>

          {/* Status Filter */}
          <div className="grid gap-4">
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
        <p className="text-v2-muted">
          {isRequestsLoading ? (
            <LoadingState variant="inline" />
          ) : requestsError ? (
            <ErrorState variant="inline" message={t('request.list.loadingError')} />
          ) : (
            <>
              {userType === 'buyer'
                ? `Усі запити: ${totalCount}`
                : `Зроблені пропозиції: ${totalCount}`}
            </>
          )}
        </p>
      </div>

      {/* Requests Grid */}
      {isRequestsLoading ? (
        <LoadingState variant="block" />
      ) : requestsError ? (
        <ErrorState variant="block" message={t('request.list.requestsError')} />
      ) : (
        <div className="mb-8">
          {requestResults.map((request) => (
            <RequestCard
              key={request._id.toString()}
              request={request}
              categoryName={request.category.name}
              status={request.status as RequestStatus}
              variant="row"
            />
          ))}
        </div>
      )}

      {!isRequestsLoading && !requestsError && totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mt-8"
        />
      )}
    </>
  );
}
