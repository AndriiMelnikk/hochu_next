import { notFound } from 'next/navigation';

import type { LocaleRouteProps } from '@/locales/locale';
import { dashboardMetadata } from '../../page-meta';
import SettingsContent from './SettingsContent';
import { isSettingsSection } from './sections';

type Props = LocaleRouteProps & { params: Promise<{ section: string; locale: string }> };

export function generateMetadata(props: Props) {
  return dashboardMetadata(props, 'DASHBOARD_SETTINGS');
}

export default async function Page({ params }: Props) {
  const { section } = await params;
  if (!isSettingsSection(section)) notFound();
  return <SettingsContent section={section} />;
}
