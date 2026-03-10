'use client';

import { useState } from 'react';
import { Settings, Star, User, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { ProfileReviews } from '@/widgets/app/Reviews';
import Chat from '@/widgets/app/Chat';
import ProfileSettings from '@/widgets/app/ProfileSettings';
import ProfilesTabContent from './ProfilesTabContent';
import GamificationProgress from '@/widgets/app/GamificationProgress';
import ProfileStats from '@/widgets/app/ProfileStats';
import UserRequestsList from '@/widgets/app/UserRequestsList';
import type { UserRole } from '@/types/gamification';
import { useLingui } from '@lingui/react';

interface ProfileTabsProps {
  user: {
    id: string;
    xp: number;
    role: UserRole;
    unlockedAchievements: string[];
  };
  isOwner: boolean;
}

export default function ProfileTabs({ user, isOwner }: ProfileTabsProps) {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);
  
  const [activeTab, setActiveTab] = useState('overview');

  const lockedTabsForGuest = ['gamification', 'analytics', 'settings', 'messages', 'profiles'];
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
        <TabsList className="grid w-full grid-cols-4 mb-3">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">{t('profile.tabs.overview')}</span>
          </TabsTrigger>

          <TabsTrigger value="profiles" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">{t('profile.tabs.profiles')}</span>
          </TabsTrigger>

          <TabsTrigger value="reviews" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="hidden sm:inline">{t('profile.tabs.reviews')}</span>
          </TabsTrigger>

          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">{t('profile.tabs.settings')}</span>
          </TabsTrigger>
        </TabsList>
      ) : (
        <TabsList className="grid w-full grid-cols-2 mb-2">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">{t('profile.tabs.overview')}</span>
          </TabsTrigger>

          <TabsTrigger value="reviews" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="hidden sm:inline">{t('profile.tabs.reviews')}</span>
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

      <TabsContent value="profiles">
        <ProfilesTabContent />
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
