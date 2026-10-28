import { Suspense } from 'react';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import RequestContent from './RequestContent';
import { routes } from '@/app/router/routes';
import { Loading } from '@/shared/ui/loading';
import { requestService } from '@/entities/request';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getItemListJsonLd } from '@/shared/seo/schemas';

const PAGE_SIZE = 20;

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params, searchParams }: LocaleRouteProps & Props) {
  const locale = await getLocaleFromParams(params);
  const query = await searchParams;
  const page = parsePage(first(query.page));
  const isFiltered = !!(first(query.search) || first(query.category));

  // Сторінки пагінації — самоканонічні (?page=N); пошук/фільтри — noindex, бо дублюють
  // список і покриваються сторінками категорій
  const path = page > 1 ? `${routes.REQUEST}?page=${page}` : routes.REQUEST;
  const metadata = getMetadataForRoute(locale, 'REQUEST', path);

  if (isFiltered) {
    return {
      ...metadata,
      robots: { index: false, follow: true },
      alternates: { canonical: metadata.alternates?.canonical },
    };
  }
  if (page > 1) {
    const suffix = locale === 'en' ? ` — page ${page}` : ` — сторінка ${page}`;
    const title = `${String(metadata.title).replace(/ \| Shukayu$/, '')}${suffix} | Shukayu`;
    return { ...metadata, title };
  }
  return metadata;
}

function parsePage(value: string | undefined): number {
  return Math.max(1, parseInt(value ?? '', 10) || 1);
}

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function RequestPage({ params, searchParams }: LocaleRouteProps & Props) {
  const locale = await getLocaleFromParams(params);
  const query = await searchParams;
  const page = parsePage(first(query.page));
  const category = first(query.category) || undefined;
  const search = first(query.search) || undefined;

  // Перша порція списку рендериться на сервері, щоб посилання на запити були в HTML
  const initialParams = { page, pageSize: PAGE_SIZE, category, search };
  let initialData;
  try {
    initialData = await requestService.get(initialParams);
  } catch (error) {
    console.error('Failed to prefetch requests:', error);
  }

  return (
    <Suspense fallback={<Loading variant="block" />}>
      {initialData && initialData.results.length > 0 && (
        <JsonLd
          data={getItemListJsonLd(
            initialData.results.map((request) => ({
              name: request.title,
              url: `/${locale}${routes.REQUEST_ID(request._id)}`,
            })),
          )}
        />
      )}
      <RequestContent initialData={initialData} initialParams={initialParams} />
    </Suspense>
  );
}
