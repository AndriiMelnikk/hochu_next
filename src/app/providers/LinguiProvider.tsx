'use client';

import type { ReactNode } from 'react';
import type { Messages } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@/locales/i18n';
import type { Locale } from '@/locales/locale';

type LinguiProviderProps = {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
};

export function LinguiProvider({ locale, messages, children }: LinguiProviderProps) {
  i18n.load(locale, messages);
  i18n.activate(locale);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
