import { FC, useMemo } from 'react';
import { useReviews, IGetReviewsRequest } from '@entities/review';
import { Terminal } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { useQueryPagination } from '@shared/hooks';
import { Alert, AlertDescription, AlertTitle, LoadingState, Pagination } from '@/ui-v2';

interface ReviewsListProps {
  params: Omit<IGetReviewsRequest, 'page' | 'pageSize'>;
}

export const ReviewsList: FC<ReviewsListProps> = ({ params }) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const paginationOptions = useMemo(() => ({ pageSize: 10 }), []);
  const { page, pageSize, setPage } = useQueryPagination<Record<string, never>>(paginationOptions);

  const queryParams = useMemo(() => ({ ...params, page, pageSize }), [params, page, pageSize]);

  const { data: reviewsResponse, isLoading, isError, isSuccess } = useReviews(queryParams);

  if (isLoading) {
    return <LoadingState className="min-h-[30vh]" />;
  }

  if (isError) {
    return (
      <Alert tone="danger">
        <Terminal className="h-4 w-4" />
        <AlertTitle>{t('review.list.errorTitle')}</AlertTitle>
        <AlertDescription>{t('review.list.errorDescription')}</AlertDescription>
      </Alert>
    );
  }

  if (isSuccess && (!reviewsResponse || reviewsResponse.results.length === 0)) {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>{t('review.list.emptyTitle')}</AlertTitle>
        <AlertDescription>{t('review.list.emptyDescription')}</AlertDescription>
      </Alert>
    );
  }

  if (!reviewsResponse) {
    return null;
  }

  const totalPages = Math.max(1, Math.ceil(reviewsResponse.count / pageSize));

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {reviewsResponse.results.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="pt-2"
        />
      )}
    </div>
  );
};
