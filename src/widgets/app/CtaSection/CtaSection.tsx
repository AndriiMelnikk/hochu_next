'use client';

import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { Container, CtaBanner, Section } from '@/ui-v2';

const CtaSection = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <Section>
      <Container>
        <CtaBanner
          title={t('common.home.cta.title')}
          actions={
            <Link
              href={routes.REQUEST}
              className="inline-flex h-12 items-center rounded-v2-pill bg-white px-6 font-semibold text-black hover:bg-white/90"
            >
              {t('common.home.cta.button')}
            </Link>
          }
        />
      </Container>
    </Section>
  );
};

export default CtaSection;
