'use client';

import { useLingui } from '@lingui/react';
import type { INewRequestsPreference } from '@/entities/notification';
import { channelsForEnabled } from '@/entities/notification';
import { Label } from '@/shared/ui/label';
import { Switch } from '@/shared/ui/switch';
import { CityCombobox } from '@/shared/ui/city-combobox';
import { CategoryChipsSelect } from './CategoryChipsSelect';
import { NotificationChannelsSelect } from './NotificationChannelsSelect';

interface NewRequestsPreferenceFormProps {
  value: INewRequestsPreference;
  onChange: (value: INewRequestsPreference) => void;
  disabled?: boolean;
  telegramLinked?: boolean;
}

export const NewRequestsPreferenceForm = ({
  value,
  onChange,
  disabled,
  telegramLinked = false,
}: NewRequestsPreferenceFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="py-3 first:pt-0 last:pb-0 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug">
            {t('profile.notifications.categories.new_requests')}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
            {t('profile.notifications.categories.new_requests.description')}
          </p>
        </div>
        <Switch
          className="mt-0.5 shrink-0"
          checked={value.enabled}
          onCheckedChange={(enabled) =>
            onChange({
              ...value,
              enabled,
              channels: channelsForEnabled(enabled, value.channels, { telegramLinked }),
            })
          }
          disabled={disabled}
        />
      </div>

      {value.enabled && (
        <div className="space-y-3">
          <NotificationChannelsSelect
            value={value.channels}
            onChange={(channels) => onChange({ ...value, channels })}
            disabled={disabled}
            telegramLinked={telegramLinked}
          />

          <div className="space-y-1.5">
            <Label className="text-xs">{t('profile.notifications.subscriptions.categories')}</Label>
            <CategoryChipsSelect
              value={value.categories}
              onChange={(categories) => onChange({ ...value, categories })}
              disabled={disabled}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="new-requests-location" className="text-xs">
              {t('profile.edit.locationLabel')}
            </Label>
            <CityCombobox
              id="new-requests-location"
              value={value.location}
              onValueChange={(location) => onChange({ ...value, location })}
              disabled={disabled}
              placeholder={t('profile.edit.locationPlaceholder')}
              searchPlaceholder={t('profile.edit.locationSearch')}
              searchingLabel={t('profile.edit.locationSearching')}
              notFoundLabel={t('profile.edit.locationNotFound')}
            />
          </div>
        </div>
      )}
    </div>
  );
};
