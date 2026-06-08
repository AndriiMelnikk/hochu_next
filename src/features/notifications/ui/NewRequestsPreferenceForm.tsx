'use client';

import { useState } from 'react';
import { useLingui } from '@lingui/react';
import type { INewRequestsPreference } from '@/entities/notification';
import { NotificationChannel } from '@/entities/notification';
import { useDebounce } from '@/shared/hooks';
import { useCities } from '@/entities/location';
import { Label } from '@/shared/ui/label';
import { Switch } from '@/shared/ui/switch';
import { Checkbox } from '@/shared/ui/checkbox';
import { Input } from '@/shared/ui/input';
import { CategoryChipsSelect } from './CategoryChipsSelect';

interface NewRequestsPreferenceFormProps {
  value: INewRequestsPreference;
  onChange: (value: INewRequestsPreference) => void;
  disabled?: boolean;
}

const CHANNELS = [NotificationChannel.IN_APP, NotificationChannel.EMAIL] as const;

export const NewRequestsPreferenceForm = ({
  value,
  onChange,
  disabled,
}: NewRequestsPreferenceFormProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  const [locationSearch, setLocationSearch] = useState(value.location ?? '');
  const debouncedLocationSearch = useDebounce(locationSearch, 500);
  const { data: cities = [], isLoading: isCitiesLoading } = useCities(debouncedLocationSearch);

  const toggleChannel = (channel: NotificationChannel, checked: boolean) => {
    const channels = checked
      ? [...new Set([...value.channels, channel])]
      : value.channels.filter((c) => c !== channel);
    onChange({ ...value, channels });
  };

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
          onCheckedChange={(enabled) => onChange({ ...value, enabled })}
          disabled={disabled}
        />
      </div>

      {value.enabled && (
        <>
          <div className="space-y-2">
            <Label className="text-sm">{t('profile.notifications.channels.label')}</Label>
            <div className="flex flex-wrap gap-4">
              {CHANNELS.map((channel) => (
                <label key={channel} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={value.channels.includes(channel)}
                    onCheckedChange={(checked) => toggleChannel(channel, checked === true)}
                    disabled={disabled}
                  />
                  {t(`profile.notifications.channels.${channel}`)}
                </label>
              ))}
            </div>
          </div>

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
            <Input
              id="new-requests-location"
              value={locationSearch}
              onChange={(e) => {
                setLocationSearch(e.target.value);
                onChange({ ...value, location: e.target.value || null });
              }}
              placeholder={t('profile.edit.locationPlaceholder')}
              disabled={disabled}
              list="new-requests-cities"
            />
            {isCitiesLoading && (
              <p className="text-xs text-muted-foreground">{t('profile.edit.locationSearching')}</p>
            )}
            <datalist id="new-requests-cities">
              {cities.map((city) => (
                <option key={city.name} value={city.name} />
              ))}
            </datalist>
          </div>
        </>
      )}
    </div>
  );
};
