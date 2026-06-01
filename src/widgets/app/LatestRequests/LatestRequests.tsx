'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useLingui } from '@lingui/react';
import { ArrowRight } from 'lucide-react';
import { routes } from '@/app/router/routes';
import { useLatestRequests, type IRequest } from '@/entities/request';
import { RequestCard } from '@/features/requests';
import { Loading } from '@shared/ui/loading';
import { Error } from '@shared/ui/error';
import { Button } from '@shared/ui/button';

const LatestRequests = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data, isLoading, isError } = useLatestRequests();

  const requests = useMemo(() => data?.results ?? [], [data?.results]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('common.home.latestRequests.title.prefix')}{' '}
              <span className="text-primary">{t('common.home.latestRequests.title.emphasis')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('common.home.latestRequests.subtitle')}
            </p>
          </div>
          <Button variant="outline" className="border-2 shrink-0 hidden md:flex" asChild>
            <Link href={routes.REQUEST}>
              {t('common.home.latestRequests.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <Loading variant="block" />
        ) : isError ? (
          <Error variant="block" message={t('request.list.requestsError')} />
        ) : requests.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            {t('common.home.latestRequests.empty')}
          </p>
        ) : (
          <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {requests.map((request) => (
                <RequestCard
                  key={request._id}
                  request={request as IRequest}
                  categoryName={request.category.name}
                />
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 md:hidden">
              <Button variant="outline" className="border-2 shrink-0" asChild>
                <Link href={routes.REQUEST}>
                  {t('common.home.latestRequests.viewAll')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestRequests;
