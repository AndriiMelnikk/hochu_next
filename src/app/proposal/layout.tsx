import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromHeaders } from '@/locales/locale';
import { messages as enCreateMessages } from '@/locales/en/create';
import { messages as ukCreateMessages } from '@/locales/uk/create';
import { messages as enProposalMessages } from '@/locales/en/proposal';
import { messages as ukProposalMessages } from '@/locales/uk/proposal';

const messagesByLocale = {
  en: { ...enCreateMessages, ...enProposalMessages },
  uk: { ...ukCreateMessages, ...ukProposalMessages },
} as const;

export default async function ProposalLayout({ children }: { children: ReactNode }) {
  const locale = await getLocaleFromHeaders();

  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      {children}
    </LinguiProvider>
  );
}
