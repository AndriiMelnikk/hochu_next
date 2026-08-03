'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@shared/ui/card';
import { Button } from '@shared/ui/button';
import { Badge } from '@shared/ui/badge';
import { Input } from '@shared/ui/input';
import { Label } from '@shared/ui/label';
import { Textarea } from '@shared/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@shared/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@shared/ui/alert-dialog';
import {
  BarChart,
  Users,
  FileText,
  MessageSquare,
  TrendingUp,
  Shield,
  Ban,
  CheckCircle,
  XCircle,
  Search,
  Eye,
} from 'lucide-react';

import { useLingui } from '@lingui/react';

export default function AdminContent() {
  const { i18n } = useLingui();
  const t = (id: string, values?) => i18n._(id, values);

  const [activeTab, setActiveTab] = useState('analytics');

  // Макетні дані аналітики
  const analytics = {
    totalUsers: 1247,
    activeRequests: 89,
    totalProposals: 456,
    revenue: '124,580',
    growth: '+15.3%',
  };

  // Макетні дані для модерації
  const pendingRequests = [
    {
      id: 1,
      title: 'Створення веб-сайту для ресторану',
      author: 'Іван Петренко',
      date: '2024-03-15 14:30',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Дизайн логотипу для стартапу',
      author: 'Марія Коваль',
      date: '2024-03-15 13:15',
      status: 'pending',
    },
  ];

  const pendingProposals = [
    {
      id: 1,
      requestId: 1,
      author: 'Олексій Шевченко',
      price: '5000',
      date: '2024-03-15 15:45',
      status: 'pending',
    },
  ];

  const reportedUsers = [
    {
      id: 1,
      name: 'Сергій Бондаренко',
      email: 'sergiy@example.com',
      reason: 'Порушення правил спілкування',
      reports: 3,
      status: 'active',
    },
  ];

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{t('admin.title')}</h1>
          <p className="text-muted-foreground">{t('admin.description')}</p>
        </div>
        <Badge variant="destructive" className="text-lg px-4 py-2">
          <Shield className="h-5 w-5 mr-2" />
          {t('admin.badge.admin')}
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            {t('admin.tabs.analytics')}
          </TabsTrigger>
          <TabsTrigger value="requests" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            {t('admin.tabs.requests')}
          </TabsTrigger>
          <TabsTrigger value="proposals" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            {t('admin.tabs.proposals')}
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {t('admin.tabs.users')}
          </TabsTrigger>
        </TabsList>

        {/* Аналітика */}
        <TabsContent value="analytics" className="space-y-6">
          {/* Статистичні картки */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t('admin.analytics.totalUsers')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{analytics.totalUsers}</div>
                <p className="text-sm text-green-500 mt-1">
                  {t('admin.analytics.growthMonth', { growth: analytics.growth })}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t('admin.analytics.activeRequests')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{analytics.activeRequests}</div>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('admin.analytics.needResponse')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t('admin.analytics.totalProposals')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{analytics.totalProposals}</div>
                <p className="text-sm text-muted-foreground mt-1">{t('admin.analytics.allTime')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {t('admin.analytics.revenue')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {analytics.revenue} {t('admin.analytics.revenueCurrency')}
                </div>
                <p className="text-sm text-green-500 mt-1">
                  {t('admin.analytics.growthMonth', { growth: analytics.growth })}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Графіки */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('admin.analytics.userActivity')}</CardTitle>
                <CardDescription>{t('admin.analytics.registrations30d')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  {t('admin.analytics.chartActivityPlaceholder')}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('admin.analytics.categoryDistribution')}</CardTitle>
                <CardDescription>{t('admin.analytics.popularCategories')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  {t('admin.analytics.chartCategoriesPlaceholder')}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Модерація запитів */}
        <TabsContent value="requests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.requests.title')}</CardTitle>
              <CardDescription>{t('admin.requests.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder={t('admin.requests.searchPlaceholder')} className="pl-10" />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('admin.requests.table.id')}</TableHead>
                    <TableHead>{t('admin.requests.table.title')}</TableHead>
                    <TableHead>{t('admin.requests.table.author')}</TableHead>
                    <TableHead>{t('admin.requests.table.date')}</TableHead>
                    <TableHead>{t('admin.requests.table.status')}</TableHead>
                    <TableHead>{t('admin.requests.table.actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>#{request.id}</TableCell>
                      <TableCell className="font-medium">{request.title}</TableCell>
                      <TableCell>{request.author}</TableCell>
                      <TableCell>{request.date}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{t('admin.requests.status.pending')}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-green-500">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  {t('admin.requests.approve.title')}
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  {t('admin.requests.approve.description')}
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>
                                  {t('admin.requests.approve.cancel')}
                                </AlertDialogCancel>
                                <AlertDialogAction>
                                  {t('admin.requests.approve.confirm')}
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  {t('admin.requests.reject.title')}
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  <div className="space-y-4 mt-4">
                                    <div>
                                      <Label>{t('admin.requests.reject.reasonLabel')}</Label>
                                      <Textarea
                                        placeholder={t('admin.requests.reject.reasonPlaceholder')}
                                      />
                                    </div>
                                  </div>
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>
                                  {t('admin.requests.reject.cancel')}
                                </AlertDialogCancel>
                                <AlertDialogAction className="bg-red-500">
                                  {t('admin.requests.reject.confirm')}
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Модерація пропозицій */}
        <TabsContent value="proposals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.proposals.title')}</CardTitle>
              <CardDescription>{t('admin.proposals.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('admin.proposals.table.id')}</TableHead>
                    <TableHead>{t('admin.proposals.table.requestId')}</TableHead>
                    <TableHead>{t('admin.proposals.table.author')}</TableHead>
                    <TableHead>{t('admin.proposals.table.price')}</TableHead>
                    <TableHead>{t('admin.proposals.table.date')}</TableHead>
                    <TableHead>{t('admin.proposals.table.actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingProposals.map((proposal) => (
                    <TableRow key={proposal.id}>
                      <TableCell>#{proposal.id}</TableCell>
                      <TableCell>#{proposal.requestId}</TableCell>
                      <TableCell>{proposal.author}</TableCell>
                      <TableCell className="font-medium">
                        {proposal.price} {t('admin.analytics.revenueCurrency')}
                      </TableCell>
                      <TableCell>{proposal.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-green-500">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Управління користувачами */}
        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('admin.users.title')}</CardTitle>
              <CardDescription>{t('admin.users.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder={t('admin.users.searchPlaceholder')} className="pl-10" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('admin.users.filter.all')}</SelectItem>
                    <SelectItem value="reported">{t('admin.users.filter.reported')}</SelectItem>
                    <SelectItem value="blocked">{t('admin.users.filter.blocked')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('admin.users.table.id')}</TableHead>
                    <TableHead>{t('admin.users.table.name')}</TableHead>
                    <TableHead>{t('admin.users.table.email')}</TableHead>
                    <TableHead>{t('admin.users.table.reports')}</TableHead>
                    <TableHead>{t('admin.users.table.reason')}</TableHead>
                    <TableHead>{t('admin.users.table.status')}</TableHead>
                    <TableHead>{t('admin.users.table.actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reportedUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>#{user.id}</TableCell>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="destructive">{user.reports}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{user.reason}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                          {user.status === 'active'
                            ? t('admin.users.status.active')
                            : t('admin.users.status.blocked')}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-red-500">
                                <Ban className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>{t('admin.users.ban.title')}</AlertDialogTitle>
                                <AlertDialogDescription>
                                  <div className="space-y-4 mt-4">
                                    <p>
                                      {t('admin.users.ban.userLabel')} <strong>{user.name}</strong>
                                    </p>
                                    <div>
                                      <Label>{t('admin.users.ban.reasonLabel')}</Label>
                                      <Textarea
                                        placeholder={t('admin.users.ban.reasonPlaceholder')}
                                      />
                                    </div>
                                    <div>
                                      <Label>{t('admin.users.ban.durationLabel')}</Label>
                                      <Select defaultValue="permanent">
                                        <SelectTrigger>
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectItem value="24h">
                                            {t('admin.users.ban.duration.24h')}
                                          </SelectItem>
                                          <SelectItem value="7d">
                                            {t('admin.users.ban.duration.7d')}
                                          </SelectItem>
                                          <SelectItem value="30d">
                                            {t('admin.users.ban.duration.30d')}
                                          </SelectItem>
                                          <SelectItem value="permanent">
                                            {t('admin.users.ban.duration.permanent')}
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                  </div>
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>{t('admin.users.ban.cancel')}</AlertDialogCancel>
                                <AlertDialogAction className="bg-red-500">
                                  {t('admin.users.ban.confirm')}
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
