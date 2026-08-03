import type { Locale } from '@/locales/config';
import { siteUrl } from '@/shared/config/envVars';

const SITE_NAME = 'Shukayu';

export function getOrganizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/favicon.ico`,
    sameAs: [],
  };
}

export function getWebSiteJsonLd(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${siteUrl}/`,
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/${locale}/request?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export type BreadcrumbJsonLdItem = {
  name: string;
  /** Абсолютний або відносний (від кореня сайту) URL; останній елемент може бути без URL */
  url?: string;
};

export function getBreadcrumbListJsonLd(items: BreadcrumbJsonLdItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url
        ? { item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}` }
        : {}),
    })),
  };
}

export type BlogPostingJsonLdInput = {
  title: string;
  description?: string;
  image?: string;
  author?: string;
  datePublished?: string;
  url: string;
  locale: Locale;
};

export function getBlogPostingJsonLd(post: BlogPostingJsonLdInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    ...(post.description ? { description: post.description } : {}),
    ...(post.image ? { image: [post.image] } : {}),
    ...(post.author ? { author: { '@type': 'Person', name: post.author } } : {}),
    ...(post.datePublished ? { datePublished: post.datePublished } : {}),
    inLanguage: post.locale,
    mainEntityOfPage: post.url,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: `${siteUrl}/`,
    },
  };
}

export type FaqJsonLdItem = {
  question: string;
  answer: string;
};

export function getFaqPageJsonLd(items: FaqJsonLdItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
