import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/locales/config';
import { buildAlternates, getMetadataForRoute } from '@/locales/route-metadata';
import { routes } from '@/app/router/routes';
import { requestService, RequestStatus, type IRequest } from '@/entities/request';
import { getCityBySlug, getCityLocationQuery, matchCity } from '@/shared/config/cities';
import {
  getCatalogCopy,
  getCatalogStats,
  getCategoryAncestors,
  getCategoryIndex,
  isIndexableCategoryCity,
  isServiceCategory,
} from '../../_lib/catalog';
import { CatalogView, type CatalogLink } from '../../_components/CatalogView';

export const revalidate = 600;

export function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ locale: string; slug: string; city: string }>;
};

const LIST_LIMIT = 24;

async function loadCategoryCity(params: Props['params']) {
  const { locale: localeParam, slug, city: citySlug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : 'uk';

  const city = getCityBySlug(citySlug);
  const index = await getCategoryIndex(locale);
  const category = index.bySlug.get(slug);
  if (!city || !category) notFound();

  const stats = await getCatalogStats();
  const count = stats.byCategoryCity.get(category._id)?.get(city.slug) ?? 0;
  const copy = getCatalogCopy({
    locale,
    title: category.title,
    isService: isServiceCategory(index, category),
    count,
    city,
  });

  return { locale, slug, city, index, category, stats, count, copy };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, city, count, copy } = await loadCategoryCity(params);
  const path = routes.CATEGORY_CITY(slug, city.slug);
  const base = getMetadataForRoute(locale, 'CATEGORY_CITY', path);

  return {
    ...base,
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: buildAlternates(locale, path),
    // Без активних запитів сторінка доступна користувачам, але не індексується
    robots: isIndexableCategoryCity(count) ? base.robots : { index: false, follow: true },
    openGraph: { ...base.openGraph, title: copy.metaTitle, description: copy.metaDescription },
    twitter: { ...base.twitter, title: copy.metaTitle, description: copy.metaDescription },
  };
}

export default async function CategoryCityPage({ params }: Props) {
  const { locale, city, index, category, stats, copy } = await loadCategoryCity(params);

  let requests: IRequest[] = [];
  try {
    const response = await requestService.get({
      status: RequestStatus.ACTIVE,
      category: category._id,
      location: getCityLocationQuery(city),
      pageSize: LIST_LIMIT,
    });
    // API шукає підрядок — відсікаємо збіги з іншими населеними пунктами
    requests = response.results.filter(
      (request) => matchCity(request.location)?.slug === city.slug,
    );
  } catch (error) {
    console.error('Failed to fetch category city requests:', error);
  }

  const cityName = locale === 'en' ? city.en : city.uk;
  const breadcrumbs: CatalogLink[] = [
    { href: routes.HOME, label: locale === 'en' ? 'Home' : 'Головна' },
    { href: routes.CATEGORIES, label: locale === 'en' ? 'Categories' : 'Категорії' },
    ...getCategoryAncestors(index, category).map((item) => ({
      href: routes.CATEGORY(item.slug),
      label: item.title,
    })),
    { href: routes.CATEGORY_CITY(category.slug, city.slug), label: cityName },
  ];

  // Інші категорії в цьому місті, де є запити
  const otherCategories = index.roots
    .filter((root) => root._id !== category._id)
    .map((root) => ({ root, count: stats.byCategoryCity.get(root._id)?.get(city.slug) ?? 0 }))
    .filter(({ count }) => isIndexableCategoryCity(count))
    .map(({ root, count }) => ({
      href: routes.CATEGORY_CITY(root.slug, city.slug),
      label: root.title,
      count,
    }));

  return (
    <CatalogView
      locale={locale}
      copy={copy}
      breadcrumbs={breadcrumbs}
      subcategories={{
        title: locale === 'en' ? `Other categories in ${city.en}` : `Інші категорії ${city.ukIn}`,
        links: otherCategories,
      }}
      requests={requests}
    />
  );
}
