'use client';

import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { Messages } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@/locales/i18n';
import type { Locale } from '@/locales/locale';
import { compileMessage } from '@lingui/message-utils/compileMessage';

type LinguiProviderProps = {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
};

export function LinguiProvider({ locale, messages, children }: LinguiProviderProps) {
  const compiledMessages = useMemo(() => {
    const compiled: Messages = {};
    for (const key in messages) {
      const msg = messages[key];
      if (typeof msg === 'string') {
        try {
          compiled[key] = compileMessage(msg);
        } catch (e) {
          console.warn(`Failed to compile message: ${key}`, e);
          compiled[key] = msg;
        }
      } else {
        compiled[key] = msg;
      }
    }
    return compiled;
  }, [messages]);

  i18n.load(locale, compiledMessages);
  i18n.activate(locale);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
