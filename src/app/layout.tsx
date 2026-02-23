import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/app/providers';
import { getLocaleFromHeaders } from '@/locales/locale';
import { defaultMetadata as enMetadata } from '@/locales/en/metadata';
import { defaultMetadata as ukMetadata } from '@/locales/uk/metadata';
import { messages as enMessages } from '@/locales/en/create';
import { messages as ukMessages } from '@/locales/uk/create';

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
        <Providers locale={locale} messages={messages}>{children}</Providers>
      </body>
    </html>
  );
}
