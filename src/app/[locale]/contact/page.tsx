import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { PAGE_COPY } from '@/locales/page-copy';
import { SeoTextSection } from '@/widgets/app/SeoTextSection';
import ContactContent from './ContactContent';

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'CONTACT');
}

export default async function ContactPage({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return (
    <>
      <ContactContent />
      <SeoTextSection block={PAGE_COPY.contact[locale]} />
    </>
  );
}
