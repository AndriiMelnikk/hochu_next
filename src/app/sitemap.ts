import type { MetadataRoute } from 'next';
import { locales, type Locale } from '@/locales/config';
import { routes } from '@/app/router/routes';
import { siteUrl } from '@/shared/config/envVars';
import { requestService } from '@/entities/request';
import { blogService } from '@/entities/blog/services/blogService';
import { isIndexableProfile } from '@/shared/seo/indexability';

/** Sitemap перегенеровується раз на годину, а не фіксується на момент білда */
export const revalidate = 3600;

const REQUESTS_PAGE_SIZE = 100;
/** Верхня межа запитів у sitemap (×2 локалі, ліміт sitemap — 50 000 URL) */
const MAX_REQUEST_PAGES = 100;

/** Публічні статичні маршрути, які потрапляють у sitemap */
const STATIC_ROUTES: (keyof typeof routes)[] = [
  'HOME',
  'REQUEST',
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

async function getRequestAndProfileEntries(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];
  const profileIds = new Set<string>();

  try {
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages && page <= MAX_REQUEST_PAGES) {
      const response = await requestService.get({
        page,
        pageSize: REQUESTS_PAGE_SIZE,
        status: 'active',
      });
      totalPages = response.totalPages || 1;

      for (const request of response.results) {
        entries.push(
          ...sitemapEntry(routes.REQUEST_ID(request._id), {
            lastModified: request.updatedAt ? new Date(request.updatedAt) : undefined,
            changeFrequency: 'daily',
            priority: 0.7,
          }),
        );

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

      page += 1;
    }
  } catch (error) {
    // Віддаємо те, що встигли зібрати, замість порожнього списку
    console.error('Sitemap: failed to fetch requests', error);
  }

  return entries;
}

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const { results } = await blogService.get();
    return results.flatMap((post) =>
      sitemapEntry(routes.BLOG_ID(String(post.id)), {
        lastModified: parseDate(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      }),
    );
  } catch (error) {
    console.error('Sitemap: failed to fetch blog posts', error);
    return [];
  }
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

  const [requestEntries, blogEntries] = await Promise.all([
    getRequestAndProfileEntries(),
    getBlogEntries(),
  ]);

  return [...staticEntries, ...requestEntries, ...blogEntries];
}
