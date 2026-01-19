import { defineConfig } from '@lingui/cli';

export default defineConfig({
  locales: ['uk', 'en'],
  sourceLocale: 'uk',
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
});
