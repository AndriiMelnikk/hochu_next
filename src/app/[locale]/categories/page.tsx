import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getBreadcrumbListJsonLd } from '@/shared/seo/schemas';
import type { ICategory } from '@/entities/category';
import { Card, Container, Heading } from '@/ui-v2';
import { getCatalogStats, getCategoryIndex, isIndexableCategory } from './_lib/catalog';

export const revalidate = 600;

const COPY = {
  uk: {
    title: 'Категорії товарів і послуг',
    intro:
      'Оберіть категорію, щоб переглянути запити покупців або створити свій. Продавці й виконавці надсилають пропозиції з ціною та умовами, а покупець обирає найвигіднішу.',
    home: 'Головна',
  },
  en: {
    title: 'Product and service categories',
    intro:
      'Pick a category to browse buyer requests or post your own. Sellers and providers send offers with price and terms, and the buyer picks the best deal.',
    home: 'Home',
  },
} as const;

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'CATEGORIES');
}

export default async function CategoriesPage({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  const copy = COPY[locale];

  let roots: ICategory[] = [];
  try {
    roots = (await getCategoryIndex(locale)).roots;
  } catch (error) {
    console.error('Failed to load categories:', error);
  }
  const stats = await getCatalogStats();
  const countOf = (category: ICategory) => stats.byCategory.get(category._id) ?? 0;

  return (
    <Container className="ui-v2 max-w-[1240px]">
      <JsonLd
        data={getBreadcrumbListJsonLd([
          { name: copy.home, url: `/${locale}` },
          { name: copy.title },
        ])}
      />
      <Heading level="h1" as="h1" className="mb-3">
        {copy.title}
      </Heading>
      <p className="mb-10 max-w-3xl text-lg text-v2-muted">{copy.intro}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roots.map((root) => (
          <Card key={root._id} className="p-6">
            <h2 className="mb-2 text-xl font-[550]">
              <Link
                href={routes.CATEGORY(root.slug)}
                className="inline-flex min-h-11 items-center gap-2 hover:text-v2-primary hover:underline underline-offset-4"
              >
                {root.title}
                {countOf(root) > 0 && (
                  <span className="text-sm font-[450] text-v2-subtle">{countOf(root)}</span>
                )}
              </Link>
            </h2>
            <ul className="text-sm text-v2-muted">
              {(root.children ?? [])
                .filter(
                  (child) => child.isActive !== false && isIndexableCategory(child, countOf(child)),
                )
                .map((child) => (
                  <li key={child._id}>
                    <Link
                      href={routes.CATEGORY(child.slug)}
                      className="inline-flex min-h-11 items-center hover:text-v2-primary hover:underline underline-offset-4"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </Card>
        ))}
      </div>
    </Container>
  );
}
