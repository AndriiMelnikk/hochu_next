export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shukayu-nest.vercel.app';

/** Канонічний публічний домен сайту (для canonical, hreflang, sitemap, OG) */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shukayu.com.ua';

export const LS_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  LOCALE: 'locale',
} as const;
