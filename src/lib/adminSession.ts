/**
 * Сесія адмінки: підписаний HMAC-токен у httpOnly-cookie.
 * Працює і в Node-роутах, і в proxy (лише Web Crypto, без Node-модулів).
 * Підпис — AUTH_SECRET; облікові дані — ADMIN_LOGIN / ADMIN_PASSWORD (лише сервер).
 */
export const ADMIN_COOKIE = 'admin_session';
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8; // 8 годин

const enc = new TextEncoder();

const toB64Url = (bytes: ArrayBuffer | Uint8Array) =>
  btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const secret = () => process.env.AUTH_SECRET || '';

async function sign(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  return toB64Url(await crypto.subtle.sign('HMAC', key, enc.encode(data)));
}

/** Порівняння за сталий час (через хеші однакової довжини). */
export async function safeEqual(a: string, b: string): Promise<boolean> {
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(a)),
    crypto.subtle.digest('SHA-256', enc.encode(b)),
  ]);
  const x = new Uint8Array(ha);
  const y = new Uint8Array(hb);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

export async function createAdminToken(login: string): Promise<string> {
  const payload = toB64Url(
    enc.encode(JSON.stringify({ u: login, exp: Date.now() + ADMIN_SESSION_MAX_AGE * 1000 })),
  );
  return `${payload}.${await sign(payload)}`;
}

export async function verifyAdminToken(token: string | undefined): Promise<boolean> {
  if (!token || !secret()) return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;
  if (!(await safeEqual(signature, await sign(payload)))) return false;
  try {
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    const { exp } = JSON.parse(json) as { exp?: number };
    return typeof exp === 'number' && exp > Date.now();
  } catch {
    return false;
  }
}

export const adminCookieOptions = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
};
