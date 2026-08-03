import type { MetadataRoute } from 'next';
import { locales, type Locale } from '@/locales/config';
import { routes } from '@/app/router/routes';
import { siteUrl } from '@/shared/config/envVars';
import { requestService } from '@/entities/request';
import { blogService } from '@/entities/blog/services/blogService';

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
  'LOGIN',
  'REGISTER',
];

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
      },
    },
    ...options,
  }));
}

async function getRequestEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const { results } = await requestService.get({ pageSize: 100, status: 'active' });
    return results.flatMap((request) =>
      sitemapEntry(routes.REQUEST_ID(request._id), {
        lastModified: request.updatedAt ? new Date(request.updatedAt) : undefined,
        changeFrequency: 'daily',
        priority: 0.7,
      }),
    );
  } catch (error) {
    console.error('Sitemap: failed to fetch requests', error);
    return [];
  }
}

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const { results } = await blogService.get();
    return results.flatMap((post) =>
      sitemapEntry(routes.BLOG_ID(String(post.id)), {
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

  const [requestEntries, blogEntries] = await Promise.all([getRequestEntries(), getBlogEntries()]);

  return [...staticEntries, ...requestEntries, ...blogEntries];
}
