import { redirect } from 'next/navigation';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { localizeHref } from '@/locales/config';
import { routes } from '@/app/router/routes';

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'ADMIN');
}

export default async function AdminPage({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  redirect(localizeHref(locale, routes.ADMIN_ANALYTICS));
}
