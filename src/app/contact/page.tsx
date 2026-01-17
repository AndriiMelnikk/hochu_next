import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";
import ContactContent from "./ContactContent";

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'CONTACT');
}

export default function ContactPage() {
  return <ContactContent />;
}
