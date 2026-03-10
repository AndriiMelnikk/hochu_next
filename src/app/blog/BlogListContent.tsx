'use client';

import { useLingui } from '@lingui/react';
import { Card } from '@shared/ui/card';
import Link from 'next/link';
import { routes } from '@/app/router/routes';

export default function BlogListContent() {
  const { i18n } = useLingui();
  const t = (id: string, values?) => i18n._(id, values);

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{t('blog.list.title')}</h1>
      {/* <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{t('blog.list.placeholder.title')}</h2>
          <p className="text-muted-foreground mb-4">{t('blog.list.placeholder.description')}</p>
          <Link href={`${routes.BLOG}/1`} className="text-primary hover:underline">
            {t('blog.list.readMore')}
          </Link>
        </Card>
      </div> */}
    </div>
  );
}
