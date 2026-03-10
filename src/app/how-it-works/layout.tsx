import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromHeaders } from '@/locales/locale';

import { messages as enMessages } from '@/locales/en/how-it-works';
import { messages as ukMessages } from '@/locales/uk/how-it-works';

const messagesByLocale = {
  en: enMessages,
  uk: ukMessages,
} as const;

export default async function HowItWorksLayout({ children }: { children: ReactNode }) {
  const locale = await getLocaleFromHeaders();

  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      {children}
    </LinguiProvider>
  );
}
