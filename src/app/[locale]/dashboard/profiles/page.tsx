import type { LocaleRouteProps } from '@/locales/locale';
import { dashboardMetadata } from '.././page-meta';
import ProfilesContent from './ProfilesContent';

export function generateMetadata(props: LocaleRouteProps) {
  return dashboardMetadata(props, 'DASHBOARD_PROFILES');
}

export default function Page() {
  return <ProfilesContent />;
}
