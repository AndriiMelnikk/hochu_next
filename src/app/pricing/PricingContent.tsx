'use client';

import { Check } from 'lucide-react';
import { Button } from '@shared/ui/button';
import Link from 'next/link';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';

export default function PricingContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

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
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t('pricing.hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-3xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${
                plan.popular ? 'border-primary scale-105' : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.popularBadge}
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== '0' && (
                    <span className="text-muted-foreground">{plan.currency}</span>
                  )}
                </div>
                <p className="text-muted-foreground mt-1">{plan.period}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, index) => (
                  <div key={index} className="flex items-start gap-3 opacity-50">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-muted-foreground"></div>
                    </div>
                    <span className="text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>

              <Button variant={plan.buttonVariant} className="w-full text-lg py-6" asChild>
                <Link href={routes.REGISTER}>{plan.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('pricing.faq.title')}</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{t('pricing.faq.q1.question')}</h3>
              <p className="text-muted-foreground">{t('pricing.faq.q1.answer')}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{t('pricing.faq.q2.question')}</h3>
              <p className="text-muted-foreground">{t('pricing.faq.q2.answer')}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{t('pricing.faq.q3.question')}</h3>
              <p className="text-muted-foreground">{t('pricing.faq.q3.answer')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
