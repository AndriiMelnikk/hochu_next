import { routes } from '@/app/router/routes';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';

/** Кабінет приватний: noindex задано в NOINDEX_ROUTES. */
export async function dashboardMetadata(
  { params }: LocaleRouteProps,
  route:
    | 'DASHBOARD'
    | 'DASHBOARD_NOTIFICATIONS'
    | 'DASHBOARD_PROFILES'
    | 'DASHBOARD_REVIEWS'
    | 'DASHBOARD_SETTINGS',
) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, route, routes[route]);
}
