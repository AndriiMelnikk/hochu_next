import Header from '@/widgets/app/Header';
import Hero from '@/widgets/app/Hero';
import Features from '@/widgets/app/Features';
import HowItWorks from '@/widgets/app/HowItWorks';
import Footer from '@/widgets/app/Footer';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'HOME');
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}
