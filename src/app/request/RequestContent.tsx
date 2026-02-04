'use client';

import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import { Input } from '@shared/ui/input';
import { Loading } from '@shared/ui/loading';
import { Error } from '@shared/ui/error';
import { RequestCard } from '@/features/requests';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useLingui } from '@lingui/react';
import { useRequestStore } from '@/entities/request';
import { CascadingSelect, type CascadingSelectItem } from '@shared/ui/cascading-select';
import { useCategories } from '@/entities/category';
import { UniversalPagination } from '@shared/ui/universal-pagination';
import { useDebounce } from '@shared/hooks';

export default function RequestContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [page, setPage] = useState(1);
  const pageSize = 12;

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
  // These seem unused in the original code but kept state for them
  const [location, setLocation] = useState('');

  const { requests, loading, error, fetchRequests } = useRequestStore();

  useEffect(() => {
    fetchRequests({
      page,
      pageSize,
      category: selectedCategories.length > 0 ? selectedCategories.join(',') : undefined,
      search: debouncedSearchQuery || undefined,
      location: location || undefined,
    });
  }, [page, selectedCategories, debouncedSearchQuery, location, fetchRequests]);

  const requestResults = requests?.results || [];
  const totalCount = requests?.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              {t('request.list.titlePrefix')}{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('request.list.titleEmphasis')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">{t('request.list.subtitle')}</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-2xl shadow-md p-6 mb-8 border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Search Bar */}
              <div className="mb-4 grid gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder={t('request.list.searchPlaceholder')}
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setPage(1);
                    }}
                  />
                </div>
              </div>

              {/* Category Tags */}
              <div className="mb-4 grid gap-4">
                <CascadingSelect
                  items={cascadingCategories}
                  value={selectedCategories[0]}
                  onValueChange={(id) => {
                    setSelectedCategories(id ? [id] : []);
                    setPage(1);
                  }}
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
            </div>
          </div>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              {loading ? (
                <Loading variant="inline" />
              ) : error ? (
                <Error variant="inline" message={t('request.list.loadingError')} />
              ) : (
                <>
                  {t('request.list.foundPrefix')}{' '}
                  <span className="font-semibold text-foreground">{requests?.count || 0}</span>{' '}
                  {t('request.list.foundSuffix')}
                </>
              )}
            </p>
          </div>

          {/* Requests Grid */}
          {loading ? (
            <Loading variant="block" />
          ) : error ? (
            <Error variant="block" message={t('request.list.requestsError')} />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {requestResults.map((request) => {
                const category = categories.find((c) => c._id === request.category);
                return (
                  <RequestCard
                    key={request._id.toString()}
                    request={request}
                    categoryName={category?.title}
                  />
                );
              })}
            </div>
          )}

          {!loading && !error && totalPages > 1 && (
            <UniversalPagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
