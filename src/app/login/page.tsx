import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import LoginContent from './LoginContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'LOGIN');
}

export default function LoginPage() {
  return <LoginContent />;
}
