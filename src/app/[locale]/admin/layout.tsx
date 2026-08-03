import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromHeaders } from '@/locales/locale';
import { messages as enMessages } from '@/locales/en/admin';
import { messages as ukMessages } from '@/locales/uk/admin';

const messagesByLocale = {
  en: enMessages,
  uk: ukMessages,
} as const;

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const locale = await getLocaleFromHeaders();

  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      {children}
    </LinguiProvider>
  );
}
