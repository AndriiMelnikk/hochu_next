import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Eye,
  MessageSquare,
  Calendar,
  Shield,
  Upload,
  Send,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Mock request data
const requestData = {
  id: 1,
  title: "Шукаю ремонт ноутбука MacBook Pro",
  description: "Потрібно замінити батарею та почистити від пилу. Ноутбук 2019 року, працює повільно. Батарея тримає заряд лише 2 години, раніше було 8-10 годин.\n\nТакож помітив що ноутбук гріється при роботі, можливо потрібна заміна термопасти.\n\nБажано щоб використовувались оригінальні комплектуючі та була гарантія на роботу.",
  category: "Електроніка",
  budgetMin: 2000,
  budgetMax: 3000,
  location: "Київ, Печерський район",
  urgency: "Протягом тижня",
  createdAt: "15 хвилин тому",
  views: 45,
  proposalsCount: 8,
  images: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&h=600&fit=crop"
  ],
  
  // Buyer info
  buyer: {
    id: 1,
    name: "Андрій Шевченко",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andriy",
    rating: 4.9,
    reviewsCount: 23,
    isVerified: true,
    memberSince: "2023",
    completedDeals: 31
  }
};

const RequestDetail = () => {
  const [proposalText, setProposalText] = useState("");
  const [proposalPrice, setProposalPrice] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Головна</Link>
            {" / "}
            <Link to="/browse" className="hover:text-primary">Запити</Link>
            {" / "}
            <span className="text-foreground">Запит #{requestData.id}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Request Header */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground mb-3">
                      {requestData.category}
                    </Badge>
                    <h1 className="text-3xl font-bold mb-3 text-card-foreground">
                      {requestData.title}
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {requestData.createdAt}
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {requestData.views} переглядів
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {requestData.proposalsCount} пропозицій
                  </span>
                </div>

                <Separator className="my-4" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Бюджет</p>
                      <p className="font-semibold">{requestData.budgetMin}-{requestData.budgetMax} грн</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Локація</p>
                      <p className="font-semibold">{requestData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Терміни</p>
                      <p className="font-semibold">{requestData.urgency}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                <h2 className="text-xl font-semibold mb-4">Детальний опис</h2>
                <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
                  {requestData.description}
                </div>
              </div>

              {/* Images */}
              {requestData.images.length > 0 && (
                <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                  <h2 className="text-xl font-semibold mb-4">Фотографії</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requestData.images.map((image, index) => (
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
              )}

              {/* Create Proposal Form */}
              <div className="bg-gradient-primary rounded-2xl p-1 shadow-lg">
                <div className="bg-card rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-2 flex items-center">
                    <Send className="h-6 w-6 mr-2 text-primary" />
                    Створити пропозицію
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Запропонуйте своє рішення та виграйте цей запит
                  </p>

                  <form className="space-y-5">
                    {/* Price */}
                    <div className="space-y-2">
                      <Label htmlFor="proposal-price" className="text-base font-semibold flex items-center">
                        <DollarSign className="h-4 w-4 mr-1 text-primary" />
                        Ваша ціна (грн)
                      </Label>
                      <Input 
                        id="proposal-price"
                        type="number"
                        placeholder={`Бюджет замовника: ${requestData.budgetMin}-${requestData.budgetMax} грн`}
                        value={proposalPrice}
                        onChange={(e) => setProposalPrice(e.target.value)}
                        className="text-base"
                      />
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="proposal-title" className="text-base font-semibold">
                        Заголовок пропозиції
                      </Label>
                      <Input 
                        id="proposal-title"
                        placeholder="Наприклад: MacBook Pro 2019 - Професійний ремонт з гарантією"
                        className="text-base"
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="proposal-description" className="text-base font-semibold">
                        Детальний опис
                      </Label>
                      <Textarea 
                        id="proposal-description"
                        placeholder="Опишіть що саме ви пропонуєте, ваш досвід, терміни виконання, умови..."
                        rows={8}
                        value={proposalText}
                        onChange={(e) => setProposalText(e.target.value)}
                        className="text-base"
                      />
                      <p className="text-sm text-muted-foreground">
                        {proposalText.length} символів
                      </p>
                    </div>

                    {/* Delivery details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="delivery-time" className="text-base font-semibold">
                          Термін виконання
                        </Label>
                        <select 
                          id="delivery-time"
                          className="w-full px-3 py-2 bg-background border border-input rounded-md text-base focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Оберіть термін</option>
                          <option value="1-2">1-2 дні</option>
                          <option value="3-5">3-5 днів</option>
                          <option value="week">Тиждень</option>
                          <option value="2-weeks">2 тижні</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="warranty" className="text-base font-semibold">
                          Гарантія
                        </Label>
                        <select 
                          id="warranty"
                          className="w-full px-3 py-2 bg-background border border-input rounded-md text-base focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Оберіть гарантію</option>
                          <option value="none">Без гарантії</option>
                          <option value="1m">1 місяць</option>
                          <option value="3m">3 місяці</option>
                          <option value="6m">6 місяців</option>
                          <option value="1y">1 рік</option>
                        </select>
                      </div>
                    </div>

                    {/* Images */}
                    <div className="space-y-2">
                      <Label htmlFor="proposal-images" className="text-base font-semibold flex items-center">
                        <Upload className="h-4 w-4 mr-1 text-primary" />
                        Фото ваших робіт
                      </Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm text-muted-foreground mb-1">Перетягніть файли або натисніть для вибору</p>
                        <p className="text-xs text-muted-foreground">До 5 фото, макс. 10MB кожне</p>
                      </div>
                    </div>

                    {/* Warning */}
                    <div className="bg-accent/30 rounded-lg p-4 border border-accent flex items-start">
                      <AlertCircle className="h-5 w-5 text-accent-foreground mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-accent-foreground">
                        <p className="font-semibold mb-1">Важлива інформація:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Чітко опишіть що ви пропонуєте</li>
                          <li>Вкажіть реальні терміни виконання</li>
                          <li>Додайте фото ваших попередніх робіт</li>
                          <li>Будьте чесні щодо гарантій та умов</li>
                        </ul>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary text-lg shadow-glow"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Надіслати пропозицію
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Buyer Card */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Замовник</h2>
                
                <div className="flex items-start mb-4">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={requestData.buyer.avatar} />
                    <AvatarFallback>{requestData.buyer.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{requestData.buyer.name}</h3>
                      {requestData.buyer.isVerified && (
                        <Shield className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      На платформі з {requestData.buyer.memberSince} року
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Buyer Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Рейтинг</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="font-semibold">{requestData.buyer.rating}</span>
                      <span className="text-sm text-muted-foreground ml-1">
                        ({requestData.buyer.reviewsCount})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Виконаних угод</span>
                    <span className="font-semibold">{requestData.buyer.completedDeals}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Info */}
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">
                    Цей користувач має гарну історію співпраці на платформі. Перевірте відгуки перед співпрацею.
                  </p>
                </div>
              </div>

              {/* Competition Info */}
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                <h3 className="text-lg font-semibold mb-4">Конкуренція</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-1">
                      {requestData.proposalsCount}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      інших пропозицій
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Ваша пропозиція має виділятися якістю опису та адекватною ціною
                  </p>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-secondary rounded-2xl p-6 text-white shadow-md">
                <h3 className="text-lg font-semibold mb-3">💡 Поради для успіху</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Відповідайте швидко - перші пропозиції мають перевагу</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Будьте конкретні та деталізуйте свою пропозицію</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Додайте фото робіт для довіри</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Вкажіть реальні терміни виконання</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RequestDetail;
