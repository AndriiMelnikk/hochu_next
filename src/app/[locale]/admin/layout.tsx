import type { ReactNode } from 'react';
import { LinguiProvider } from '@/app/providers/LinguiProvider';
import { getLocaleFromParams, type LocaleRouteProps } from '@/locales/locale';
import { messages as enMessages } from '@/locales/en/admin';
import { messages as ukMessages } from '@/locales/uk/admin';
import { AdminShell } from '@/widgets/admin/AdminShell';

const messagesByLocale = {
  en: enMessages,
  uk: ukMessages,
} as const;

export default async function AdminLayout({
  children,
  params,
}: { children: ReactNode } & LocaleRouteProps) {
  const locale = await getLocaleFromParams(params);

  return (
    <LinguiProvider locale={locale} messages={messagesByLocale[locale]}>
      <AdminShell>{children}</AdminShell>
    </LinguiProvider>
  );
}
