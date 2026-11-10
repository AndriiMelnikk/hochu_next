'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import { Container } from '@/ui-v2';

/** Темний блок із полем «опишіть, що потрібно» → створення запиту (як cost-estimate в Upwork). */
const Estimate = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const router = useRouter();
  const [text, setText] = useState('');

  return (
    <section className="ui-v2 py-12 md:py-20">
      <Container>
        <div className="relative grid items-center gap-10 overflow-hidden rounded-v2-2xl bg-[#1a1a1a] p-8 text-white md:p-16 lg:grid-cols-2">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(210,255,0,0.28),transparent_65%)]"
          />
          <div className="relative">
            <h2 className="mb-6 text-4xl font-[450] leading-tight tracking-tight md:text-6xl md:leading-[1.05]">
              {t('common.home.estimate.title')}
            </h2>
            <p className="mb-8 text-lg">{t('common.home.estimate.subtitle')}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(routes.CREATE);
              }}
              className="relative rounded-v2-xl bg-white p-4 text-v2-ink focus-within:ring-2 focus-within:ring-v2-primary"
            >
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                placeholder={t('common.home.estimate.placeholder')}
                className="w-full resize-none bg-transparent text-base outline-none placeholder:text-v2-muted focus-visible:outline-none md:text-sm"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex h-12 items-center gap-2 rounded-v2-pill bg-[#1a1a1a] px-6 font-semibold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-v2-primary focus-visible:ring-offset-2"
                >
                  {t('common.home.estimate.next')}
                  <ArrowRight className="size-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Заглушка під візуалізацію (графік цін) */}
          <div className="relative rounded-v2-2xl border border-white/10 bg-[#141414] p-6 text-center">
            <p className="mb-8 text-2xl">{t('common.home.estimate.label')}</p>
            <div className="mb-10 flex items-center justify-center gap-24">
              <span className="rounded-v2-pill border border-[#d2ff00] bg-black px-4 py-2">
                ₴500
              </span>
              <span className="rounded-v2-pill border border-[#d2ff00] bg-black px-4 py-2">
                ₴1500
              </span>
            </div>
            <p className="text-lg">{t('common.home.estimate.typical')}</p>
            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Estimate;
