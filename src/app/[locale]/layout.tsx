import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import { Providers } from '@/app/providers';
import { isLocale, locales, type Locale } from '@/locales/locale';
import { getDefaultMetadata } from '@/locales/route-metadata';
import { messages as enMessages } from '@/locales/en/create';
import { messages as ukMessages } from '@/locales/uk/create';
import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import { Analytics } from '@vercel/analytics/next';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getOrganizationJsonLd, getWebSiteJsonLd } from '@/shared/seo/schemas';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

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
      <body className={inter.className}>
        <JsonLd data={getOrganizationJsonLd()} />
        <JsonLd data={getWebSiteJsonLd(locale)} />
        <Providers locale={locale} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-24 pb-12">{children}</main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
