'use client';

import { useLingui } from '@lingui/react';
import { CreateRequestForm } from '@/features/requests';
import { useMe } from '@/entities/user/hooks/useUser';
import { Button } from '@/shared/ui/button';
import { routes } from '@/app/router/routes';
import Link from 'next/link';
import { Loader2, UserPlus, UserCircle } from 'lucide-react';
import { AuthRequired } from '@/features/auth';

export default function CreateRequestContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: user, isLoading, isError } = useMe();

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">{t('request.create.categoriesLoading')}</p>
        </div>
      );
    }

    if (isError || !user) {
      return (
        <AuthRequired
          title={t('request.create.authRequired.title')}
          description={t('request.create.authRequired.description')}
        />
      );
    }

    if (user.profile.type !== 'buyer') {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-primary/10 p-6 rounded-full mb-6">
            <UserCircle className="h-16 w-16 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {t('request.create.buyerProfileRequired.title')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            {t('request.create.buyerProfileRequired.description')}
          </p>
          <Link href={routes.PROFILE}>
            <Button size="lg" className="gap-2">
              <UserPlus className="h-5 w-5" />
              {t('request.create.buyerProfileRequired.button')}
            </Button>
          </Link>
        </div>
      );
    }

    return (
      <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
        <CreateRequestForm />

        <div className="bg-accent/30 rounded-lg p-4 border border-accent mt-6">
          <p className="text-sm text-accent-foreground">
            <strong>{t('request.create.tipLabel')}</strong> {t('request.create.tipText')}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {t('request.create.titlePrefix')}{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {t('request.create.titleEmphasis')}
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">{t('request.create.subtitle')}</p>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
}
