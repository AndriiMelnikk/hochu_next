'use client';

import { useLingui } from '@lingui/react';

import { Container, Section, SectionHeader, Testimonial } from '@/ui-v2';

const ITEMS = [1, 2, 3, 4, 5, 6] as const;

/** Відгуки користувачів (сітка 3×2). Тексти поки заглушки. */
const Testimonials = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <Section>
      <Container>
        <SectionHeader title={t('common.home.testimonials.title')} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((n) => (
            <Testimonial
              key={n}
              quote={t(`common.home.testimonials.${n}.quote`)}
              name={t(`common.home.testimonials.${n}.name`)}
              role={t(`common.home.testimonials.${n}.role`)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
