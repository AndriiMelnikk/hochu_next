import { redirect } from 'next/navigation';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { localizeHref } from '@/locales/config';
import { routes } from '@/app/router/routes';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'ADMIN');
}

export default async function AdminPage() {
  const locale = await getLocaleFromHeaders();
  redirect(localizeHref(locale, routes.ADMIN_ANALYTICS));
}
