import type { MetadataRoute } from 'next';
import { siteUrl } from '@/shared/config/envVars';

const DISALLOW = [
  '/api/',
  '/admin',
  '/*/admin',
  '/profile$',
  '/*/profile$',
  '/auth/',
  '/*/auth/',
  '/forgot-password',
  '/*/forgot-password',
];

/** Явні правила для AI-ботів (seo2.txt) — дозволяємо індексацію публічного контенту */
const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'Google-Extended',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
