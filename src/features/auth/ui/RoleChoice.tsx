'use client';

import { useLingui } from '@lingui/react';
import { Button } from '@/ui-v2';

export type RegisterRole = 'buyer' | 'seller';

/**
 * Перший крок реєстрації (мобільний варіант Upwork «I'm hiring / I'm a freelancer»):
 * дві великі картки. Вибір визначає тип профілю в наступній формі.
 */
export function RoleChoice({ onChoose }: { onChoose: (role: RegisterRole) => void }) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="mx-auto grid w-full max-w-3xl gap-4 md:grid-cols-2">
      <section className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-v2-2xl bg-[#134e48] px-6 py-10 text-center text-white md:min-h-[360px]">
        <h2 className="text-3xl font-[450]">{t('auth.register.choice.buyerTitle')}</h2>
        <p className="text-base text-white/90">{t('auth.register.choice.buyerHint')}</p>
        <Button className="mt-2 h-12 px-8 text-base" onClick={() => onChoose('buyer')}>
          {t('auth.register.choice.buyerCta')}
        </Button>
      </section>
      <section className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-v2-2xl bg-[#86dca5] px-6 py-10 text-center text-v2-ink md:min-h-[360px]">
        <h2 className="text-3xl font-[450]">{t('auth.register.choice.sellerTitle')}</h2>
        <p className="text-base">{t('auth.register.choice.sellerHint')}</p>
        <Button
          variant="secondary"
          className="mt-2 h-12 px-8 text-base"
          onClick={() => onChoose('seller')}
        >
          {t('auth.register.choice.sellerCta')}
        </Button>
      </section>
    </div>
  );
}
