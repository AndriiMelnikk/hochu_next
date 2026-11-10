'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, MapPin, Search, Sparkles, Star } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { Container, PromoBanner, SegmentedControl } from '@/ui-v2';

type Mode = 'hire' | 'work';

const OFFERS = [1, 2, 3] as const;

/** Ілюстративна картка «запит + пропозиції» справа від тексту (лише ≥xl). */
const HeroVisual = ({ t }: { t: (id: string) => string }) => (
  <div
    aria-hidden
    className="pointer-events-none absolute right-12 top-1/2 hidden w-[400px] -translate-y-1/2 xl:block"
  >
    <div className="rounded-v2-2xl bg-white p-5 text-v2-ink shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <div className="mb-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-v2-subtle">
        <Sparkles className="size-3.5 text-v2-primary" />
        {t('common.home.hero.visual.example')}
      </div>
      <div className="text-lg font-[550] leading-6">{t('common.home.hero.visual.title')}</div>
      <div className="mt-1 flex items-center gap-1 text-sm text-v2-subtle">
        <MapPin className="size-3.5" />
        {t('common.home.hero.visual.meta')}
        <span className="ml-auto rounded-v2-pill bg-v2-primary/10 px-2.5 py-0.5 font-medium text-v2-primary">
          {t('common.home.hero.visual.offers')}
        </span>
      </div>
    </div>
    <div className="ml-8 mt-3 space-y-3">
      {OFFERS.map((n) => (
        <div
          key={n}
          className="relative flex items-center gap-3 rounded-v2-xl bg-white/95 p-3.5 text-v2-ink shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-v2-primary/15 font-semibold text-v2-primary">
            {t(`common.home.hero.visual.offer${n}.name`).slice(0, 1)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1 text-sm font-semibold">
              {t(`common.home.hero.visual.offer${n}.name`)}
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
            </div>
            <div className="truncate text-sm text-v2-subtle">
              {t(`common.home.hero.visual.offer${n}.text`)}
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold">{t(`common.home.hero.visual.offer${n}.price`)}</div>
            {n === 3 ? (
              <div className="text-xs font-medium text-v2-primary">
                {t('common.home.hero.visual.badge')}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/** Hero у стилі Upwork: промо-смуга + велика темна картка з перемикачем «Шукаю / Пропоную». */
const Hero = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('hire');
  const [query, setQuery] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `${routes.REQUEST}?search=${encodeURIComponent(q)}` : routes.REQUEST);
  };

  return (
    <section className="ui-v2 py-4 md:py-6">
      <Container>
        <PromoBanner
          action={
            <Link href={routes.CREATE} className="inline-flex items-center gap-1">
              {t('common.home.promo.link')}
              <ArrowRight className="size-4" />
            </Link>
          }
        >
          {t('common.home.promo.text')}
        </PromoBanner>

        <div className="relative mt-6 overflow-hidden rounded-v2-2xl bg-gradient-to-br from-[#0a1b45] via-[#12307a] to-[#121826] px-6 py-10 text-white md:min-h-[560px] md:px-16 md:py-16">
          {/* Заглушка під фонове фото/відео */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(77,142,255,0.25),transparent_55%)]"
          />
          <HeroVisual t={t} />
          <div className="relative flex max-w-3xl flex-col items-start xl:max-w-[52%]">
            <SegmentedControl<Mode>
              tone="dark"
              value={mode}
              onValueChange={setMode}
              options={[
                { value: 'hire', label: t('common.home.hero.tab.hire') },
                { value: 'work', label: t('common.home.hero.tab.work') },
              ]}
              className="mb-8 md:mb-12"
            />
            <h1 className="mb-6 text-4xl font-[450] leading-[1.05] tracking-tight md:text-6xl xl:text-[64px]">
              {t(`common.home.hero.${mode}.title`)}
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-7 text-white/90 md:text-xl md:leading-8">
              {t(`common.home.hero.${mode}.subtitle`)}
            </p>

            {mode === 'hire' ? (
              <form
                onSubmit={onSubmit}
                className="flex w-full max-w-xl items-center gap-2 rounded-v2-pill bg-white p-1.5 pl-5 text-v2-ink focus-within:ring-2 focus-within:ring-white/70"
              >
                <Search className="size-5 shrink-0 text-v2-subtle" aria-hidden />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('common.home.hero.search.placeholder')}
                  aria-label={t('common.home.hero.search.button')}
                  className="h-11 min-w-0 flex-1 bg-transparent text-base outline-none focus-visible:outline-none placeholder:text-v2-subtle"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 rounded-v2-pill bg-v2-primary px-6 text-base font-semibold text-white hover:bg-v2-primary-hover"
                >
                  {t('common.home.hero.search.button')}
                </button>
              </form>
            ) : null}

            <Link
              href={mode === 'hire' ? routes.CREATE : routes.REQUEST}
              className="mt-6 inline-flex h-14 items-center gap-3 rounded-v2-pill bg-v2-primary px-8 text-lg font-semibold text-white shadow-[0_0_24px_rgba(47,107,255,0.55)] transition-colors hover:bg-v2-primary-hover"
            >
              {t(`common.home.hero.${mode}.cta`)}
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
