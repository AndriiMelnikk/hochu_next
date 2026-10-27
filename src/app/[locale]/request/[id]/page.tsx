import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import RequestDetailContent from './RequestDetailContent';
import { requestService } from '@/entities/request';
import { routes } from '@/app/router/routes';
import { IRequestWithBuyer } from '@/entities/request/types/Request';
import { Loading } from '@/shared/ui/loading';
import {
  isIndexableRequestStatus,
  isNotFoundError,
  toMetaDescription,
} from '@/shared/seo/indexability';

type Props = {
  params: Promise<{ id: string }>;
};

type RequestLookup =
  | { state: 'found'; request: IRequestWithBuyer }
  | { state: 'missing' }
  | { state: 'error' };

const getRequest = cache(async (id: string): Promise<RequestLookup> => {
  try {
    return { state: 'found', request: await requestService.getOne(id) };
  } catch (error) {
    if (isNotFoundError(error)) return { state: 'missing' };
    console.error('Failed to fetch request:', error);
    return { state: 'error' };
  }
});

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  const baseMetadata = getMetadataForRoute(locale, 'REQUEST_ID', routes.REQUEST_ID(id));

  const lookup = await getRequest(id);
  if (lookup.state === 'missing') {
    return { ...baseMetadata, robots: { index: false, follow: false } };
  }

  if (lookup.state === 'found') {
    const { request } = lookup;
    const description = toMetaDescription(request.description) ?? baseMetadata.description;
    return {
      ...baseMetadata,
      // Лише активні запити індексуються; решта (на модерації, закриті, відхилені) — ні
      robots: isIndexableRequestStatus(request.status)
        ? baseMetadata.robots
        : { index: false, follow: true },
      title: `${request.title} | Shukayu`,
      description,
      openGraph: {
        ...baseMetadata.openGraph,
        title: request.title,
        description,
      },
      twitter: {
        ...baseMetadata.twitter,
        title: request.title,
        description,
      },
    };
  }

  return baseMetadata;
}

export default async function RequestDetailPage({ params }: Props) {
  const { id } = await params;
  const lookup = await getRequest(id);
  if (lookup.state === 'missing') notFound();

  return (
    <Suspense fallback={<Loading variant="block" />}>
      <RequestDetailContent
        id={id}
        initialData={lookup.state === 'found' ? lookup.request : null}
      />
    </Suspense>
  );
}
