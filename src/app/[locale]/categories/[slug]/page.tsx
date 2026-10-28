import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/locales/config';
import { buildAlternates, getMetadataForRoute } from '@/locales/route-metadata';
import { routes } from '@/app/router/routes';
import { requestService, RequestStatus, type IRequest } from '@/entities/request';
import { CITIES } from '@/shared/config/cities';
import {
  getCatalogCopy,
  getCatalogStats,
  getCategoryAncestors,
  getCategoryIndex,
  isIndexableCategory,
  isIndexableCategoryCity,
  isServiceCategory,
} from '../_lib/catalog';
import { CatalogView, type CatalogLink } from '../_components/CatalogView';

/** ISR: каталог оновлюється раз на 10 хвилин або одразу після змін у запитах */
export const revalidate = 600;

export function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const LIST_LIMIT = 24;

async function loadCategory(params: Props['params']) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : 'uk';

  const index = await getCategoryIndex(locale);
  const category = index.bySlug.get(slug);
  if (!category) notFound();

  const stats = await getCatalogStats();
  const count = stats.byCategory.get(category._id) ?? 0;
  const copy = getCatalogCopy({
    locale,
    title: category.title,
    isService: isServiceCategory(index, category),
    count,
  });

  return { locale, slug, index, category, stats, count, copy };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, category, count, copy } = await loadCategory(params);
  const base = getMetadataForRoute(locale, 'CATEGORY', routes.CATEGORY(slug));
  const indexable = isIndexableCategory(category, count);

  return {
    ...base,
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: buildAlternates(locale, routes.CATEGORY(slug)),
    robots: indexable ? base.robots : { index: false, follow: true },
    openGraph: { ...base.openGraph, title: copy.metaTitle, description: copy.metaDescription },
    twitter: { ...base.twitter, title: copy.metaTitle, description: copy.metaDescription },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, index, category, stats, copy } = await loadCategory(params);

  let requests: IRequest[] = [];
  try {
    const response = await requestService.get({
      status: RequestStatus.ACTIVE,
      category: category._id,
      pageSize: LIST_LIMIT,
    });
    requests = response.results;
  } catch (error) {
    console.error('Failed to fetch category requests:', error);
  }

  const breadcrumbs: CatalogLink[] = [
    { href: routes.HOME, label: locale === 'en' ? 'Home' : 'Головна' },
    { href: routes.CATEGORIES, label: locale === 'en' ? 'Categories' : 'Категорії' },
    ...getCategoryAncestors(index, category).map((item) => ({
      href: routes.CATEGORY(item.slug),
      label: item.title,
    })),
  ];

  // Підкатегорії: показуємо лише ті, що індексуються (щоб не вести на тонкі сторінки)
  const subcategoryLinks = (category.children ?? [])
    .filter((child) => child.isActive !== false)
    .map((child) => ({ child, count: stats.byCategory.get(child._id) ?? 0 }))
    .filter(({ child, count }) => isIndexableCategory(child, count))
    .map(({ child, count }) => ({ href: routes.CATEGORY(child.slug), label: child.title, count }));

  const cityCounts = stats.byCategoryCity.get(category._id);
  const cityLinks = CITIES.map((city) => ({ city, count: cityCounts?.get(city.slug) ?? 0 }))
    .filter(({ count }) => isIndexableCategoryCity(count))
    .map(({ city, count }) => ({
      href: routes.CATEGORY_CITY(category.slug, city.slug),
      label: locale === 'en' ? city.en : city.uk,
      count,
    }));

  return (
    <CatalogView
      locale={locale}
      copy={copy}
      breadcrumbs={breadcrumbs}
      subcategories={{
        title: locale === 'en' ? 'Subcategories' : 'Підкатегорії',
        links: subcategoryLinks,
      }}
      cities={{ title: locale === 'en' ? 'By city' : 'За містами', links: cityLinks }}
      requests={requests}
    />
  );
}
