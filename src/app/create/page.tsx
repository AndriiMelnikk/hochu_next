import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";
import CreateRequestContent from "./CreateRequestContent";

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'CREATE');
}

export default function CreateRequestPage() {
  return <CreateRequestContent />;
}
