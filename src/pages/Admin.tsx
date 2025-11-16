import { useState } from "react";
import Navbar from "@widgets/app/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Badge } from "@shared/ui/badge";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";
import { Textarea } from "@shared/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shared/ui/table";
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
} from "@shared/ui/alert-dialog";
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
} from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("analytics");

  // Макетні дані аналітики
  const analytics = {
    totalUsers: 1247,
    activeRequests: 89,
    totalProposals: 456,
    revenue: "124,580",
    growth: "+15.3%",
  };

  // Макетні дані для модерації
  const pendingRequests = [
    {
      id: 1,
      title: "Створення веб-сайту для ресторану",
      author: "Іван Петренко",
      date: "2024-03-15 14:30",
      status: "pending",
    },
    {
      id: 2,
      title: "Дизайн логотипу для стартапу",
      author: "Марія Коваль",
      date: "2024-03-15 13:15",
      status: "pending",
    },
  ];

  const pendingProposals = [
    {
      id: 1,
      requestId: 1,
      author: "Олексій Шевченко",
      price: "5000",
      date: "2024-03-15 15:45",
      status: "pending",
    },
  ];

  const reportedUsers = [
    {
      id: 1,
      name: "Сергій Бондаренко",
      email: "sergiy@example.com",
      reason: "Порушення правил спілкування",
      reports: 3,
      status: "active",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Адміністративна панель</h1>
            <p className="text-muted-foreground">Управління платформою та модерація контенту</p>
          </div>
          <Badge variant="destructive" className="text-lg px-4 py-2">
            <Shield className="h-5 w-5 mr-2" />
            Адміністратор
          </Badge>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              Аналітика
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Запити
            </TabsTrigger>
            <TabsTrigger value="proposals" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Пропозиції
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Користувачі
            </TabsTrigger>
          </TabsList>

          {/* Аналітика */}
          <TabsContent value="analytics" className="space-y-6">
            {/* Статистичні картки */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Всього користувачів
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{analytics.totalUsers}</div>
                  <p className="text-sm text-green-500 mt-1">{analytics.growth} за місяць</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Активні запити
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{analytics.activeRequests}</div>
                  <p className="text-sm text-muted-foreground mt-1">Потребують відповіді</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Всього пропозицій
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{analytics.totalProposals}</div>
                  <p className="text-sm text-muted-foreground mt-1">За весь час</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Дохід платформи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{analytics.revenue} грн</div>
                  <p className="text-sm text-green-500 mt-1">{analytics.growth} за місяць</p>
                </CardContent>
              </Card>
            </div>

            {/* Графіки */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Активність користувачів</CardTitle>
                  <CardDescription>Реєстрації за останні 30 днів</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    [Графік активності - інтеграція з бібліотекою графіків]
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Розподіл за категоріями</CardTitle>
                  <CardDescription>Популярні категорії запитів</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    [Кругова діаграма категорій - інтеграція з бібліотекою графіків]
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Модерація запитів */}
          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Запити на модерацію</CardTitle>
                <CardDescription>Перегляньте та затвердіть нові запити</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Пошук запитів..." className="pl-10" />
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Назва</TableHead>
                      <TableHead>Автор</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Дії</TableHead>
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
                          <Badge variant="secondary">На розгляді</Badge>
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
                                  <AlertDialogTitle>Затвердити запит?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Запит буде опублікований та доступний для перегляду іншим користувачам.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Скасувати</AlertDialogCancel>
                                  <AlertDialogAction>Затвердити</AlertDialogAction>
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
                                  <AlertDialogTitle>Відхилити запит?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    <div className="space-y-4 mt-4">
                                      <div>
                                        <Label>Причина відхилення</Label>
                                        <Textarea placeholder="Вкажіть причину..." />
                                      </div>
                                    </div>
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Скасувати</AlertDialogCancel>
                                  <AlertDialogAction className="bg-red-500">
                                    Відхилити
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
                <CardTitle>Пропозиції на модерацію</CardTitle>
                <CardDescription>Перегляньте та затвердіть нові пропозиції</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>ID Запиту</TableHead>
                      <TableHead>Виконавець</TableHead>
                      <TableHead>Ціна</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead>Дії</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingProposals.map((proposal) => (
                      <TableRow key={proposal.id}>
                        <TableCell>#{proposal.id}</TableCell>
                        <TableCell>#{proposal.requestId}</TableCell>
                        <TableCell>{proposal.author}</TableCell>
                        <TableCell className="font-medium">{proposal.price} грн</TableCell>
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
                <CardTitle>Управління користувачами</CardTitle>
                <CardDescription>Скарги та блокування користувачів</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Пошук користувачів..." className="pl-10" />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Всі користувачі</SelectItem>
                      <SelectItem value="reported">Зі скаргами</SelectItem>
                      <SelectItem value="blocked">Заблоковані</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Ім'я</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Скарги</TableHead>
                      <TableHead>Причина</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Дії</TableHead>
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
                          <Badge variant={user.status === "active" ? "default" : "destructive"}>
                            {user.status === "active" ? "Активний" : "Заблокований"}
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
                                  <AlertDialogTitle>Заблокувати користувача?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    <div className="space-y-4 mt-4">
                                      <p>Користувач: <strong>{user.name}</strong></p>
                                      <div>
                                        <Label>Причина блокування</Label>
                                        <Textarea placeholder="Вкажіть причину..." />
                                      </div>
                                      <div>
                                        <Label>Тривалість блокування</Label>
                                        <Select defaultValue="permanent">
                                          <SelectTrigger>
                                            <SelectValue />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="24h">24 години</SelectItem>
                                            <SelectItem value="7d">7 днів</SelectItem>
                                            <SelectItem value="30d">30 днів</SelectItem>
                                            <SelectItem value="permanent">Назавжди</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Скасувати</AlertDialogCancel>
                                  <AlertDialogAction className="bg-red-500">
                                    Заблокувати
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
    </div>
  );
};

export default Admin;
