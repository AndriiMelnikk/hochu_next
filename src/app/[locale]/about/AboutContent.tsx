'use client';

import { useLingui } from '@lingui/react';
import { Users, Target, Heart, Zap } from 'lucide-react';

import { Container, InfoCard, PageHero } from '@/ui-v2';

export default function AboutContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const values = [
    { icon: Users, key: 'community' },
    { icon: Target, key: 'transparency' },
    { icon: Heart, key: 'trust' },
    { icon: Zap, key: 'speed' },
  ] as const;

  return (
    <div className="ui-v2">
      <Container className="py-6 md:py-8">
        <PageHero title={t('about.hero.title')} subtitle={t('about.hero.description')} />

        <section className="mx-auto mt-16 max-w-4xl">
          <h2 className="mb-8 text-4xl font-[450] tracking-tight md:text-5xl">
            {t('about.mission.title')}
          </h2>
          <div className="space-y-6 rounded-v2-2xl border border-v2-border p-8 text-lg leading-8 text-v2-muted shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:p-12">
            <p>{t('about.mission.paragraph1')}</p>
            <p>{t('about.mission.paragraph2')}</p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-8 text-4xl font-[450] tracking-tight md:text-5xl">
            {t('about.values.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map(({ icon: Icon, key }) => (
              <InfoCard
                key={key}
                icon={<Icon strokeWidth={1.5} />}
                title={t(`about.values.${key}.title`)}
                description={t(`about.values.${key}.description`)}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-8 mt-16 max-w-4xl">
          <h2 className="mb-8 text-4xl font-[450] tracking-tight md:text-5xl">
            {t('about.story.title')}
          </h2>
          <div className="space-y-6 text-lg leading-8 text-v2-muted">
            <p>{t('about.story.paragraph1')}</p>
            <p>{t('about.story.paragraph2')}</p>
            <p>{t('about.story.paragraph3')}</p>
          </div>
        </section>
      </Container>
    </div>
  );
}
