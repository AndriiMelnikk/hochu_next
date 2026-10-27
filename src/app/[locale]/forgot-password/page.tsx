import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import ForgotPasswordContent from './ForgotPasswordContent';

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'FORGOT_PASSWORD');
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordContent />;
}
