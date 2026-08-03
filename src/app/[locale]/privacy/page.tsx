import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import PrivacyContent from './PrivacyContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'PRIVACY');
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
