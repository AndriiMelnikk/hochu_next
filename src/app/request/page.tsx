import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import RequestContent from './RequestContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'BROWSE');
}

export default function RequestPage() {
  return <RequestContent />;
}
