'use client';

import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { Button, Container, PlanCard, SectionHeader } from '@/ui-v2';

/** «Оберіть, як користуватись» — дві картки (покупець / продавець), як тарифи в Upwork. */
const Plans = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const features = (role: 'buyer' | 'seller') =>
    [1, 2, 3, 4].map((n) => t(`common.home.plans.${role}.f${n}`));

  return (
    <section className="ui-v2 bg-gradient-to-b from-v2-hover to-transparent py-16 md:py-24">
      <Container>
        <SectionHeader
          align="center"
          title={t('common.home.plans.title')}
          subtitle={t('common.home.plans.subtitle')}
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <PlanCard
            name={t('common.home.plans.buyer.name')}
            goal={t('common.home.plans.buyer.goal')}
            description={t('common.home.plans.buyer.desc')}
            includes={t('common.home.plans.buyer.includes')}
            features={features('buyer')}
            action={
              <Button asChild variant="secondary" className="h-12 w-full text-base">
                <Link href={routes.CREATE}>{t('common.home.plans.buyer.cta')}</Link>
              </Button>
            }
          />
          <PlanCard
            highlighted
            badge={t('common.home.plans.popular')}
            name={t('common.home.plans.seller.name')}
            goal={t('common.home.plans.seller.goal')}
            description={t('common.home.plans.seller.desc')}
            includes={t('common.home.plans.seller.includes')}
            features={features('seller')}
            action={
              <Button asChild className="h-12 w-full text-base">
                <Link href={routes.REQUEST}>{t('common.home.plans.seller.cta')}</Link>
              </Button>
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Plans;
