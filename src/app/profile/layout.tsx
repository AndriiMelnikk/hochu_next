import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromHeaders } from '@/locales/locale';
import { messages as enMessages } from '@/locales/en/create';
import { messages as ukMessages } from '@/locales/uk/create';
import { messages as enProfileMessages } from '@/locales/en/profile';
import { messages as ukProfileMessages } from '@/locales/uk/profile';

const messagesByLocale = {
  en: { ...enMessages, ...enProfileMessages },
  uk: { ...ukMessages, ...ukProfileMessages },
} as const;

export default async function ProfileLayout({ children }: { children: ReactNode }) {
  const locale = await getLocaleFromHeaders();

  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      {children}
    </LinguiProvider>
  );
}
