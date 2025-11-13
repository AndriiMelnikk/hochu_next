import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ProfileStats from "@/components/ProfileStats";
import ProfileSettings from "@/components/ProfileSettings";
import Chat from "@/components/Chat";
import Reviews from "@/components/Reviews";
import { User, Settings, MessageSquare, TrendingUp, Star } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Макетні дані користувача
  const user = {
    name: "Олександр Коваленко",
    email: "oleksandr@example.com",
    avatar: "",
    role: "buyer",
    joinDate: "Лютий 2024",
    location: "Київ, Україна",
    verified: true,
    rating: 4.8,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Шапка профілю */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-2xl bg-gradient-primary text-white">
                  {user.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  {user.verified && (
                    <Badge className="bg-primary">Верифікований</Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-2">{user.email}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {user.role === "buyer" ? "Покупець" : "Продавець"}
                  </span>
                  <span>📍 {user.location}</span>
                  <span>⭐ {user.rating}/5.0</span>
                  <span>📅 На платформі з {user.joinDate}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Вкладки */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Огляд</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Аналітика</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Відгуки</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Повідомлення</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Налаштування</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Активні запити</CardTitle>
                  <CardDescription>Ваші поточні запити на покупку</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Ноутбук MacBook Pro", responses: 12, status: "Активний" },
                      { title: "iPhone 15 Pro", responses: 8, status: "Активний" },
                      { title: "AirPods Pro", responses: 5, status: "Завершено" },
                    ].map((request, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium">{request.title}</p>
                          <p className="text-sm text-muted-foreground">{request.responses} відповідей</p>
                        </div>
                        <Badge variant={request.status === "Активний" ? "default" : "secondary"}>
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
                      { item: "iPad Air", seller: "Марія К.", price: "15 000 ₴", date: "15.11.2024" },
                      { item: "Apple Watch", seller: "Дмитро П.", price: "8 500 ₴", date: "10.11.2024" },
                      { item: "Magic Keyboard", seller: "Олена С.", price: "3 200 ₴", date: "05.11.2024" },
                    ].map((deal, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-muted rounded-lg">
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
          </TabsContent>

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
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
