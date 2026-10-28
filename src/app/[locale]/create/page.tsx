import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { PAGE_COPY } from '@/locales/page-copy';
import { SeoTextSection } from '@/widgets/app/SeoTextSection';
import CreateRequestContent from './CreateRequestContent';

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'CREATE');
}

export default async function CreateRequestPage({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return (
    <>
      <CreateRequestContent />
      <SeoTextSection block={PAGE_COPY.create[locale]} />
    </>
  );
}
