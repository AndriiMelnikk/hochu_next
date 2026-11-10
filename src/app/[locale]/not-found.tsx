'use client';

import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';
import { Button } from '@/ui-v2';

export default function NotFoundPage() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-v2-surface-subtle">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-[550]">{t('common.notFound.code')}</h1>
        <p className="mb-4 text-xl text-v2-muted">{t('common.notFound.title')}</p>
        <p className="mb-6 text-sm text-v2-muted">{t('common.notFound.description')}</p>
        <Link href={routes.HOME}>
          <Button>{t('common.notFound.backToHome')}</Button>
        </Link>
      </div>
    </div>
  );
}
