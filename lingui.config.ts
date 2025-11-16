import type { LinguiConfig } from "@lingui/conf";

const config: LinguiConfig = {
  locales: ["uk", "en"],
  sourceLocale: "uk",
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
};

export default config;

