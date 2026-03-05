export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://hochu-nest.vercel.app';

export const LS_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  LOCALE: 'locale',
} as const;
