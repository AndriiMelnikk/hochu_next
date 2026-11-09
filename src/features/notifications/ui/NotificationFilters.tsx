'use client';

import { useLingui } from '@lingui/react';
import { NotificationCategory } from '@/entities/notification';
import type { NotificationScope } from '@/entities/notification';
import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from '@/ui-v2';

interface NotificationFiltersProps {
  unread: string;
  scope: NotificationScope;
  category: string;
  onUnreadChange: (value: string) => void;
  onScopeChange: (value: NotificationScope) => void;
  onCategoryChange: (value: string) => void;
  hasBuyerProfile: boolean;
  hasSellerProfile: boolean;
}

const CATEGORY_OPTIONS = Object.values(NotificationCategory);

export const NotificationFilters = ({
  unread,
  scope,
  category,
  onUnreadChange,
  onScopeChange,
  onCategoryChange,
  hasBuyerProfile,
  hasSellerProfile,
}: NotificationFiltersProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="bg-v2-surface rounded-v2-2xl  p-6 mb-8 border border-v2-border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-4 grid gap-4">
          <div className="flex h-10 items-center gap-2">
            <Switch
              id="unread-only"
              checked={unread === 'true'}
              onCheckedChange={(checked) => onUnreadChange(checked ? 'true' : '')}
            />
            <Label htmlFor="unread-only">{t('profile.notifications.filters.unreadOnly')}</Label>
          </div>
        </div>

        <div className="mb-4 grid gap-4">
          <Select value={scope} onValueChange={(v) => onScopeChange(v as NotificationScope)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('profile.notifications.filters.scopeAll')}</SelectItem>
              <SelectItem value="account">
                {t('profile.notifications.filters.scopeAccount')}
              </SelectItem>
              {hasBuyerProfile && (
                <SelectItem value="buyer">
                  {t('profile.notifications.filters.scopeBuyer')}
                </SelectItem>
              )}
              {hasSellerProfile && (
                <SelectItem value="seller">
                  {t('profile.notifications.filters.scopeSeller')}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {scope === 'all' && (
          <div className="mb-4 grid gap-4">
            <Select
              value={category || 'all'}
              onValueChange={(v) => onCategoryChange(v === 'all' ? '' : v)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {t('profile.notifications.filters.categoryAll')}
                </SelectItem>
                {CATEGORY_OPTIONS.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {t(`profile.notifications.categories.${cat}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};
