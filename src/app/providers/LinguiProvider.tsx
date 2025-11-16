"use client";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { ReactNode, useEffect, useState } from "react";

interface LinguiProviderProps {
  children: ReactNode;
}

export const LinguiProvider = ({ children }: LinguiProviderProps) => {
  const [locale, setLocale] = useState("uk");

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        if (locale === "uk") {
          const { messages } = await import("@/locales/uk/messages");
          i18n.load(locale, messages);
        } else if (locale === "en") {
          const { messages } = await import("@/locales/en/messages");
          i18n.load(locale, messages);
        }
        i18n.activate(locale);
      } catch (error) {
        console.warn(`Failed to load translations for locale: ${locale}`, error);
      }
    };

    loadTranslations();
  }, [locale]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

