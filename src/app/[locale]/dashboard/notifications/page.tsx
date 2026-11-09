import type { LocaleRouteProps } from '@/locales/locale';
import { dashboardMetadata } from '.././page-meta';
import NotificationsContent from './NotificationsContent';

export function generateMetadata(props: LocaleRouteProps) {
  return dashboardMetadata(props, 'DASHBOARD_NOTIFICATIONS');
}

export default function Page() {
  return <NotificationsContent />;
}
