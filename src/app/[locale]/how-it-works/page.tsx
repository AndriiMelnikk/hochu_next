import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import HowItWorksContent from './HowItWorksContent';

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'HOW_IT_WORKS');
}

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
