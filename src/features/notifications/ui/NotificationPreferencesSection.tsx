'use client';

import { useLingui } from '@lingui/react';
import type { ICategoryPreference } from '@/entities/notification';
import { channelsForEnabled } from '@/entities/notification';
import { Switch } from '@/shared/ui/switch';

interface NotificationPreferencesSectionProps {
  categoryKey: string;
  value: ICategoryPreference;
  onChange: (value: ICategoryPreference) => void;
  disabled?: boolean;
}

export const NotificationPreferencesSection = ({
  categoryKey,
  value,
  onChange,
  disabled,
}: NotificationPreferencesSectionProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-medium">{t(`profile.notifications.categories.${categoryKey}`)}</p>
          <p className="text-sm text-muted-foreground">
            {t(`profile.notifications.categories.${categoryKey}.description`)}
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
    </div>
  );
};
