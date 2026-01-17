import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";
import RegisterContent from "./RegisterContent";

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'REGISTER');
}

export default function RegisterPage() {
  return <RegisterContent />;
}
