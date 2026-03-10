'use client';

import HowItWorksWidget from '@/widgets/app/HowItWorks';
import { Button } from '@shared/ui/button';
import { HeroBadge } from '@shared/ui/hero-badge';
import { CreateRequestButton } from '@/features/requests';
import Link from 'next/link';
import { routes } from '@/app/router/routes';
import { UserCircle, Store, CheckCircle2 } from 'lucide-react';
import { useLingui } from '@lingui/react';

export default function HowItWorksContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <HeroBadge icon="📖" className="mb-6">
            {t('how-it-works.hero.badge')}
          </HeroBadge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('how-it-works.hero.title.prefix')}{' '}
            <span className="text-primary">{t('how-it-works.hero.title.suffix')}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t('how-it-works.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Process Section */}
      <HowItWorksWidget />

      {/* For Buyers & Sellers */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Buyers */}
            <div className="bg-card rounded-xl p-8 border-2 border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                  <UserCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold">{t('how-it-works.buyers.title')}</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.buyers.time-saving.title')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('how-it-works.buyers.time-saving.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.buyers.many-offers.title')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('how-it-works.buyers.many-offers.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.buyers.comparison.title')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('how-it-works.buyers.comparison.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.buyers.security.title')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('how-it-works.buyers.security.description')}
                    </p>
                  </div>
                </div>
              </div>

              <CreateRequestButton className="w-full" />
            </div>

            {/* For Sellers */}
            <div className="bg-card rounded-xl p-8 border-2 border-border hover:border-primary transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg mr-4">
                  <Store className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold">{t('how-it-works.sellers.title')}</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.sellers.active-search.title')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('how-it-works.sellers.active-search.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.sellers.ready-clients.title')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('how-it-works.sellers.ready-clients.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.sellers.direct-contact.title')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('how-it-works.sellers.direct-contact.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t('how-it-works.sellers.reputation.title')}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t('how-it-works.sellers.reputation.description')}
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg" asChild>
                <Link href={routes.REQUEST}>{t('how-it-works.sellers.view-requests-button')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground shadow-red max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('how-it-works.cta.title')}</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">{t('how-it-works.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CreateRequestButton />
              <Button
                size="xl"
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
