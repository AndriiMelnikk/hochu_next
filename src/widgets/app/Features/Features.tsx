'use client';

import { ShoppingBag, Shield, Users, Zap } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { Container, FeatureCard, Section, SectionHeader } from '@/ui-v2';

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
        <SectionHeader
          title={
            <>
              {t('common.home.features.title.prefix')}{' '}
              <span className="text-v2-primary">Shukayu</span>?
            </>
          }
          subtitle={t('common.home.features.subtitle')}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, key }) => (
            <FeatureCard
              key={key}
              icon={<Icon />}
              title={t(`common.home.features.${key}.title`)}
              description={t(`common.home.features.${key}.description`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
