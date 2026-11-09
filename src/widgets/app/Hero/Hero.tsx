'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Search } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import Link from '@/shared/ui/link';
import { Container, PromoBanner, SegmentedControl } from '@/ui-v2';

type Mode = 'hire' | 'work';

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

        <div className="relative mt-6 overflow-hidden rounded-v2-2xl bg-gradient-to-br from-[#0b2e0b] via-[#164a1c] to-[#181818] px-6 py-10 text-white md:min-h-[560px] md:px-16 md:py-16">
          {/* Заглушка під фонове фото/відео */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(111,227,0,0.25),transparent_55%)]"
          />
          <div className="relative flex max-w-3xl flex-col items-start">
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
            <h1 className="mb-6 text-4xl font-[450] leading-[1.05] tracking-tight md:text-[72px]">
              {t(`common.home.hero.${mode}.title`)}
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-7 text-white/90 md:text-2xl md:leading-9">
              {t(`common.home.hero.${mode}.subtitle`)}
            </p>

            {mode === 'hire' ? (
              <form
                onSubmit={onSubmit}
                className="flex w-full max-w-xl items-center gap-2 rounded-v2-pill bg-white p-1.5 pl-5 text-v2-ink"
              >
                <Search className="size-5 shrink-0 text-v2-subtle" aria-hidden />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('common.home.hero.search.placeholder')}
                  aria-label={t('common.home.hero.search.button')}
                  className="h-11 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-v2-subtle"
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
              className="mt-6 inline-flex h-14 items-center gap-3 rounded-v2-pill bg-v2-primary px-8 text-lg font-semibold text-white shadow-[0_0_24px_rgba(20,168,0,0.55)] transition-colors hover:bg-v2-primary-hover"
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
