import { Suspense } from 'react';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import RequestContent from './RequestContent';
import { routes } from '@/app/router/routes';
import { Loading } from '@/shared/ui/loading';
import { requestService } from '@/entities/request';

const PAGE_SIZE = 20;

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, routes.REQUEST as keyof typeof routes);
}

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function RequestPage({ searchParams }: Props) {
  const query = await searchParams;
  const page = Math.max(1, parseInt(first(query.page) ?? '', 10) || 1);
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
      <RequestContent initialData={initialData} initialParams={initialParams} />
    </Suspense>
  );
}
