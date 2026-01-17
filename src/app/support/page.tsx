import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";
import SupportContent from "./SupportContent";

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'SUPPORT');
}

export default function SupportPage() {
  return <SupportContent />;
}
