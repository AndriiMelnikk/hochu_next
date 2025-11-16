"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { routes } from "@/app/router/routes";
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
  Calendar
} from "lucide-react";

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
    totalProposals: 8
  }
};

export default function ProposalDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link href={routes.HOME} className="hover:text-primary">Головна</Link>
            {" / "}
            <Link href={routes.BROWSE} className="hover:text-primary">Запити</Link>
            {" / "}
            <span className="text-foreground">Пропозиція #{id || proposalData.id}</span>
          </div>

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
                    <span>
                      {proposalData.request.totalProposals} пропозицій
                    </span>
                  </div>
                </div>
              </div>
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
                    className="w-full bg-gradient-primary shadow-glow"
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

              {/* Reviews Preview */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                <h3 className="text-lg font-semibold mb-4">Останні відгуки</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground ml-2">3 дні тому</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Чудова робота! Ноутбук працює як новий. Рекомендую!
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">— Олена К.</p>
                  </div>
                  
                  <div className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1,2,3,4].map((star) => (
                          <Star key={star} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        ))}
                        <Star className="h-3 w-3 text-gray-300" />
                      </div>
                      <span className="text-xs text-muted-foreground ml-2">1 тиждень тому</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Якісно та швидко. Батарея тримає заряд відмінно.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">— Максим П.</p>
                  </div>
                </div>
                
                <Button variant="link" className="w-full mt-4 text-primary">
                  Переглянути всі відгуки ({proposalData.seller.reviewsCount})
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

