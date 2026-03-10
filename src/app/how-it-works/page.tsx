import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import HowItWorksContent from './HowItWorksContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'HOW_IT_WORKS');
}

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
