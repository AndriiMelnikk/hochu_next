"use client";

import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Button } from "@shared/ui/button";
import { Badge } from "@shared/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar";
import { Separator } from "@shared/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@shared/ui/card";
import Reviews from "@/widgets/app/Reviews";
import { Breadcrumbs } from "@shared/ui/breadcrumbs";
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  CheckCircle, 
  XCircle,
  Shield,
  Award,
  Package,
  Truck,
  Calendar,
  Eye,
  User
} from "lucide-react";
import { Textarea } from "@shared/ui/textarea";

// Mock proposal data
const proposalData = {
  id: 1,
  title: "MacBook Pro 2019 - Професійний ремонт з гарантією",
  price: 2500,
  description: "Пропонуємо якісний ремонт вашого MacBook Pro. Маємо 5 років досвіду роботи з технікою Apple. Використовуємо тільки оригінальні комплектуючі.\n\nЩо входить в послугу:\n• Діагностика (безкоштовно)\n• Заміна батареї на оригінальну\n• Повне чищення від пилу\n• Заміна термопасти\n• Тестування після ремонту\n\nГарантія 6 місяців на всі роботи.",
  deliveryTime: "1-2 дні",
  condition: "Нова батарея",
  warranty: "6 місяців",
  delivery: "Можлива доставка або самовивіз",
  images: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop"
  ],
  createdAt: "2 години тому",
  
  // Seller info
  seller: {
    id: 1,
    name: "Сергій Коваленко",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sergiy",
    rating: 4.8,
    reviewsCount: 127,
    completedDeals: 234,
    responseTime: "15 хв",
    isVerified: true,
    isPremium: true,
    memberSince: "2022",
    location: "Київ, Печерський район"
  },
  
  // Original request info
  request: {
    id: 1,
    title: "Шукаю ремонт ноутбука MacBook Pro",
    budget: "2000-3000 грн",
    totalProposals: 8,
    views: 156
  },
  
  // Buyer info (from original request)
  buyer: {
    id: 2,
    name: "Олександр Мельник",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oleksandr",
    rating: 4.9,
    reviewsCount: 89,
    completedDeals: 145,
    isVerified: true,
    memberSince: "2021",
    location: "Київ, Оболонський район"
  },
  
  // Comments/Discussion
  comments: [
    {
      id: 1,
      author: {
        name: "Олександр Мельник",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oleksandr",
        isBuyer: true
      },
      text: "Дякую за пропозицію! Чи можна подивитися приклади ваших попередніх робіт?",
      createdAt: "1 годину тому"
    },
    {
      id: 2,
      author: {
        name: "Сергій Коваленко",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sergiy",
        isBuyer: false
      },
      text: "Звичайно! Можу надіслати фото наших робіт в чаті. Також можемо обговорити всі деталі особисто.",
      createdAt: "45 хвилин тому"
    }
  ]
};

export default function ProposalDetailContent({ id }: { id: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs
            dynamicLabels={{
              [`/proposal/${id || proposalData.id}`]: `Пропозиція #${id || proposalData.id}`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2 text-card-foreground">
                      {proposalData.title}
                    </h1>
                    <p className="text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Створено {proposalData.createdAt}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      {proposalData.price} грн
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Package className="h-3 w-3 mr-1" />
                    {proposalData.condition}
                  </Badge>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Shield className="h-3 w-3 mr-1" />
                    Гарантія: {proposalData.warranty}
                  </Badge>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {proposalData.deliveryTime}
                  </Badge>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    <Truck className="h-3 w-3 mr-1" />
                    {proposalData.delivery}
                  </Badge>
                </div>
              </div>

              {/* Images Gallery */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                <h2 className="text-xl font-semibold mb-4">Фотографії</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {proposalData.images.map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer"
                    >
                      <img 
                        src={image} 
                        alt={`Фото ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                <h2 className="text-xl font-semibold mb-4">Детальний опис</h2>
                <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
                  {proposalData.description}
                </div>
              </div>

              {/* Original Request */}
              <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Оригінальний запит
                </h3>
                <div className="space-y-2">
                  <p className="font-medium">{proposalData.request.title}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Бюджет: {proposalData.request.budget}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {proposalData.request.views} переглядів
                    </span>
                    <span>
                      {proposalData.request.totalProposals} пропозицій
                    </span>
                  </div>
                </div>
              </div>

              {/* Buyer Information */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Замовник (Покупець)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={proposalData.buyer.avatar} />
                      <AvatarFallback>{proposalData.buyer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{proposalData.buyer.name}</h3>
                        {proposalData.buyer.isVerified && (
                          <Shield className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center mb-3">
                        <MapPin className="h-3 w-3 mr-1" />
                        {proposalData.buyer.location}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Рейтинг: </span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-semibold">{proposalData.buyer.rating}</span>
                            <span className="text-muted-foreground">
                              ({proposalData.buyer.reviewsCount} відгуків)
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Завершено угод: </span>
                          <span className="font-semibold">{proposalData.buyer.completedDeals}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">На платформі з: </span>
                          <span className="font-semibold">{proposalData.buyer.memberSince} року</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments/Discussion */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Обговорення ({proposalData.comments.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {proposalData.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={comment.author.avatar} />
                          <AvatarFallback>
                            {comment.author.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{comment.author.name}</span>
                            {comment.author.isBuyer && (
                              <Badge variant="outline" className="text-xs">Замовник</Badge>
                            )}
                            <span className="text-xs text-muted-foreground">
                              {comment.createdAt}
                            </span>
                          </div>
                          <p className="text-sm text-foreground">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 border-t">
                      <div className="flex gap-2">
                        <Textarea 
                          placeholder="Написати коментар..."
                          className="min-h-[80px]"
                        />
                        <Button className="self-end">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Відправити
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Full Reviews Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Відгуки про продавця</CardTitle>
                </CardHeader>
                <CardContent>
                  <Reviews />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Seller Card */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Продавець</h2>
                
                <div className="flex items-start mb-4">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={proposalData.seller.avatar} />
                    <AvatarFallback>{proposalData.seller.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{proposalData.seller.name}</h3>
                      {proposalData.seller.isVerified && (
                        <Shield className="h-4 w-4 text-primary" />
                      )}
                      {proposalData.seller.isPremium && (
                        <Award className="h-4 w-4 text-secondary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {proposalData.seller.location}
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Рейтинг</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-semibold">{proposalData.seller.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">
                      ({proposalData.seller.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Виконаних угод</span>
                    <span className="font-semibold">{proposalData.seller.completedDeals}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Час відповіді</span>
                    <span className="font-semibold">{proposalData.seller.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">На платформі з</span>
                    <span className="font-semibold">{proposalData.seller.memberSince} року</span>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    variant="gradient"
                    className="w-full shadow-glow"
                    size="lg"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Прийняти пропозицію
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Написати повідомлення
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <XCircle className="mr-2 h-5 w-5" />
                    Відхилити
                  </Button>
                </div>

                {/* Warning */}
                <div className="mt-4 p-3 bg-accent/30 rounded-lg border border-accent">
                  <p className="text-xs text-accent-foreground">
                    <strong>Порада:</strong> Обов'язково обговоріть всі деталі в чаті перед прийняттям рішення. Перевірте рейтинг та відгуки продавця.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Статистика пропозиції</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      Переглядів
                    </span>
                    <span className="font-semibold">{proposalData.request.views}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Коментарів
                    </span>
                    <span className="font-semibold">{proposalData.comments.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Відгуків про продавця
                    </span>
                    <span className="font-semibold">{proposalData.seller.reviewsCount}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
