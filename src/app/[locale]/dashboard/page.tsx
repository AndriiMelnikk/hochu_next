import type { LocaleRouteProps } from '@/locales/locale';
import { dashboardMetadata } from './page-meta';
import OverviewContent from './OverviewContent';

export function generateMetadata(props: LocaleRouteProps) {
  return dashboardMetadata(props, 'DASHBOARD');
}

export default function Page() {
  return <OverviewContent />;
}
