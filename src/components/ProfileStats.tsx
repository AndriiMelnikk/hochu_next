import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, ShoppingBag, MessageSquare, Star, DollarSign, Eye } from "lucide-react";

const ProfileStats = () => {
  const stats = {
    totalRequests: 24,
    activeRequests: 3,
    completedDeals: 18,
    totalSpent: 125000,
    averageRating: 4.8,
    responseRate: 95,
    viewsThisMonth: 342,
    messagesThisMonth: 87,
  };

  const monthlyActivity = [
    { month: "Січ", requests: 2, deals: 1 },
    { month: "Лют", requests: 4, deals: 3 },
    { month: "Бер", requests: 3, deals: 2 },
    { month: "Квіт", requests: 5, deals: 4 },
    { month: "Трав", requests: 4, deals: 3 },
    { month: "Черв", requests: 6, deals: 5 },
  ];

  const maxRequests = Math.max(...monthlyActivity.map(m => m.requests));

  return (
    <div className="space-y-6">
      {/* Загальна статистика */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всього запитів</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalRequests}</div>
            <p className="text-xs text-muted-foreground">
              {stats.activeRequests} активних зараз
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Завершено угод</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedDeals}</div>
            <p className="text-xs text-muted-foreground">
              75% від всіх запитів
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Витрачено</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSpent.toLocaleString()} ₴</div>
            <p className="text-xs text-muted-foreground">
              Середній чек: {Math.round(stats.totalSpent / stats.completedDeals).toLocaleString()} ₴
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Рейтинг</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}/5.0</div>
            <p className="text-xs text-muted-foreground">
              На основі {stats.completedDeals} відгуків
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Активність за місяць */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Активність за останні місяці</CardTitle>
            <CardDescription>Запити та завершені угоди</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyActivity.map((month, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{month.month}</span>
                    <span className="text-muted-foreground">
                      {month.requests} запитів / {month.deals} угод
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Progress 
                      value={(month.requests / maxRequests) * 100} 
                      className="flex-1"
                    />
                    <Progress 
                      value={(month.deals / maxRequests) * 100} 
                      className="flex-1 [&>div]:bg-primary/50"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Показники цього місяця</CardTitle>
            <CardDescription>Ваша активність та залученість</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Перегляди профілю</span>
                </div>
                <span className="text-2xl font-bold">{stats.viewsThisMonth}</span>
              </div>
              <Progress value={85} />
              <p className="text-xs text-muted-foreground">+12% від минулого місяця</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Повідомлення</span>
                </div>
                <span className="text-2xl font-bold">{stats.messagesThisMonth}</span>
              </div>
              <Progress value={70} />
              <p className="text-xs text-muted-foreground">Середній час відповіді: 2 год</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Швидкість відповіді</span>
                </div>
                <span className="text-2xl font-bold">{stats.responseRate}%</span>
              </div>
              <Progress value={stats.responseRate} />
              <p className="text-xs text-muted-foreground">Відмінний показник!</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Категорії покупок */}
      <Card>
        <CardHeader>
          <CardTitle>Популярні категорії</CardTitle>
          <CardDescription>Розподіл ваших запитів за категоріями</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Електроніка", count: 12, percentage: 50 },
              { name: "Одяг та взуття", count: 6, percentage: 25 },
              { name: "Дім та сад", count: 4, percentage: 17 },
              { name: "Спорт", count: 2, percentage: 8 },
            ].map((category, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {category.count} запитів ({category.percentage}%)
                  </span>
                </div>
                <Progress value={category.percentage} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileStats;
