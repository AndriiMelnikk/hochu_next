'use client';

import { useLingui } from '@lingui/react';

import { Container, StatItem } from '@/ui-v2';

const KEYS = ['requests', 'sellers', 'proposals', 'rating'] as const;

/** Рядок довіри під hero (в Upwork тут логотипи клієнтів). Цифри поки заглушки. */
const Trust = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <section className="ui-v2 py-8 md:py-12">
      <Container>
        <h2 className="mb-8 text-center text-sm font-[450] uppercase tracking-wide text-v2-subtle">
          {t('common.home.trust.eyebrow')}
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {KEYS.map((k) => (
            <StatItem
              key={k}
              className="text-center"
              value={t(`common.home.trust.${k}.value`)}
              label={t(`common.home.trust.${k}.label`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Trust;
