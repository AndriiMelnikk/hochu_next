'use client';

import { Badge } from '@/shared/ui/badge';
import { Card, CardContent } from '@/shared/ui/card';
import GamifiedAvatar from '@/widgets/app/GamifiedAvatar';
import { User } from 'lucide-react';
import type { UserRole } from '@/types/gamification';

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
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <GamifiedAvatar
            src={user.avatar}
            fallback={user.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
            xp={user.xp}
            role={user.role}
            size="xl"
            topAchievements={user.topAchievements}
          />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              {user.verified && <Badge className="bg-primary">Верифікований</Badge>}
            </div>
            {isOwner && <p className="text-muted-foreground mb-2">{user.email}</p>}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {user.role === 'buyer' ? 'Покупець' : 'Продавець'}
              </span>
              <span>📍 {user.location}</span>
              <span>⭐ {user.rating}/5.0</span>
              <span>📅 На платформі з {user.joinDate}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
