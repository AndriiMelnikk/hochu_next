import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromHeaders } from '@/locales/locale';
import { messages as enMessages } from '@/locales/en/support';
import { messages as ukMessages } from '@/locales/uk/support';

const messagesByLocale = {
  en: enMessages,
  uk: ukMessages,
} as const;

export default async function SupportLayout({ children }: { children: ReactNode }) {
  const locale = await getLocaleFromHeaders();

  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      {children}
    </LinguiProvider>
  );
}
