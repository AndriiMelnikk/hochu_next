'use client';

import { useLingui } from '@lingui/react';

import { Container, Heading, Section } from '@/ui-v2';

const STEPS = ['step1', 'step2', 'step3', 'step4'] as const;

const HowItWorks = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-2xl">
          <Heading level="h2" as="h2" className="mb-3">
            {t('common.home.howItWorks.title.prefix')}{' '}
            <span className="text-v2-primary">{t('common.home.howItWorks.title.emphasis')}</span>?
          </Heading>
          <p className="text-lg text-v2-muted">{t('common.home.howItWorks.subtitle')}</p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step} className="rounded-v2-2xl border border-v2-border p-6">
              <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-v2-primary text-base font-semibold text-v2-on-primary">
                {i + 1}
              </span>
              <Heading level="h4" as="h3" className="mb-2">
                {t(`common.home.howItWorks.${step}.title`)}
              </Heading>
              <p className="leading-6 text-v2-muted">
                {t(`common.home.howItWorks.${step}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
};

export default HowItWorks;
