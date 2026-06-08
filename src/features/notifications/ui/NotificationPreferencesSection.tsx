'use client';

import { useLingui } from '@lingui/react';
import type { ICategoryPreference } from '@/entities/notification';
import { NotificationChannel } from '@/entities/notification';
import { Label } from '@/shared/ui/label';
import { Switch } from '@/shared/ui/switch';
import { Checkbox } from '@/shared/ui/checkbox';

interface NotificationPreferencesSectionProps {
  categoryKey: string;
  value: ICategoryPreference;
  onChange: (value: ICategoryPreference) => void;
  disabled?: boolean;
}

const CHANNELS = [NotificationChannel.IN_APP, NotificationChannel.EMAIL] as const;

export const NotificationPreferencesSection = ({
  categoryKey,
  value,
  onChange,
  disabled,
}: NotificationPreferencesSectionProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

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
          <p className="font-medium">{t(`profile.notifications.categories.${categoryKey}`)}</p>
          <p className="text-sm text-muted-foreground">
            {t(`profile.notifications.categories.${categoryKey}.description`)}
          </p>
        </div>
        <Switch
          checked={value.enabled}
          onCheckedChange={(enabled) => onChange({ ...value, enabled })}
          disabled={disabled}
        />
      </div>

      {value.enabled && (
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
      )}
    </div>
  );
};
