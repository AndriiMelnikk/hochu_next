'use client';

import { useLingui } from '@lingui/react';

import { useMe } from '@entities/user';
import { AuthRequired } from '@features/auth';
import { CreateRequestForm } from '@features/requests';
import { BuyerProfileRequired } from '@features/user';
import { LoadingState } from '@/ui-v2';

export default function CreateRequestContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: user, isLoading, isError } = useMe();

  const renderContent = () => {
    if (isLoading) {
      return <LoadingState className="min-h-[30vh]" />;
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
      <div className="bg-v2-surface rounded-v2-2xl  p-8 border border-v2-border">
        <CreateRequestForm />

        <div className="bg-v2-hover rounded-v2-lg p-4 border border-v2-border mt-6">
          <p className="text-sm text-v2-ink">
            <strong>{t('request.create.tipLabel')}</strong> {t('request.create.tipText')}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-[550] mb-4">
          {t('request.create.titlePrefix')}{' '}
          <span className="text-v2-primary">{t('request.create.titleEmphasis')}</span>
        </h1>
        <p className="text-xl text-v2-muted">{t('request.create.subtitle')}</p>
      </div>

      {renderContent()}
    </div>
  );
}
