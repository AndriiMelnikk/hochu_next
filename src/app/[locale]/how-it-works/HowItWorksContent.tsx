'use client';

import { useState } from 'react';
import {
  Clock,
  Layers,
  Scale,
  ShieldCheck,
  Search,
  Users,
  MessageCircle,
  Star,
} from 'lucide-react';
import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import CtaSection from '@/widgets/app/CtaSection';
import Faq from '@/widgets/app/Faq';
import { Button, Container, InfoCard, PageHero, SegmentedControl } from '@/ui-v2';

type Audience = 'buyers' | 'sellers';

const CARDS = {
  buyers: [
    { key: 'time-saving', icon: Clock },
    { key: 'many-offers', icon: Layers },
    { key: 'comparison', icon: Scale },
    { key: 'security', icon: ShieldCheck },
  ],
  sellers: [
    { key: 'active-search', icon: Search },
    { key: 'ready-clients', icon: Users },
    { key: 'direct-contact', icon: MessageCircle },
    { key: 'reputation', icon: Star },
  ],
} as const;

export default function HowItWorksContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [audience, setAudience] = useState<Audience>('buyers');

  return (
    <div className="ui-v2">
      <Container className="py-6 md:py-8">
        <PageHero
          title={`${t('how-it-works.hero.title.prefix')} ${t('how-it-works.hero.title.suffix')}`}
          subtitle={t('how-it-works.hero.subtitle')}
          action={
            <Button asChild className="h-12 px-8 text-base">
              <Link href={audience === 'buyers' ? routes.CREATE : routes.REQUEST}>
                {audience === 'buyers'
                  ? t('common.nav.createRequest')
                  : t('how-it-works.sellers.view-requests-button')}
              </Link>
            </Button>
          }
        />

        <div className="mb-10 mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-[450] tracking-tight md:text-5xl">
            {t(`how-it-works.${audience}.title`)}
          </h2>
          <SegmentedControl<Audience>
            value={audience}
            onValueChange={setAudience}
            options={[
              { value: 'buyers', label: t('how-it-works.buyers.title') },
              { value: 'sellers', label: t('how-it-works.sellers.title') },
            ]}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CARDS[audience].map(({ key, icon: Icon }) => (
            <InfoCard
              key={key}
              icon={<Icon strokeWidth={1.5} />}
              title={t(`how-it-works.${audience}.${key}.title`)}
              description={t(`how-it-works.${audience}.${key}.description`)}
            />
          ))}
        </div>
      </Container>

      <Faq />
      <CtaSection />
    </div>
  );
}
