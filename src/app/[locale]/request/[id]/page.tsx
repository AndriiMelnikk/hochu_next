import { cache } from 'react';
import { notFound } from 'next/navigation';
import { getLocaleFromParams, type Locale } from '@/locales/locale';
import { buildContentAlternates, getMetadataForRoute } from '@/locales/route-metadata';
import RequestDetailContent from './RequestDetailContent';
import { requestService, RequestStatus } from '@/entities/request';
import { routes } from '@/app/router/routes';
import { IRequestWithBuyer } from '@/entities/request/types/Request';
import { getCategoryAncestors, getCategoryIndex } from '@/entities/category';
import { SimilarRequests } from '@/widgets/app/SimilarRequests';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getDemandJsonLd } from '@/shared/seo/schemas';
import { siteUrl } from '@/shared/config/envVars';
import {
  isIndexableRequestStatus,
  detectContentLocale,
  isNotFoundError,
  toMetaDescription,
} from '@/shared/seo/indexability';

/** ISR: сторінка кешується й оновлюється раз на хвилину або одразу після змін (revalidatePath) */
export const revalidate = 60;

/** Сторінки не генеруються під час білда — рендеряться при першому запиті й кешуються */
export function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ id: string; locale: string }>;
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

async function getCategoryTrail(locale: Locale, categoryId: string) {
  try {
    const index = await getCategoryIndex(locale);
    const category = index.byId.get(categoryId);
    return category
      ? getCategoryAncestors(index, category).map(({ title, slug }) => ({ title, slug }))
      : undefined;
  } catch {
    return undefined;
  }
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromParams(params);
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
      // Індексуються активні й виконані запити; решта (модерація, скасовані, відхилені) — ні
      alternates: buildContentAlternates(
        locale,
        routes.REQUEST_ID(id),
        detectContentLocale(request.title, request.description),
      ),
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
  const locale = await getLocaleFromParams(params);
  const lookup = await getRequest(id);
  if (lookup.state === 'missing') notFound();

  const request = lookup.state === 'found' ? lookup.request : null;
  const categoryTrail = request ? await getCategoryTrail(locale, request.category.id) : undefined;
  const indexable = !!request && isIndexableRequestStatus(request.status);

  return (
    <>
      {request && indexable && (
        <JsonLd
          data={getDemandJsonLd({
            name: request.title,
            description: toMetaDescription(request.description, 500),
            url: `${siteUrl}/${locale}${routes.REQUEST_ID(id)}`,
            category: request.category?.name,
            image: request.images?.[0],
            minPrice: request.budgetMin,
            maxPrice: request.budgetMax,
            location: request.location,
            createdAt: request.createdAt,
            isActive: request.status === RequestStatus.ACTIVE,
          })}
        />
      )}
      <RequestDetailContent id={id} initialData={request} categoryTrail={categoryTrail} />
      {request && <SimilarRequests request={request} locale={locale} />}
    </>
  );
}
