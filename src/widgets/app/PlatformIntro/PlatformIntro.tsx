'use client';

import Image from 'next/image';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';
import { Container, Heading, Section, TextLink } from '@/ui-v2';

const BULLET_KEYS = ['bullet1', 'bullet2', 'bullet3', 'bullet4'] as const;

/**
 * SEO-контентна секція головної: розширює об'єм тексту (300+ слів),
 * додає зображення з alt і зовнішнє посилання на авторитетне джерело.
 */
const PlatformIntro = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const locale = i18n.locale;

  const externalHref =
    locale === 'uk'
      ? 'https://uk.wikipedia.org/wiki/%D0%97%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%BD%D0%B8%D0%B9_%D0%B0%D1%83%D0%BA%D1%86%D1%96%D0%BE%D0%BD'
      : 'https://en.wikipedia.org/wiki/Reverse_auction';

  return (
    <Section tone="subtle">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Heading level="h2" as="h2" className="mb-4">
              {t('common.home.intro.title')}
            </Heading>
            <p className="text-v2-muted leading-6 mb-4">{t('common.home.intro.p1')}</p>
            <p className="text-v2-muted leading-6 mb-4">{t('common.home.intro.p2')}</p>
            <p className="text-v2-muted leading-6 mb-6">{t('common.home.intro.p3')}</p>

            <Heading level="h4" as="h3" className="mb-3">
              {t('common.home.intro.listTitle')}
            </Heading>
            <ul className="list-disc pl-5 space-y-2 text-v2-muted mb-6">
              {BULLET_KEYS.map((key) => (
                <li key={key}>{t(`common.home.intro.${key}`)}</li>
              ))}
            </ul>

            <p className="text-v2-muted leading-6 mb-4">
              {t('common.home.intro.p4')}{' '}
              <a
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-v2-primary underline underline-offset-4"
              >
                {t('common.home.intro.externalLink')}
              </a>
              .
            </p>

            <TextLink asChild>
              <Link href={routes.HOW_IT_WORKS}>{t('common.home.intro.cta')}</Link>
            </TextLink>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-v2-2xl border border-v2-border bg-v2-surface">
            <Image
              src="/images/platform-overview.jpg"
              alt={t('common.home.intro.imageAlt')}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 512px, 100vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default PlatformIntro;
