import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/app/providers';
import { getLocaleFromHeaders } from '@/locales/locale';
import { defaultMetadata as enMetadata } from '@/locales/en/metadata';
import { defaultMetadata as ukMetadata } from '@/locales/uk/metadata';
import { messages as enMessages } from '@/locales/en/create';
import { messages as ukMessages } from '@/locales/uk/create';
import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

const metadataByLocale = {
  en: enMetadata,
  uk: ukMetadata,
} as const;

const messagesByLocale = {
  en: enMessages,
  uk: ukMessages,
} as const;

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return metadataByLocale[locale];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromHeaders();
  const messages = messagesByLocale[locale];

  return (
    <html lang={locale}>
      <body className={inter.className}>
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
