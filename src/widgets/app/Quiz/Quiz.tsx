'use client';

import { useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { routes } from '@/app/router/routes';
import { useCategories } from '@/entities/category';
import Link from '@/shared/ui/link';
import { Container } from '@/ui-v2';

/** Блок-«квіз»: питання + плитки категорій, що ведуть до створення запиту. */
const Quiz = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const { data: categories = [] } = useCategories();
  const options = useMemo(() => categories.filter((c) => !c.parentId).slice(0, 6), [categories]);
  if (options.length === 0) return null;

  return (
    <section className="ui-v2 py-12 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#eaf8c9] to-[#cdf3cd] text-v2-primary">
                <Sparkles className="size-5" aria-hidden />
              </span>
              <p className="text-xl font-[550]">{t('common.home.quiz.eyebrow')}</p>
            </div>
            <h2 className="mb-4 text-4xl font-[450] leading-tight tracking-tight md:text-6xl md:leading-[1.05]">
              {t('common.home.quiz.title')}
            </h2>
            <p className="text-lg text-v2-muted md:text-xl">{t('common.home.quiz.subtitle')}</p>
          </div>

          <div className="rounded-v2-2xl border border-v2-border bg-v2-surface p-6 md:p-10">
            <p className="mb-8 max-w-sm text-3xl font-[450] leading-tight md:text-5xl md:leading-[1.1]">
              {t('common.home.quiz.question')}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {options.map((c) => (
                <Link
                  key={c._id}
                  href={routes.CREATE}
                  className="flex min-h-[88px] items-center gap-3 rounded-v2-xl bg-v2-surface-subtle px-5 py-4 text-base font-[550] text-v2-ink shadow-[0_1px_6px_rgba(0,0,0,0.05)] transition-colors hover:bg-v2-hover"
                >
                  <span className="size-2.5 shrink-0 rounded-full bg-v2-brand" aria-hidden />
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Quiz;
