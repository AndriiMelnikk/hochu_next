'use client';

import { ShoppingBag, Shield, Users, Zap } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { Card, Container, Heading, Section } from '@/ui-v2';

const features = [
  { icon: ShoppingBag, key: 'buyers' },
  { icon: Users, key: 'sellers' },
  { icon: Zap, key: 'fastSimple' },
  { icon: Shield, key: 'safe' },
] as const;

const Features = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <Section tone="subtle">
      <Container>
        <div className="mb-10 max-w-2xl">
          <Heading level="h2" as="h2" className="mb-3">
            {t('common.home.features.title.prefix')}{' '}
            <span className="text-v2-primary">Shukayu</span>?
          </Heading>
          <p className="text-lg text-v2-muted">{t('common.home.features.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map(({ icon: Icon, key }) => (
            <Card key={key} className="flex gap-4 p-6 md:p-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-v2-lg bg-v2-hover text-v2-primary">
                <Icon className="size-6" />
              </span>
              <div>
                <Heading level="h4" as="h3" className="mb-2">
                  {t(`common.home.features.${key}.title`)}
                </Heading>
                <p className="leading-6 text-v2-muted">
                  {t(`common.home.features.${key}.description`)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
