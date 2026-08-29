'use client';

import { ShoppingCart, Store } from 'lucide-react';
import { useLingui } from '@lingui/react';
import type { IProfile, ProfileType } from '@/entities/user';

const PROFILE_TYPE_ICONS: Record<ProfileType, typeof ShoppingCart> = {
  buyer: ShoppingCart,
  seller: Store,
};

interface ProfileCardProps {
  profile: IProfile;
  isActive: boolean;
  onSelect: () => void;
  labels: Record<ProfileType, string>;
}

export function ProfileCard({ profile, isActive, onSelect, labels }: ProfileCardProps) {
  const { i18n } = useLingui();
  const t = (id: string, values?: Record<string, string | number>) => i18n._(id, values);

  const Icon = PROFILE_TYPE_ICONS[profile.type];
  const label = labels[profile.type];
  const displayName = [profile.name, profile.lastName].filter(Boolean).join(' ') || label;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        flex w-full min-w-0 items-center gap-4 rounded-lg border p-4 text-left transition-colors
        hover:bg-accent/50
        ${isActive ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border'}
      `}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
          isActive ? 'bg-primary text-primary-foreground' : 'bg-muted'
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium truncate">{displayName}</p>
        <p className="text-sm text-muted-foreground truncate">{label}</p>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {t('profile.profiles.stats', {
            rating: profile.rating,
            xp: profile.xp,
            deals: profile.completedDeals,
          })}
        </p>
      </div>
      {isActive && (
        <span className="shrink-0 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
          {t('profile.profiles.currentBadge')}
        </span>
      )}
    </button>
  );
}
