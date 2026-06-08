'use client';

import { useLingui } from '@lingui/react';
import type { INewRequestsPreference } from '@/entities/notification';
import { channelsForEnabled } from '@/entities/notification';
import { Label } from '@/shared/ui/label';
import { Switch } from '@/shared/ui/switch';
import { CityCombobox } from '@/shared/ui/city-combobox';
import { CategoryChipsSelect } from './CategoryChipsSelect';

interface NewRequestsPreferenceFormProps {
  value: INewRequestsPreference;
  onChange: (value: INewRequestsPreference) => void;
  disabled?: boolean;
}

export const NewRequestsPreferenceForm = ({
  value,
  onChange,
  disabled,
}: NewRequestsPreferenceFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="rounded-lg border p-4 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-medium">{t('profile.notifications.categories.new_requests')}</p>
          <p className="text-sm text-muted-foreground">
            {t('profile.notifications.categories.new_requests.description')}
          </p>
        </div>
        <Switch
          checked={value.enabled}
          onCheckedChange={(enabled) =>
            onChange({ ...value, enabled, channels: channelsForEnabled(enabled) })
          }
          disabled={disabled}
        />
      </div>

      {value.enabled && (
        <>
          <div className="space-y-2">
            <Label>{t('profile.notifications.subscriptions.categories')}</Label>
            <CategoryChipsSelect
              value={value.categories}
              onChange={(categories) => onChange({ ...value, categories })}
              disabled={disabled}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-requests-location">{t('profile.edit.locationLabel')}</Label>
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
        </>
      )}
    </div>
  );
};
