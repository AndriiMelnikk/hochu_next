import type { Metadata } from "next";

import type { Locale } from "@/locales/locale";
import { defaultMetadata as enDefault, routeMetadata as enRoutes } from "@/locales/en/metadata";
import { defaultMetadata as ukDefault, routeMetadata as ukRoutes } from "@/locales/uk/metadata";
import { routes } from "@/app/router/routes";

const metadataByLocale = {
  en: {
    default: enDefault,
    routes: enRoutes,
  },
  uk: {
    default: ukDefault,
    routes: ukRoutes,
  },
} as const;

export function getMetadataForRoute(  locale: Locale,
route: keyof typeof routes): Metadata {
  const metadataSet = metadataByLocale[locale];
  const routeMetadata = metadataSet.routes[route];

  if (!routeMetadata) {
    return metadataSet.default;
  }

  return {
    ...metadataSet.default,
    ...routeMetadata,
  };
}
