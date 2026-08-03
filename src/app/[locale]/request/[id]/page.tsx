import { Suspense, cache } from 'react';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import RequestDetailContent from './RequestDetailContent';
import { requestService } from '@/entities/request';
import { routes } from '@/app/router/routes';
import { IRequestWithBuyer } from '@/entities/request/types/Request';
import { Loading } from '@/shared/ui/loading';

type Props = {
  params: Promise<{ id: string }>;
};

const getRequest = cache(async (id: string): Promise<IRequestWithBuyer | null> => {
  try {
    return await requestService.getOne(id);
  } catch (error) {
    console.error('Failed to fetch request:', error);
    return null;
  }
});

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  const baseMetadata = getMetadataForRoute(locale, 'REQUEST_ID', routes.REQUEST_ID(id));

  const request = await getRequest(id);
  if (request) {
    const description = request.description?.slice(0, 160);
    return {
      ...baseMetadata,
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
  const request = await getRequest(id);
  return (
    <Suspense fallback={<Loading variant="block" />}>
      <RequestDetailContent id={id} initialData={request} />
    </Suspense>
  );
}
