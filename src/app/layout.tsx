import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { getLocaleFromHeaders } from "@/locales/locale";
import { defaultMetadata as enMetadata } from "@/locales/en/metadata";
import { defaultMetadata as ukMetadata } from "@/locales/uk/metadata";

const inter = Inter({ subsets: ["latin"] });

const metadataByLocale = {
  en: enMetadata,
  uk: ukMetadata,
} as const;

const locale = await getLocaleFromHeaders();

export async function generateMetadata() {
  return metadataByLocale[locale];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

