'use client';

import { usePathname } from 'next/navigation';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { buildAuthHref, getReturnUrlFromLocation } from '@/features/auth';
import { useLingui } from '@lingui/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Container,
  PageHero,
  PlanCard,
} from '@/ui-v2';

export default function PricingContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const pathname = usePathname();
  const registerHref = buildAuthHref(routes.REGISTER, getReturnUrlFromLocation(pathname));

  const plans = [
    {
      name: t('pricing.plans.free.name'),
      price: t('pricing.plans.free.price'),
      period: t('pricing.plans.free.period'),
      currency: t('pricing.plans.free.currency'),
      description: t('pricing.plans.free.description'),
      features: [
        t('pricing.plans.free.features.1'),
        t('pricing.plans.free.features.2'),
        t('pricing.plans.free.features.3'),
        t('pricing.plans.free.features.4'),
        t('pricing.plans.free.features.5'),
      ],
      limitations: [
        t('pricing.plans.free.limitations.1'),
        t('pricing.plans.free.limitations.2'),
        t('pricing.plans.free.limitations.3'),
      ],
      buttonText: t('pricing.plans.free.buttonText'),
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: t('pricing.plans.pro.name'),
      price: t('pricing.plans.pro.price'),
      period: t('pricing.plans.pro.period'),
      currency: t('pricing.plans.pro.currency'),
      description: t('pricing.plans.pro.description'),
      features: [
        t('pricing.plans.pro.features.1'),
        t('pricing.plans.pro.features.2'),
        t('pricing.plans.pro.features.3'),
        t('pricing.plans.pro.features.4'),
        t('pricing.plans.pro.features.5'),
        t('pricing.plans.pro.features.6'),
        t('pricing.plans.pro.features.7'),
        t('pricing.plans.pro.features.8'),
      ],
      limitations: [],
      buttonText: t('pricing.plans.pro.buttonText'),
      buttonVariant: 'default' as const,
      popular: true,
      popularBadge: t('pricing.plans.pro.popularBadge'),
    },
  ];

  return (
    <div className="ui-v2">
      <Container className="py-6 md:py-8">
        <PageHero title={t('pricing.hero.title')} subtitle={t('pricing.hero.subtitle')} />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              highlighted={plan.popular}
              badge={plan.popular ? plan.popularBadge : undefined}
              name={plan.name}
              goal={plan.description}
              description={
                <span className="flex items-baseline gap-2">
                  <span className="text-5xl font-[450] text-v2-ink">{plan.price}</span>
                  {plan.price !== '0' && <span>{plan.currency}</span>}
                  <span>{plan.period}</span>
                </span>
              }
              features={[
                ...plan.features,
                ...plan.limitations.map((l) => (
                  <span key={l} className="opacity-60">
                    {l}
                  </span>
                )),
              ]}
              action={
                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="h-12 w-full text-base"
                  asChild
                >
                  <Link href={registerHref}>{plan.buttonText}</Link>
                </Button>
              }
            />
          ))}
        </div>

        <section className="mx-auto my-16 max-w-3xl">
          <h2 className="mb-8 text-4xl font-[450] tracking-tight">{t('pricing.faq.title')}</h2>
          <Accordion type="single" collapsible>
            {(['q1', 'q2', 'q3'] as const).map((q) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger className="text-left text-lg">
                  {t(`pricing.faq.${q}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-v2-muted">
                  {t(`pricing.faq.${q}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </Container>
    </div>
  );
}
