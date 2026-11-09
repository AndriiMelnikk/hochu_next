import { Onest } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { Providers } from '@/app/providers';
import { isLocale, locales, type Locale } from '@/locales/locale';
import { getDefaultMetadata } from '@/locales/route-metadata';
import { messages as enMessages } from '@/locales/en/create';
import { messages as ukMessages } from '@/locales/uk/create';
import { AppFrame, SiteHeader, SiteFooter } from '@/ui-v2';
import { Analytics } from '@vercel/analytics/next';
import { GoogleTagManager } from '@next/third-parties/google';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getOrganizationJsonLd, getWebSiteJsonLd } from '@/shared/seo/schemas';
import { gtmId } from '@/shared/config/envVars';

const onest = Onest({ subsets: ['latin', 'cyrillic'] });

const messagesByLocale = {
  en: enMessages,
  uk: ukMessages,
} as const;

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  return getDefaultMetadata(locale);
}

export default async function RootLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const messages = messagesByLocale[locale];

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId={gtmId} />
      <body className={onest.className}>
        <JsonLd data={getOrganizationJsonLd()} />
        <JsonLd data={getWebSiteJsonLd(locale)} />
        <Providers locale={locale} messages={messages}>
          <AppFrame header={<SiteHeader />} footer={<SiteFooter />}>
            {children}
          </AppFrame>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
