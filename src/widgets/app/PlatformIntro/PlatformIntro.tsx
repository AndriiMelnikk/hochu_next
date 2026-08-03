'use client';

import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';

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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('common.home.intro.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('common.home.intro.p1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('common.home.intro.p2')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('common.home.intro.p3')}
            </p>

            <h3 className="text-xl font-semibold mb-3">{t('common.home.intro.listTitle')}</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
              {BULLET_KEYS.map((key) => (
                <li key={key}>{t(`common.home.intro.${key}`)}</li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('common.home.intro.p4')}{' '}
              <a
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-90"
              >
                {t('common.home.intro.externalLink')}
              </a>
              .
            </p>

            <Link
              href={routes.HOW_IT_WORKS}
              className="inline-flex text-primary font-medium hover:underline underline-offset-2"
            >
              {t('common.home.intro.cta')}
            </Link>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border-2 border-border bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/platform-overview.svg"
              alt={t('common.home.intro.imageAlt')}
              className="h-full w-full object-cover"
              width={960}
              height={540}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformIntro;
