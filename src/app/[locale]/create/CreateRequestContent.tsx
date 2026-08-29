'use client';

import { useLingui } from '@lingui/react';

import { useMe } from '@entities/user';
import { AuthRequired } from '@features/auth';
import { CreateRequestForm } from '@features/requests';
import { BuyerProfileRequired } from '@features/user';
import { Loading } from '@shared/ui/loading';

export default function CreateRequestContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: user, isLoading, isError } = useMe();

  const renderContent = () => {
    if (isLoading) {
      return <Loading variant="full-page" />;
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
      return <BuyerProfileRequired />;
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
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {t('request.create.titlePrefix')}{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {t('request.create.titleEmphasis')}
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">{t('request.create.subtitle')}</p>
      </div>

      {renderContent()}
    </div>
  );
}
