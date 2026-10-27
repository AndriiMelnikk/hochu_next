import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { messages as enMessages } from '@/locales/en/terms';
import { messages as ukMessages } from '@/locales/uk/terms';

const messagesByLocale = {
  en: enMessages,
  uk: ukMessages,
} as const;

export default async function TermsLayout({
  children,
  params,
}: { children: ReactNode } & LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);

  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      {children}
    </LinguiProvider>
  );
}
