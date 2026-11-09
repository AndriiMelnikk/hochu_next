'use client';

import { useEffect, useState } from 'react';
import { Bell, Settings, Star, User, Users } from 'lucide-react';
import { ProfileReviews } from '@/widgets/app/Reviews';
import Chat from '@/widgets/app/Chat';
import ProfileSettings from '@/widgets/app/ProfileSettings';
import ProfilesTabContent from './ProfilesTabContent';
import GamificationProgress from '@/widgets/app/GamificationProgress';
import ProfileStats from '@/widgets/app/ProfileStats';
import UserRequestsList from '@/widgets/app/UserRequestsList';
import { NotificationsTabContent } from '@/widgets/app/NotificationsTab';
import type { UserRole } from '@/types/gamification';
import { useLingui } from '@lingui/react';
import { routes, dashboardSettingsPath } from '@/app/router/routes';
import { useLocalizedRouter } from '@/shared/hooks/useLocalizedRouter';
import {
  GUEST_PROFILE_TABS,
  OWNER_PROFILE_TABS,
  PROFILE_TAB,
  resolveProfileTab,
  syncProfileTabHash,
  type ProfileTabId,
} from './const';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui-v2';

const LEGACY_OWNER_HASH: Record<string, string> = {
  notifications: routes.DASHBOARD_NOTIFICATIONS,
  profiles: routes.DASHBOARD_PROFILES,
  settings: routes.DASHBOARD_SETTINGS,
  contacts: dashboardSettingsPath('contacts'),
};

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

  const router = useLocalizedRouter();
  const defaultTab = GUEST_PROFILE_TABS[0];
  const [activeTab, setActiveTab] = useState<ProfileTabId>(defaultTab);

  useEffect(() => {
    const applyHash = () => {
      // Старі посилання /profile/<id>#settings → сторінки кабінету
      const legacy = isOwner
        ? LEGACY_OWNER_HASH[window.location.hash.replace(/^#/, '')]
        : undefined;
      if (legacy) {
        router.replace(legacy);
        return;
      }
      const next = resolveProfileTab(window.location.hash, false);
      setActiveTab(next);
      syncProfileTabHash(next);
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOwner]);

  const handleTabChange = (value: string) => {
    const next = resolveProfileTab(value, false);
    setActiveTab(next);
    syncProfileTabHash(next);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <TabsList className="mb-6">
        <TabsTrigger value={PROFILE_TAB.OVERVIEW} className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">{t('profile.tabs.overview')}</span>
        </TabsTrigger>

        <TabsTrigger value={PROFILE_TAB.REVIEWS} className="flex items-center gap-2">
          <Star className="h-4 w-4" />
          <span className="hidden sm:inline">{t('profile.tabs.reviews')}</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value={PROFILE_TAB.OVERVIEW}>
        <UserRequestsList userId={user.id} userType={user.role as 'buyer' | 'seller'} />
      </TabsContent>

      <TabsContent value={PROFILE_TAB.REVIEWS}>
        <ProfileReviews profileId={user.id} />
      </TabsContent>
    </Tabs>
  );
}
