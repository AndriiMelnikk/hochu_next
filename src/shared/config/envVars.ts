export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shukayu-nest.vercel.app';

/** Канонічний публічний домен сайту (для canonical, hreflang, sitemap, OG) */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shukayu.com.ua';

/** Логотип для JSON-LD (PNG ≥112×112); за замовчуванням генерується маршрутом /logo.png */
export const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || `${siteUrl}/logo.png`;

/** Офіційні профілі в соцмережах для Organization.sameAs (URL через кому) */
const DEFAULT_SOCIAL_PROFILES = [
  'https://www.instagram.com/shukayu.com.ua/',
  'https://www.facebook.com/profile.php?id=61557142326871',
  'https://www.tiktok.com/@shukayu.com.ua',
].join(',');

export const socialProfiles = (process.env.NEXT_PUBLIC_SOCIAL_PROFILES || DEFAULT_SOCIAL_PROFILES)
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

/** Google Tag Manager container ID */
export const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-MVLLHXMP';

export const LS_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  LOCALE: 'locale',
} as const;
