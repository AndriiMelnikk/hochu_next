import Hero from '@/widgets/app/Hero';
import LatestRequests from '@/widgets/app/LatestRequests';
import Trust from '@/widgets/app/Trust';
import Categories from '@/widgets/app/Categories';
import Plans from '@/widgets/app/Plans';
import Quiz from '@/widgets/app/Quiz';
import Estimate from '@/widgets/app/Estimate';
import Testimonials from '@/widgets/app/Testimonials';
import CtaSection from '@/widgets/app/CtaSection';
import Features from '@/widgets/app/Features';
import HowItWorks from '@/widgets/app/HowItWorks';
import PlatformIntro from '@/widgets/app/PlatformIntro';
import Faq from '@/widgets/app/Faq';
import HomeSwitch from '@/widgets/app/HomeFeed/HomeSwitch';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { HOME_LATEST_REQUESTS_LIMIT, requestService } from '@/entities/request';

/** Головна статична, але «Останні запити» оновлюються кожні 5 хвилин */
export const revalidate = 300;

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
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
    <HomeSwitch>
      <Hero />
      <Trust />
      <Categories />
      <LatestRequests initialData={latestRequests} />
      <Plans />
      <Quiz />
      <HowItWorks />
      <Estimate />
      <Features />
      <Testimonials />
      <PlatformIntro />
      <Faq />
      <CtaSection />
    </HomeSwitch>
  );
}
