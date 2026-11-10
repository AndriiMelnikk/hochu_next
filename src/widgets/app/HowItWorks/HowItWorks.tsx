'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { Button, Container, ImagePlaceholder, SegmentedControl } from '@/ui-v2';

type Tab = 'buy' | 'sell';

const LINKS: Record<Tab, string[]> = {
  buy: [routes.CREATE, routes.REQUEST, routes.CATEGORIES],
  sell: [routes.REQUEST, routes.CATEGORIES, routes.REQUEST],
};

/** «Як це працює»: перемикач аудиторії + 3 картки з медіа (заглушки). */
const HowItWorks = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [tab, setTab] = useState<Tab>('buy');

  return (
    <section className="ui-v2 py-12 md:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-4xl font-[450] tracking-tight md:text-5xl">
            {t('common.home.hiw.title')}
          </h2>
          <SegmentedControl<Tab>
            value={tab}
            onValueChange={setTab}
            options={[
              { value: 'buy', label: t('common.home.hiw.tab.buy') },
              { value: 'sell', label: t('common.home.hiw.tab.sell') },
            ]}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={`${tab}-${n}`} className="flex flex-col">
              <ImagePlaceholder className="mb-6 aspect-[3/2] bg-gradient-to-br from-[#e3edff] to-[#cfe0ff]" />
              <h3 className="mb-2 text-2xl font-[450] leading-8">
                {t(`common.home.hiw.${tab}.${n}.title`)}
              </h3>
              <p className="mb-6 flex-1 text-v2-muted">{t(`common.home.hiw.${tab}.${n}.desc`)}</p>
              <Button asChild className="h-12 w-full text-base">
                <Link href={LINKS[tab][n - 1]}>{t(`common.home.hiw.${tab}.${n}.cta`)}</Link>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
