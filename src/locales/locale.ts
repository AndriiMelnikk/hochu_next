import { headers } from "next/headers";

export type Locale = "en" | "uk";

export const defaultLocale: Locale = "uk";

export function resolveLocale(acceptLanguageHeader?: string): Locale {
  if (!acceptLanguageHeader) {
    return defaultLocale;
  }

  const locales = acceptLanguageHeader
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean) as string[];

  if (locales.some((locale) => locale.startsWith("uk"))) {
    return "uk";
  }

  if (locales.some((locale) => locale.startsWith("en"))) {
    return "en";
  }

  return defaultLocale;
}

export async function getLocaleFromHeaders(): Promise<Locale> {
  try {
    const acceptLanguage = (await headers()).get("accept-language") ?? "";
    return resolveLocale(acceptLanguage);
  } catch {
    return defaultLocale;
  }
}
