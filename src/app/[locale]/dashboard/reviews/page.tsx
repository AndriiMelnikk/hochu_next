import type { LocaleRouteProps } from '@/locales/locale';
import { dashboardMetadata } from '.././page-meta';
import ReviewsContent from './ReviewsContent';

export function generateMetadata(props: LocaleRouteProps) {
  return dashboardMetadata(props, 'DASHBOARD_REVIEWS');
}

export default function Page() {
  return <ReviewsContent />;
}
