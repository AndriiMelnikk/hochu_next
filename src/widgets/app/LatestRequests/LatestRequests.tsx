'use client';

import { useMemo } from 'react';
import { useLingui } from '@lingui/react';
import { ArrowRight } from 'lucide-react';

import { routes } from '@/app/router/routes';
import { useLatestRequests, type IRequest, type IGetRequestsResponse } from '@/entities/request';
import { RequestCard } from '@/features/requests';
import Link from '@/shared/ui/link';
import { Button, Container, Heading, Section, LoadingState, ErrorState } from '@/ui-v2';

const LatestRequests = ({ initialData }: { initialData?: IGetRequestsResponse }) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data, isLoading, isError } = useLatestRequests(initialData);

  const requests = useMemo(() => data?.results ?? [], [data?.results]);

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Heading level="h2" as="h2" className="mb-3">
              {t('common.home.latestRequests.title.prefix')}{' '}
              <span className="text-v2-primary">
                {t('common.home.latestRequests.title.emphasis')}
              </span>
            </Heading>
            <p className="text-lg text-v2-muted">{t('common.home.latestRequests.subtitle')}</p>
          </div>
          <Button asChild variant="outline" className="shrink-0 self-start">
            <Link href={routes.REQUEST}>
              {t('common.home.latestRequests.viewAll')}
              <ArrowRight />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState message={t('request.list.requestsError')} />
        ) : requests.length === 0 ? (
          <p className="py-8 text-center text-v2-muted">{t('common.home.latestRequests.empty')}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {requests.map((request) => (
              <RequestCard
                key={request._id}
                request={request as IRequest}
                categoryName={request.category.name}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default LatestRequests;
