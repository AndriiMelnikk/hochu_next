import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";
import PricingContent from "./PricingContent";

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'PRICING');
}

export default function PricingPage() {
  return <PricingContent />;
}
