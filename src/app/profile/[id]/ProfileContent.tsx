'use client';

import { useParams } from 'next/navigation';
import { useUser } from '@/entities/user';
import { useAuthStore } from '@/entities/auth';
import { Loader2, Settings, User } from 'lucide-react';
import { Button } from '@shared/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { Badge } from '@/shared/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import ProfileStats from '@/widgets/app/ProfileStats';
import Reviews from '@/widgets/app/Reviews';
import Chat from '@/widgets/app/Chat';
import ProfileSettings from '@/widgets/app/ProfileSettings';
import GamificationProgress from '@/widgets/app/GamificationProgress';
import GamifiedAvatar from '@/widgets/app/GamifiedAvatar';
import Header from '@/widgets/app/Header';

export default function ProfileContent() {
  const params = useParams();
  const id = params?.id as string;
  const { data: user, isLoading, error } = useUser(id);
  const { user: currentUser } = useAuthStore();
  const isOwner = currentUser?.profile?._id === id;

  const [activeTab, setActiveTab] = useState('overview');

  // Список заблокованих вкладок для гостя
  const lockedTabsForGuest = ['gamification', 'analytics', 'settings', 'messages'];

  // Список заблокованих вкладок (з оригінального коду)
  const originallyLockedTabs = ['gamification', 'analytics', 'reviews', 'messages'];

  const handleTabChange = (value: string) => {
    // Якщо не власник, блокуємо доступ до певних вкладок
    if (!isOwner && lockedTabsForGuest.includes(value)) {
      return;
    }
    // Для власника теж можуть бути заблоковані вкладки (mock logic)
    if (isOwner && originallyLockedTabs.includes(value) && value !== 'settings') {
      // settings is allowed for owner
      // return; // Uncomment to lock for owner too if needed
    }

    // Allow settings only for owner
    if (value === 'settings' && !isOwner) return;

    setActiveTab(value);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Користувача не знайдено</h1>
        <Button asChild>
          <Link href="/">На головну</Link>
        </Button>
      </div>
    );
  }

  // Map fetched user data to component structure if needed, or use directly
  const displayUser = {
    name: user.name || 'User',
    email: 'Приховано', // Email is not in public profile usually
    avatar: user.avatar || '',
    role: user.type,
    joinDate: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A',
    location: user.location || 'Не вказано',
    verified: user.isVerified || false,
    rating: user.rating || 0,
    xp: user.xp || 0,
    unlockedAchievements: [], // TODO: fetch achievements
    topAchievements: [], // TODO: fetch achievements
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Шапка профілю */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <GamifiedAvatar
                src={displayUser.avatar}
                fallback={displayUser.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
                xp={displayUser.xp}
                role={displayUser.role}
                size="xl"
                topAchievements={displayUser.topAchievements}
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{displayUser.name}</h1>
                  {displayUser.verified && <Badge className="bg-primary">Верифікований</Badge>}
                </div>
                {isOwner && <p className="text-muted-foreground mb-2">{displayUser.email}</p>}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {displayUser.role === 'buyer' ? 'Покупець' : 'Продавець'}
                  </span>
                  <span>📍 {displayUser.location}</span>
                  <span>⭐ {displayUser.rating}/5.0</span>
                  <span>📅 На платформі з {displayUser.joinDate}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Вкладки */}
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Огляд</span>
            </TabsTrigger>

            {/* Show these only if feature is ready or if owner */}
            <TabsTrigger
              value="gamification"
              className={`flex items-center gap-2 ${!isOwner ? 'hidden' : ''} opacity-60 cursor-not-allowed`}
              disabled
            >
              <span className="hidden sm:inline">Досягнення</span>
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className={`flex items-center gap-2 ${!isOwner ? 'hidden' : ''} opacity-60 cursor-not-allowed`}
              disabled
            >
              <span className="hidden sm:inline">Аналітика</span>
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="flex items-center gap-2 cursor-not-allowed opacity-60"
              disabled
            >
              <span className="hidden sm:inline">Відгуки</span>
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className={`flex items-center gap-2 ${!isOwner ? 'hidden' : ''} opacity-60 cursor-not-allowed`}
              disabled
            >
              <span className="hidden sm:inline">Повідомлення</span>
            </TabsTrigger>

            {isOwner && (
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Налаштування</span>
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="gamification">
            <GamificationProgress
              xp={displayUser.xp}
              role={displayUser.role}
              unlockedAchievements={displayUser.unlockedAchievements}
            />
          </TabsContent>

          <TabsContent value="overview">
            {/* Only show sensitive overview data if owner, otherwise show public info */}
            {isOwner ? (
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Активні запити</CardTitle>
                    <CardDescription>Ваші поточні запити на покупку</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: 'Ноутбук MacBook Pro', responses: 12, status: 'Активний' },
                        { title: 'iPhone 15 Pro', responses: 8, status: 'Активний' },
                        { title: 'AirPods Pro', responses: 5, status: 'Завершено' },
                      ].map((request, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center p-3 bg-muted rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{request.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {request.responses} відповідей
                            </p>
                          </div>
                          <Badge variant={request.status === 'Активний' ? 'default' : 'secondary'}>
                            {request.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Останні угоди</CardTitle>
                    <CardDescription>Ваші завершені транзакції</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          item: 'iPad Air',
                          seller: 'Марія К.',
                          price: '15 000 ₴',
                          date: '15.11.2024',
                        },
                        {
                          item: 'Apple Watch',
                          seller: 'Дмитро П.',
                          price: '8 500 ₴',
                          date: '10.11.2024',
                        },
                        {
                          item: 'Magic Keyboard',
                          seller: 'Олена С.',
                          price: '3 200 ₴',
                          date: '05.11.2024',
                        },
                      ].map((deal, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center p-3 bg-muted rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{deal.item}</p>
                            <p className="text-sm text-muted-foreground">від {deal.seller}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-primary">{deal.price}</p>
                            <p className="text-xs text-muted-foreground">{deal.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
                <p>Це публічний профіль користувача {displayUser.name}.</p>
                <p>Детальна інформація доступна лише власнику.</p>
              </div>
            )}
          </TabsContent>

          {isOwner && (
            <>
              <TabsContent value="analytics">
                <ProfileStats />
              </TabsContent>

              <TabsContent value="reviews">
                <Reviews />
              </TabsContent>

              <TabsContent value="messages">
                <Chat />
              </TabsContent>

              <TabsContent value="settings">
                <ProfileSettings />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
}
