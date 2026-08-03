import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import ForgotPasswordContent from './ForgotPasswordContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'FORGOT_PASSWORD');
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordContent />;
}
