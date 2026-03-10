'use client';

import Link from 'next/link';
import { Button } from '@shared/ui/button';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';

export default function NotFoundPage() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('common.notFound.code')}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t('common.notFound.title')}</p>
        <p className="mb-6 text-sm text-muted-foreground">{t('common.notFound.description')}</p>
        <Link href={routes.HOME}>
          <Button>{t('common.notFound.backToHome')}</Button>
        </Link>
      </div>
    </div>
  );
}
