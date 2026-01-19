import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import BrowseContent from './BrowseContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'BROWSE');
}

export default function BrowsePage() {
  return <BrowseContent />;
}
