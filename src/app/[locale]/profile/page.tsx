import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import ProfileAuth from './ProfileAuth';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'PROFILE');
}

export default function ProfilePage() {
  return <ProfileAuth />;
}
