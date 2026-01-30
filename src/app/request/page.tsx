import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import RequestContent from './RequestContent';
import { routes } from '../router/routes';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, routes.REQUEST as keyof typeof routes);
}

export default function RequestPage() {
  return <RequestContent />;
}
