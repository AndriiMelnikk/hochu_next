'use client';

import HowItWorksWidget from '@/widgets/app/HowItWorks';
import { CreateRequestButton } from '@/features/requests';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { UserCircle, Store, CheckCircle2 } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { Button } from '@/ui-v2';

export default function HowItWorksContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
      {/* Hero Section */}
      <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6 relative z-10 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="mb-6 inline-flex h-8 items-center rounded-v2-pill bg-v2-hover px-4 text-sm font-semibold text-v2-primary">
            {t('how-it-works.hero.badge')}
          </span>
          <h1 className="text-4xl md:text-5xl font-[550] mb-6">
            {t('how-it-works.hero.title.prefix')}{' '}
            <span className="text-v2-primary">{t('how-it-works.hero.title.suffix')}</span>
          </h1>
          <p className="text-lg md:text-xl text-v2-muted">{t('how-it-works.hero.subtitle')}</p>
        </div>
      </div>

      {/* Process Section */}
      <HowItWorksWidget />

      {/* For Buyers & Sellers */}
      <section className="py-16 bg-v2-surface-subtle">
        <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Buyers */}
            <div className="bg-v2-surface rounded-v2-xl p-8 border-2 border-v2-border hover:border-v2-primary transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-v2-primary text-v2-on-primary p-3 rounded-v2-lg mr-4">
                  <UserCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-[550]">{t('how-it-works.buyers.title')}</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-v2-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.buyers.time-saving.title')}
                    </h4>
                    <p className="text-v2-muted text-sm">
                      {t('how-it-works.buyers.time-saving.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-v2-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.buyers.many-offers.title')}
                    </h4>
                    <p className="text-v2-muted text-sm">
                      {t('how-it-works.buyers.many-offers.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-v2-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.buyers.comparison.title')}
                    </h4>
                    <p className="text-v2-muted text-sm">
                      {t('how-it-works.buyers.comparison.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-v2-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.buyers.security.title')}
                    </h4>
                    <p className="text-v2-muted text-sm">
                      {t('how-it-works.buyers.security.description')}
                    </p>
                  </div>
                </div>
              </div>

              <CreateRequestButton className="w-full" />
            </div>

            {/* For Sellers */}
            <div className="bg-v2-surface rounded-v2-xl p-8 border-2 border-v2-border hover:border-v2-primary transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-v2-surface-muted text-v2-ink p-3 rounded-v2-lg mr-4">
                  <Store className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-[550]">{t('how-it-works.sellers.title')}</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-v2-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.sellers.active-search.title')}
                    </h4>
                    <p className="text-v2-muted text-sm">
                      {t('how-it-works.sellers.active-search.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-v2-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.sellers.ready-clients.title')}
                    </h4>
                    <p className="text-v2-muted text-sm">
                      {t('how-it-works.sellers.ready-clients.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-v2-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.sellers.direct-contact.title')}
                    </h4>
                    <p className="text-v2-muted text-sm">
                      {t('how-it-works.sellers.direct-contact.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-v2-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.sellers.reputation.title')}
                    </h4>
                    <p className="text-v2-muted text-sm">
                      {t('how-it-works.sellers.reputation.description')}
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-v2-surface-muted hover:bg-v2-surface-muted" asChild>
                <Link href={routes.REQUEST}>{t('how-it-works.sellers.view-requests-button')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
          <div className="bg-v2-primary rounded-v2-2xl p-12 text-center text-v2-on-primary  max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-[550] mb-4">{t('how-it-works.cta.title')}</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">{t('how-it-works.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CreateRequestButton />
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-2 border-white text-white hover:text-white"
                asChild
              >
                <Link href={routes.REQUEST}>{t('how-it-works.cta.become-seller-button')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
