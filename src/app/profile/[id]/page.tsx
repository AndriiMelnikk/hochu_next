import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import ProfileContent from './ProfileContent';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  // We could potentially fetch user name here to dynamic metadata
  return getMetadataForRoute(locale, 'PROFILE');
}

export default function ProfileIdPage() {
  return <ProfileContent />;
}
