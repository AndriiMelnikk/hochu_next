import Hero from '@/widgets/app/Hero';
import LatestRequests from '@/widgets/app/LatestRequests';
import Features from '@/widgets/app/Features';
import HowItWorks from '@/widgets/app/HowItWorks';
import PlatformIntro from '@/widgets/app/PlatformIntro';
import Faq from '@/widgets/app/Faq';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { HOME_LATEST_REQUESTS_LIMIT, requestService } from '@/entities/request';

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'HOME');
}

async function getLatestRequests() {
  try {
    return await requestService.get({ page: 1, pageSize: HOME_LATEST_REQUESTS_LIMIT });
  } catch (error) {
    console.error('Failed to prefetch latest requests:', error);
    return undefined;
  }
}

export default async function HomePage() {
  const latestRequests = await getLatestRequests();

  return (
    <>
      <Hero />
      <LatestRequests initialData={latestRequests} />
      <Features />
      <HowItWorks />
      <PlatformIntro />
      <Faq />
    </>
  );
}
