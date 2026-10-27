import type { Locale } from '@/locales/config';
import { logoUrl, siteUrl, socialProfiles } from '@/shared/config/envVars';

const SITE_NAME = 'Shukayu';

export function getOrganizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${siteUrl}/`,
    logo: logoUrl,
    sameAs: socialProfiles,
  };
}

export function getWebSiteJsonLd(locale: Locale): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${siteUrl}/`,
    inLanguage: locale,
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
      logo: { '@type': 'ImageObject', url: logoUrl },
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

export type ProfilePageJsonLdInput = {
  name: string;
  url: string;
  image?: string | null;
  location?: string | null;
  rating?: number;
  reviewsCount?: number;
  memberSince?: string;
  locale: Locale;
};

export function getProfilePageJsonLd(profile: ProfilePageJsonLdInput): Record<string, unknown> {
  const hasRating = (profile.reviewsCount ?? 0) > 0 && (profile.rating ?? 0) > 0;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    inLanguage: profile.locale,
    ...(profile.memberSince ? { dateCreated: profile.memberSince } : {}),
    mainEntity: {
      '@type': 'Person',
      name: profile.name,
      url: profile.url,
      ...(profile.image ? { image: profile.image } : {}),
      ...(profile.location
        ? { address: { '@type': 'PostalAddress', addressLocality: profile.location } }
        : {}),
      ...(hasRating
        ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: profile.rating,
              reviewCount: profile.reviewsCount,
              bestRating: 5,
              worstRating: 1,
            },
          }
        : {}),
    },
  };
}
