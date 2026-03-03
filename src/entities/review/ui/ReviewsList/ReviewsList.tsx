import { FC, useMemo } from 'react';
import { useReviews, IGetReviewsRequest } from '@entities/review';
import { Skeleton } from '@shared/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@shared/ui/alert';
import { Terminal } from 'lucide-react';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { UniversalPagination } from '@shared/ui/universal-pagination';
import { useQueryPagination } from '@shared/hooks';

interface ReviewsListProps {
  params: Omit<IGetReviewsRequest, 'page' | 'pageSize'>;
}

export const ReviewsList: FC<ReviewsListProps> = ({ params }) => {
  const paginationOptions = useMemo(() => ({ pageSize: 10 }), []);
  const { page, pageSize, setPage } = useQueryPagination<Record<string, never>>(paginationOptions);

  const queryParams = useMemo(() => ({ ...params, page, pageSize }), [params, page, pageSize]);

  const { data: reviewsResponse, isLoading, isError, isSuccess } = useReviews(queryParams);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Помилка</AlertTitle>
        <AlertDescription>Не вдалося завантажити відгуки. Спробуйте ще раз.</AlertDescription>
      </Alert>
    );
  }

  if (isSuccess && (!reviewsResponse || reviewsResponse.results.length === 0)) {
    return (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Немає відгуків</AlertTitle>
        <AlertDescription>Для цього профілю ще немає відгуків.</AlertDescription>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviewsResponse.results.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
      {totalPages > 1 && (
        <UniversalPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="pt-2"
        />
      )}
    </div>
  );
};
