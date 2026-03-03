'use client';

import { useState } from 'react';
import { Settings, Star, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { ProfileReviews } from '@/widgets/app/Reviews';
import Chat from '@/widgets/app/Chat';
import ProfileSettings from '@/widgets/app/ProfileSettings';
import GamificationProgress from '@/widgets/app/GamificationProgress';
import ProfileStats from '@/widgets/app/ProfileStats';
import UserRequestsList from '@/widgets/app/UserRequestsList';

interface ProfileTabsProps {
  user: {
    id: string;
    xp: number;
    role: string;
    unlockedAchievements: string[];
  };
  isOwner: boolean;
}

export default function ProfileTabs({ user, isOwner }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState('overview');

  console.log(user);

  const lockedTabsForGuest = ['gamification', 'analytics', 'settings', 'messages'];
  const originallyLockedTabs = ['gamification', 'analytics', 'reviews', 'messages'];

  const handleTabChange = (value: string) => {
    if (!isOwner && lockedTabsForGuest.includes(value)) {
      return;
    }
    if (isOwner && originallyLockedTabs.includes(value) && value !== 'settings') {
      // return; // Logic from original component, can be enabled if needed
    }
    if (value === 'settings' && !isOwner) return;

    setActiveTab(value);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      {isOwner ? (
        <TabsList className="grid w-full grid-cols-3 mb-3">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Огляд</span>
          </TabsTrigger>

          <TabsTrigger value="reviews" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="hidden sm:inline">Відгуки</span>
          </TabsTrigger>

          {isOwner && (
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Налаштування</span>
            </TabsTrigger>
          )}
        </TabsList>
      ) : (
        <TabsList className="grid w-full grid-cols-2 mb-2">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Огляд</span>
          </TabsTrigger>

          <TabsTrigger value="reviews" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="hidden sm:inline">Відгуки</span>
          </TabsTrigger>
        </TabsList>
      )}

      <TabsContent value="gamification">
        <GamificationProgress
          xp={user.xp}
          role={user.role}
          unlockedAchievements={user.unlockedAchievements}
        />
      </TabsContent>

      <TabsContent value="overview">
        <UserRequestsList userId={user.id} userType={user.role as 'buyer' | 'seller'} />
      </TabsContent>

      <TabsContent value="reviews">
        <ProfileReviews profileId={user.id} />
      </TabsContent>

      <TabsContent value="analytics">
        <ProfileStats />
      </TabsContent>

      <TabsContent value="messages">
        <Chat />
      </TabsContent>

      <TabsContent value="settings">
        <ProfileSettings />
      </TabsContent>
    </Tabs>
  );
}
