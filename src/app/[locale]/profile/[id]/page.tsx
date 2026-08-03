import { Suspense } from 'react';
import { getLocaleFromHeaders } from '@/locales/locale';
import { getMetadataForRoute } from '@/locales/route-metadata';
import { routes } from '@/app/router/routes';
import ProfileContent from './ProfileContent';
import { Loading } from '@/shared/ui/loading';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const locale = await getLocaleFromHeaders();
  // Публічний профіль користувача — індексується, на відміну від приватного /profile
  return getMetadataForRoute(locale, 'PROFILE_BY_ID', routes.PROFILE_BY_ID(id));
}

export default function ProfileIdPage() {
  return (
    <Suspense fallback={<Loading variant="block" />}>
      <ProfileContent />
    </Suspense>
  );
}
