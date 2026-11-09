import type { LocaleRouteProps } from '@/locales/locale';
import { dashboardMetadata } from '../../page-meta';
import NotificationPrefsContent from './NotificationPrefsContent';

export function generateMetadata(props: LocaleRouteProps) {
  return dashboardMetadata(props, 'DASHBOARD_NOTIFICATIONS');
}

export default function Page() {
  return <NotificationPrefsContent />;
}
