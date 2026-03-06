import Hero from '@/widgets/app/Hero';
import Features from '@/widgets/app/Features';
import HowItWorks from '@/widgets/app/HowItWorks';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'HOME');
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
    </>
  );
}
