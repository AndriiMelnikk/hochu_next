import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";
import ProfileContent from "./ProfileContent";

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'PROFILE');
}

export default function ProfilePage() {
  return <ProfileContent />;
}
