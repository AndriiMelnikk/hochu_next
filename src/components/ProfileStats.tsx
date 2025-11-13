import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ShoppingBag, MessageSquare, Star, DollarSign, Eye } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

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

  const popularCategories = [
    { name: "Електроніка", value: 35, color: "hsl(var(--primary))" },
    { name: "Послуги", value: 25, color: "hsl(206 100% 54%)" },
    { name: "Будівництво", value: 20, color: "hsl(206 100% 44%)" },
    { name: "Дизайн", value: 12, color: "hsl(206 100% 34%)" },
    { name: "Інше", value: 8, color: "hsl(var(--muted))" },
  ];

  return (
    <div className="space-y-6">
      {/* Загальна статистика */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всього запитів</CardTitle>
            <ShoppingBag className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalRequests}</div>
            <p className="text-xs text-muted-foreground">
              {stats.activeRequests} активних зараз
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Завершено угод</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedDeals}</div>
            <p className="text-xs text-muted-foreground">
              75% від всіх запитів
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Витрачено</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSpent.toLocaleString()} ₴</div>
            <p className="text-xs text-muted-foreground">
              Середній чек: {Math.round(stats.totalSpent / stats.completedDeals).toLocaleString()} ₴
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Рейтинг</CardTitle>
            <Star className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}/5.0</div>
            <p className="text-xs text-muted-foreground">
              На основі {stats.completedDeals} відгуків
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Графіки активності */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Активність за останні місяці</CardTitle>
            <CardDescription>Запити та завершені угоди</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyActivity}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="requests" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="Запити"
                />
                <Line 
                  type="monotone" 
                  dataKey="deals" 
                  stroke="hsl(206 100% 54%)" 
                  strokeWidth={2}
                  name="Угоди"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Популярні категорії</CardTitle>
            <CardDescription>Розподіл запитів по категоріях</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={popularCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="hsl(var(--primary))"
                  dataKey="value"
                >
                  {popularCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Показники цього місяця */}
      <Card>
        <CardHeader>
          <CardTitle>Показники цього місяця</CardTitle>
          <CardDescription>Ключові метрики поточного періоду</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.viewsThisMonth}</p>
                <p className="text-sm text-muted-foreground">Переглядів профілю</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.messagesThisMonth}</p>
                <p className="text-sm text-muted-foreground">Повідомлень</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.responseRate}%</p>
                <p className="text-sm text-muted-foreground">Відповідей на запити</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileStats;
