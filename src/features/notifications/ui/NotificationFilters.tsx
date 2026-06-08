'use client';

import { useLingui } from '@lingui/react';
import { NotificationCategory } from '@/entities/notification';
import type { NotificationScope } from '@/entities/notification';
import { Label } from '@/shared/ui/label';
import { Switch } from '@/shared/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

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
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
      <div className="flex items-center gap-2">
        <Switch
          id="unread-only"
          checked={unread === 'true'}
          onCheckedChange={(checked) => onUnreadChange(checked ? 'true' : '')}
        />
        <Label htmlFor="unread-only">{t('profile.notifications.filters.unreadOnly')}</Label>
      </div>

      <div className="min-w-[180px]">
        <Label className="mb-2 block text-sm">{t('profile.notifications.filters.scope')}</Label>
        <Select value={scope} onValueChange={(v) => onScopeChange(v as NotificationScope)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('profile.notifications.filters.scopeAll')}</SelectItem>
            <SelectItem value="account">{t('profile.notifications.filters.scopeAccount')}</SelectItem>
            {hasBuyerProfile && (
              <SelectItem value="buyer">{t('profile.notifications.filters.scopeBuyer')}</SelectItem>
            )}
            {hasSellerProfile && (
              <SelectItem value="seller">{t('profile.notifications.filters.scopeSeller')}</SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>

      {scope === 'all' && (
        <div className="min-w-[200px]">
          <Label className="mb-2 block text-sm">{t('profile.notifications.filters.category')}</Label>
          <Select value={category || 'all'} onValueChange={(v) => onCategoryChange(v === 'all' ? '' : v)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('profile.notifications.filters.categoryAll')}</SelectItem>
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
  );
};
