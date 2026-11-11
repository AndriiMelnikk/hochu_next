'use client';

import { Check, ShoppingCart, Store } from 'lucide-react';
import { useLingui } from '@lingui/react';

import { cn } from '@/lib/utils';
import { useProfiles, type ProfileType } from '@entities/user';

import { useProfileSwitch } from '../hooks/useProfileSwitch';

const ICONS: Record<ProfileType, typeof ShoppingCart> = { buyer: ShoppingCart, seller: Store };

/**
 * Компактне перемикання профілів (покупець/продавець) для меню: без переходу на сторінку.
 * Лишається на поточній сторінці, дані оновлюються після перемикання.
 */
export function ProfileQuickSwitch({
  onSwitched,
  className,
}: {
  onSwitched?: () => void;
  className?: string;
}) {
  const { i18n } = useLingui();
  const { data: profiles = [] } = useProfiles();
  const { switchToProfile, activeProfileId } = useProfileSwitch({ onSwitched });

  if (profiles.length < 2) return null;

  return (
    <div role="group" aria-label={i18n._('profile.tabs.profiles')} className={className}>
      {profiles.map((p) => {
        const Icon = ICONS[p.type];
        const active = p._id === activeProfileId;
        return (
          <button
            key={p._id}
            type="button"
            aria-pressed={active}
            onClick={() => void switchToProfile(p._id)}
            className={cn(
              'flex min-h-12 w-full items-center gap-3 rounded-v2-lg px-3 text-left text-base outline-none transition-colors duration-150 ease-v2-out hover:bg-v2-hover active:bg-v2-hover focus-visible:bg-v2-hover',
              active ? 'font-semibold text-v2-primary' : 'text-v2-ink',
            )}
          >
            <Icon aria-hidden className="size-5 shrink-0" />
            <span className="min-w-0 flex-1 truncate">{i18n._(`profile.type.${p.type}`)}</span>
            {active && <Check aria-hidden className="size-5 shrink-0" />}
          </button>
        );
      })}
    </div>
  );
}
