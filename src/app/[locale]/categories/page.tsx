import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getBreadcrumbListJsonLd } from '@/shared/seo/schemas';
import type { ICategory } from '@/entities/category';
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
    <div className="container mx-auto px-4 max-w-6xl">
      <JsonLd
        data={getBreadcrumbListJsonLd([
          { name: copy.home, url: `/${locale}` },
          { name: copy.title },
        ])}
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{copy.title}</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">{copy.intro}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roots.map((root) => (
          <section key={root._id} className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold mb-3">
              <Link
                href={routes.CATEGORY(root.slug)}
                className="inline-flex min-h-11 items-center gap-2 hover:text-primary"
              >
                {root.title}
                {countOf(root) > 0 && (
                  <span className="text-sm font-normal text-muted-foreground">{countOf(root)}</span>
                )}
              </Link>
            </h2>
            <ul className="text-sm text-muted-foreground">
              {(root.children ?? [])
                .filter(
                  (child) => child.isActive !== false && isIndexableCategory(child, countOf(child)),
                )
                .map((child) => (
                  <li key={child._id}>
                    <Link
                      href={routes.CATEGORY(child.slug)}
                      className="inline-flex min-h-11 items-center hover:text-primary"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
