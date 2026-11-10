'use client';

import { useParams } from 'next/navigation';
import { useUser, type IProfile } from '@/entities/user';
import { useAuthStore } from '@/entities/auth';
import { Button, Container, Heading, LoadingState } from '@/ui-v2';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { formatDate } from '@/lib/format';
import ProfileHeader from '@/widgets/app/ProfileHeader';
import ProfileTabs from '@/widgets/app/ProfileTabs';
import { useLingui } from '@lingui/react';

export default function ProfileContent({ initialData }: { initialData?: IProfile }) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const params = useParams();
  const id = params?.id as string;
  const { data: user, isLoading, error } = useUser(id, { initialData });

  const { user: currentUser } = useAuthStore();
  const isOwner = currentUser?.profile?._id === id;

  if (isLoading) {
    return <LoadingState className="min-h-[50vh]" />;
  }

  if (error || !user) {
    return (
      <div className="ui-v2 flex min-h-[50vh] flex-col items-center justify-center gap-4 p-4">
        <Heading level="h3" as="h1">
          {t('profile.userNotFound')}
        </Heading>
        <Button asChild>
          <Link href={routes.HOME}>{t('profile.backToHome')}</Link>
        </Button>
      </div>
    );
  }

  const displayUser = {
    id: user._id,
    name: `${user.name} ${user.lastName || ''}`,
    email: currentUser?.account.email || '-',
    avatar: user.avatar || '',
    role: user.type,
    joinDate: user.createdAt
      ? formatDate(user.createdAt, i18n.locale, { dateStyle: 'medium' })
      : '—',
    location: user.location || '-',
    verified: user.isVerified || false,
    rating: user.rating || 0,
    xp: user.xp || 0,
    unlockedAchievements: [], // TODO: fetch achievements
    topAchievements: [], // TODO: fetch achievements
  };

  return (
    <Container className="ui-v2 pb-16">
      <ProfileHeader user={displayUser} isOwner={isOwner} />
      <ProfileTabs user={displayUser} isOwner={isOwner} />
    </Container>
  );
}
