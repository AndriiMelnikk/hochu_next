export const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://fc0a-93-170-162-7.ngrok-free.app';

export const LS_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  LOCALE: 'locale',
} as const;
