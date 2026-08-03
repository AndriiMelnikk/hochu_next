import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromHeaders } from '@/locales/locale';
import { messages as enMessages } from '@/locales/en/contact';
import { messages as ukMessages } from '@/locales/uk/contact';

const messagesByLocale = {
  en: enMessages,
  uk: ukMessages,
} as const;

export default async function ContactLayout({ children }: { children: ReactNode }) {
  const locale = await getLocaleFromHeaders();

  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      {children}
    </LinguiProvider>
  );
}
