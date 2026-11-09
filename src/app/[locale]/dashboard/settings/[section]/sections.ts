import type { SettingsSection } from '@/widgets/app/ProfileSettings/ProfileSettings';

export const SETTINGS_SECTIONS: SettingsSection[] = [
  'profile',
  'contacts',
  'verification',
  'privacy',
];

export function isSettingsSection(value: string): value is SettingsSection {
  return (SETTINGS_SECTIONS as string[]).includes(value);
}
