'use client';

import GamifiedAvatar from '@/widgets/app/GamifiedAvatar';
import { Calendar, MapPin, Star, User } from 'lucide-react';
import type { UserRole } from '@/types/gamification';
import { useLingui } from '@lingui/react';
import { Badge, Button, Card, CardBody, Heading } from '@/ui-v2';
import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';

interface ProfileHeaderProps {
  user: {
    name: string;
    email: string;
    avatar: string;
    role: UserRole;
    joinDate: string;
    location: string;
    verified: boolean;
    rating: number;
    xp: number;
    topAchievements: string[];
  };
  isOwner: boolean;
}

export default function ProfileHeader({ user, isOwner }: ProfileHeaderProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <Card className="mb-6 max-md:-mx-4 max-md:rounded-none max-md:border-x-0">
      <CardBody className="pt-6 max-md:px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <div className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
            <GamifiedAvatar
              src={user.avatar}
              fallback={user.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
              xp={user.xp}
              role={user.role}
              size="lg"
              topAchievements={user.topAchievements}
            />
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Heading level="title" as="h1">
                  {user.name}
                </Heading>
                {user.verified && <Badge tone="success">{t('profile.header.verified')}</Badge>}
              </div>
              {isOwner && <p className="text-v2-muted mb-2">{user.email}</p>}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-v2-secondary">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {user.role === 'buyer' ? t('profile.type.buyer') : t('profile.type.seller')}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {user.rating}/5.0
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {t('profile.header.joined').replace('{date}', user.joinDate)}
                </span>
              </div>
            </div>
          </div>
          {isOwner && (
            <Button asChild variant="outline" className="max-md:w-full">
              <Link href={routes.DASHBOARD}>{t('profile.header.openDashboard')}</Link>
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
