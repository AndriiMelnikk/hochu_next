import type { MetadataRoute } from 'next';
import { locales, type Locale } from '@/locales/config';
import { routes } from '@/app/router/routes';
import { siteUrl } from '@/shared/config/envVars';
import { fetchAllRequests, RequestStatus, type IRequest } from '@/entities/request';
import { getBlogPosts } from '@/entities/blog/services/blogPosts';
import type { ICategory } from '@/entities/category';
import { CITIES } from '@/shared/config/cities';
import { detectContentLocale, isIndexableProfile } from '@/shared/seo/indexability';
import {
  getCatalogStats,
  getCategoryIndex,
  isIndexableCategory,
  isIndexableCategoryCity,
} from '@/app/[locale]/categories/_lib/catalog';

/** Sitemap перегенеровується раз на годину (і одразу після змін через revalidatePath) */
export const revalidate = 3600;

/** Публічні статичні маршрути, які потрапляють у sitemap */
const STATIC_ROUTES: (keyof typeof routes)[] = [
  'HOME',
  'REQUEST',
  'CATEGORIES',
  'CREATE',
  'HOW_IT_WORKS',
  'BLOG',
  'PRICING',
  'ABOUT',
  'CONTACT',
  'TERMS',
  'PRIVACY',
  'SUPPORT',
];

function parseDate(value: string | undefined): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function localizedUrl(locale: Locale, path: string): string {
  return `${siteUrl}/${locale}${path === '/' ? '' : path}`;
}

function sitemapEntry(
  path: string,
  options: Partial<
    Pick<MetadataRoute.Sitemap[number], 'lastModified' | 'changeFrequency' | 'priority'>
  > = {},
): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: localizedUrl(locale, path),
    alternates: {
      languages: {
        uk: localizedUrl('uk', path),
        en: localizedUrl('en', path),
        'x-default': localizedUrl('uk', path),
      },
    },
    ...options,
  }));
}

async function safeFetchRequests(status: RequestStatus): Promise<IRequest[]> {
  try {
    return await fetchAllRequests(status);
  } catch (error) {
    console.error(`Sitemap: failed to fetch ${status} requests`, error);
    return [];
  }
}

async function getRequestAndProfileEntries(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const profileIds = new Set<string>();

  // Активні + виконані (архів) — ті самі статуси, що індексуються на сторінці запиту
  const [active, completed] = await Promise.all([
    safeFetchRequests(RequestStatus.ACTIVE),
    safeFetchRequests(RequestStatus.COMPLETED),
  ]);

  for (const request of [...active, ...completed]) {
    // Текст запиту не перекладається: в sitemap лише версія в мові контенту
    entries.push({
      url: localizedUrl(
        detectContentLocale(request.title, request.description),
        routes.REQUEST_ID(request._id),
      ),
      lastModified: parseDate(request.updatedAt),
      changeFrequency: request.status === RequestStatus.ACTIVE ? 'daily' : 'monthly',
      priority: request.status === RequestStatus.ACTIVE ? 0.7 : 0.4,
    });

    const buyer = request.buyerId;
    if (buyer?._id && !profileIds.has(buyer._id) && isIndexableProfile(buyer)) {
      profileIds.add(buyer._id);
      entries.push(
        ...sitemapEntry(routes.PROFILE_BY_ID(buyer._id), {
          changeFrequency: 'weekly',
          priority: 0.5,
        }),
      );
    }
  }

  return entries;
}

async function getCatalogEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const [index, stats] = await Promise.all([getCategoryIndex('uk'), getCatalogStats()]);
    const entries: MetadataRoute.Sitemap = [];

    const walk = (category: ICategory) => {
      const count = stats.byCategory.get(category._id) ?? 0;
      if (isIndexableCategory(category, count)) {
        entries.push(
          ...sitemapEntry(routes.CATEGORY(category.slug), {
            changeFrequency: 'daily',
            priority: (category.level ?? 0) === 0 ? 0.8 : 0.6,
          }),
        );
      }

      const cityCounts = stats.byCategoryCity.get(category._id);
      for (const city of CITIES) {
        if (isIndexableCategoryCity(cityCounts?.get(city.slug) ?? 0)) {
          entries.push(
            ...sitemapEntry(routes.CATEGORY_CITY(category.slug, city.slug), {
              changeFrequency: 'daily',
              priority: 0.6,
            }),
          );
        }
      }

      category.children?.forEach(walk);
    };
    index.roots.forEach(walk);

    return entries;
  } catch (error) {
    console.error('Sitemap: failed to build catalog entries', error);
    return [];
  }
}

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts('uk');
  return posts.flatMap((post) =>
    sitemapEntry(routes.BLOG_ID(String(post.id)), {
      lastModified: parseDate(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = STATIC_ROUTES.flatMap((route) => {
    const path = routes[route];
    if (typeof path !== 'string') return [];
    return sitemapEntry(path, {
      changeFrequency: route === 'HOME' || route === 'REQUEST' ? 'daily' : 'weekly',
      priority: route === 'HOME' ? 1 : 0.8,
    });
  });

  const [requestEntries, catalogEntries, blogEntries] = await Promise.all([
    getRequestAndProfileEntries(),
    getCatalogEntries(),
    getBlogEntries(),
  ]);

  return [...staticEntries, ...catalogEntries, ...requestEntries, ...blogEntries];
}
