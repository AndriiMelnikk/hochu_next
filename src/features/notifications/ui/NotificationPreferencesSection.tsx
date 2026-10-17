'use client';

import { useLingui } from '@lingui/react';
import type { ICategoryPreference } from '@/entities/notification';
import { channelsForEnabled } from '@/entities/notification';
import { Switch } from '@/shared/ui/switch';
import { NotificationChannelsSelect } from './NotificationChannelsSelect';
import { cn } from '@/lib/utils';

interface NotificationPreferencesSectionProps {
  categoryKey: string;
  value: ICategoryPreference;
  onChange: (value: ICategoryPreference) => void;
  disabled?: boolean;
  telegramLinked?: boolean;
  className?: string;
}

export const NotificationPreferencesSection = ({
  categoryKey,
  value,
  onChange,
  disabled,
  telegramLinked = false,
  className,
}: NotificationPreferencesSectionProps) => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <div className={cn('py-3 first:pt-0 last:pb-0', className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug">
            {t(`profile.notifications.categories.${categoryKey}`)}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
            {t(`profile.notifications.categories.${categoryKey}.description`)}
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
        <NotificationChannelsSelect
          className="mt-2 pl-0 sm:pl-0"
          value={value.channels}
          onChange={(channels) => onChange({ ...value, channels })}
          disabled={disabled}
          telegramLinked={telegramLinked}
        />
      )}
    </div>
  );
};
