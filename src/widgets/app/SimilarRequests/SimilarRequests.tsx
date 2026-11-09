import { requestService, RequestStatus, type IRequest } from '@/entities/request';
import { RequestCard } from '@/features/requests';
import type { Locale } from '@/locales/config';
import { Alert, Container, Heading } from '@/ui-v2';

const LIMIT = 4;

type SimilarRequestsProps = {
  request: IRequest;
  locale: Locale;
};

const COPY = {
  uk: {
    title: 'Схожі активні запити',
    completed: 'Цей запит уже виконано. Перегляньте схожі запити, які ще чекають на пропозиції.',
  },
  en: {
    title: 'Similar active requests',
    completed: 'This request has been completed. See similar requests still waiting for offers.',
  },
} as const;

/**
 * Серверний блок перелінковки: активні запити з тієї ж категорії.
 * Для виконаних запитів (архів) — головний спосіб повести користувача далі.
 */
export async function SimilarRequests({ request, locale }: SimilarRequestsProps) {
  let similar: IRequest[] = [];
  try {
    const response = await requestService.get({
      status: RequestStatus.ACTIVE,
      category: request.category.id,
      pageSize: LIMIT + 1,
    });
    similar = response.results.filter((item) => item._id !== request._id).slice(0, LIMIT);
  } catch (error) {
    console.error('Failed to fetch similar requests:', error);
  }

  const copy = COPY[locale];
  const isCompleted = request.status === RequestStatus.COMPLETED;
  if (similar.length === 0 && !isCompleted) return null;

  return (
    <Container className="ui-v2 mt-12">
      {isCompleted && (
        <Alert tone="info" className="mb-4">
          {copy.completed}
        </Alert>
      )}
      {similar.length > 0 && (
        <>
          <Heading level="h3" as="h2" className="mb-6">
            {copy.title}
          </Heading>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {similar.map((item) => (
              <RequestCard key={item._id} request={item} categoryName={item.category.name} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
