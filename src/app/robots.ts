import type { MetadataRoute } from 'next';
import { siteUrl } from '@/shared/config/envVars';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin',
          '/*/admin',
          '/profile$',
          '/*/profile$',
          '/auth/',
          '/*/auth/',
          '/forgot-password',
          '/*/forgot-password',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
