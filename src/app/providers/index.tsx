'use client';

import { AuthProvider } from '@/entities/auth/hooks/useAuth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Toaster } from 'sonner';
import { LinguiProvider } from './LinguiProvider';
import type { Locale } from '@/locales/locale';
import type { Messages } from '@lingui/core';

type ProvidersProps = {
  children: ReactNode;
  locale: Locale;
  messages: Messages;
};

export function Providers({ children, locale, messages }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <LinguiProvider locale={locale} messages={messages}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {children}
          <Toaster position="top-right" richColors closeButton />
        </AuthProvider>
      </QueryClientProvider>
    </LinguiProvider>
  );
}
