'use client';

import { useParams } from 'next/navigation';
import { useUser } from '@/entities/user';
import { useAuthStore } from '@/entities/auth';
import { Loader2 } from 'lucide-react';
import { Button } from '@shared/ui/button';
import Link from 'next/link';
import { routes } from '@/app/router/routes';
import ProfileHeader from '@/widgets/app/ProfileHeader';
import ProfileTabs from '@/widgets/app/ProfileTabs';

export default function ProfileContent() {
  const params = useParams();
  const id = params?.id as string;
  const { data: user, isLoading, error } = useUser(id);

  const { user: currentUser } = useAuthStore();
  const isOwner = currentUser?.profile?._id === id;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex flex-col items-center justify-center p-4 min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">Користувача не знайдено</h1>
        <Button asChild>
          <Link href={routes.HOME}>На головну</Link>
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
    joinDate: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A',
    location: user.location || '-',
    verified: user.isVerified || false,
    rating: user.rating || 0,
    xp: user.xp || 0,
    unlockedAchievements: [], // TODO: fetch achievements
    topAchievements: [], // TODO: fetch achievements
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <ProfileHeader user={displayUser} isOwner={isOwner} />
      <ProfileTabs user={displayUser} isOwner={isOwner} />
    </div>
  );
}
