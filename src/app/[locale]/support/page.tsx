import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { PAGE_COPY } from '@/locales/page-copy';
import { SeoTextSection } from '@/widgets/app/SeoTextSection';
import SupportContent from './SupportContent';

export async function generateMetadata({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  return getMetadataForRoute(locale, 'SUPPORT');
}

export default async function SupportPage({ params }: LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);
  const { h1, intro, ...rest } = PAGE_COPY.support[locale];
  return (
    <>
      <header className="mx-auto w-full max-w-[1240px] px-4 md:px-6 max-w-4xl pt-4">
        <h1 className="text-4xl md:text-5xl font-[550] mb-4">{h1}</h1>
        <p className="text-lg text-v2-muted">{intro}</p>
      </header>
      <SeoTextSection block={rest} />
      <SupportContent />
    </>
  );
}
