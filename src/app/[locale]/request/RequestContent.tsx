'use client';

import { RequestCard } from '@/features/requests';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLingui } from '@lingui/react';
import { usePathname } from 'next/navigation';
import {
  useRequestStore,
  type IGetRequestsRequest,
  type IGetRequestsResponse,
} from '@/entities/request';
import { useCategories } from '@/entities/category';
import {
  CascadingSelect,
  type CascadingSelectItem,
  Container,
  EmptyState,
  ErrorState,
  Heading,
  Input,
  LoadingState,
  Pagination,
} from '@/ui-v2';
import { useDebounce, useQueryPagination } from '@shared/hooks';

type RequestContentProps = {
  /** Перша порція даних, завантажена на сервері */
  initialData?: IGetRequestsResponse;
  /** Параметри, з якими завантажено initialData */
  initialParams?: IGetRequestsRequest;
};

export default function RequestContent({ initialData, initialParams }: RequestContentProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname();
  const paginationOptions = useMemo(() => ({}), []);
  const { page, pageSize, setPage, filters, setFilter } = useQueryPagination<{
    category: string;
    search: string;
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
    requests: storeRequests,
    loading: storeLoading,
    error,
    fetchRequests,
  } = useRequestStore();

  const category = filters.category || undefined;
  const search = filters.search || undefined;

  // Поки параметри збігаються з серверними, показуємо серверні дані без повторного запиту
  const useServerData =
    !!initialData &&
    !!initialParams &&
    initialParams.page === page &&
    initialParams.pageSize === pageSize &&
    initialParams.category === category &&
    initialParams.search === search;
  const requests = useServerData ? initialData : storeRequests;
  const loading = useServerData ? false : storeLoading;

  useEffect(() => {
    if (useServerData) return;
    fetchRequests({ page, pageSize, category, search });
  }, [useServerData, page, pageSize, category, search, fetchRequests]);

  const requestResults = requests?.results || [];
  const totalCount = requests?.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const getPageHref = (target: number) => {
    const query = new URLSearchParams();
    if (category) query.set('category', category);
    if (search) query.set('search', search);
    if (target > 1) query.set('page', String(target));
    const qs = query.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className="ui-v2">
      <div className="mb-8">
        <Heading level="h1" as="h1" className="mb-2">
          {t('request.list.titlePrefix')}{' '}
          <span className="text-v2-primary">{t('request.list.titleEmphasis')}</span>
        </Heading>
        <p className="text-lg text-v2-muted">{t('request.list.subtitle')}</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          search
          aria-label={t('request.list.searchPlaceholder')}
          placeholder={t('request.list.searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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

      <div>
        <section aria-live="polite">
          <p className="mb-4 text-sm text-v2-muted">
            {loading ? (
              <LoadingState variant="inline" />
            ) : error ? (
              <ErrorState variant="inline" message={t('request.list.loadingError')} />
            ) : (
              <>
                {t('request.list.foundPrefix')}{' '}
                <span className="font-semibold text-v2-ink">{requests?.count || 0}</span>{' '}
                {t('request.list.foundSuffix')}
              </>
            )}
          </p>

          {loading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState message={t('request.list.requestsError')} />
          ) : requestResults.length === 0 ? (
            <EmptyState>{t('request.list.empty')}</EmptyState>
          ) : (
            <div>
              {requestResults.map((request) => (
                <RequestCard
                  key={request._id.toString()}
                  request={request}
                  categoryName={request.category.name}
                  variant="row"
                />
              ))}
            </div>
          )}
          {!loading && !error && totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              getPageHref={getPageHref}
              className="mt-8"
            />
          )}
        </section>
      </div>
    </Container>
  );
}
