'use client';

import { useLingui } from '@lingui/react';
import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import { CreateRequestForm } from '@/features/requests';

export default function CreateRequestContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
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

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
            <CreateRequestForm />

            <div className="bg-accent/30 rounded-lg p-4 border border-accent mt-6">
              <p className="text-sm text-accent-foreground">
                <strong>{t('request.create.tipLabel')}</strong> {t('request.create.tipText')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
