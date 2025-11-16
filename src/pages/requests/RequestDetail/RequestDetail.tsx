import Navbar from "@widgets/app/Header";
import Footer from "@widgets/app/Footer";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Textarea } from "@shared/ui/textarea";
import { Label } from "@shared/ui/label";
import { Badge } from "@shared/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar";
import { Separator } from "@shared/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui/tabs";
import { Card } from "@shared/ui/card";
import ImageLightbox from "@widgets/app/ImageLightbox";
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
  AlertCircle,
  Flag
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@shared/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@shared/ui/radio-group";
import { Link } from "react-router-dom";
import { useState } from "react";

// Mock request data
const requestData = {
  id: 1,
  title: "Шукаю ремонт ноутбука MacBook Pro",
  description: "Потрібно замінити батарею та почистити від пилу. Ноутбук 2019 року, працює повільно. Батарея тримає заряд лише 2 години, раніше було 8-10 годин.\n\nТакож помітив що ноутбук гріється при роботі, можливо потрібна заміна термопасти.\n\nБажано щоб використовувались оригінальні комплектуючі та була гарантія на роботу.",
  edits: [
    {
      text: "Уточнення: також потрібна діагностика клавіатури, деякі клавіші працюють з затримкою.",
      timestamp: "2 години тому"
    }
  ],
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
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800&h=600&fit=crop"
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [reportReason, setReportReason] = useState("");
  const [reportDetails, setReportDetails] = useState("");
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [discussionText, setDiscussionText] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);

  const handleReportSubmit = () => {
    console.log("Report submitted:", { reportReason, reportDetails });
    setReportDialogOpen(false);
    setReportReason("");
    setReportDetails("");
  };

  const handleDiscussionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Discussion message:", discussionText, "Reply to:", replyTo);
    setDiscussionText("");
    setReplyTo(null);
  };

  // Mock discussion data
  const discussions = [
    {
      id: 1,
      user: {
        name: "Олена Коваленко",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olena",
        role: "seller"
      },
      replyTo: null,
      message: "Чи потрібна діагностика перед ремонтом? Можу провести безкоштовно.",
      timestamp: "2 години тому",
      replies: []
    },
    {
      id: 2,
      user: {
        name: "Андрій Шевченко",
        avatar: requestData.buyer.avatar,
        role: "buyer"
      },
      replyTo: 1,
      message: "Так, це було б чудово! Коли можете провести діагностику?",
      timestamp: "1 годину тому",
      replies: []
    },
    {
      id: 3,
      user: {
        name: "Дмитро Петренко",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmytro",
        role: "seller"
      },
      replyTo: null,
      message: "Використовую лише оригінальні батареї Apple. Гарантія 12 місяців.",
      timestamp: "3 години тому",
      replies: []
    }
  ];

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
                  
                  {/* Report Button */}
                  <Dialog open={reportDialogOpen} onOpenChange={setReportDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Flag className="h-4 w-4" />
                        Поскаржитись
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Поскаржитись на оголошення</DialogTitle>
                        <DialogDescription>
                          Оберіть причину вашої скарги. Ми розглянемо її протягом 24 годин.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4 py-4">
                        <RadioGroup value={reportReason} onValueChange={setReportReason}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="low-price" id="low-price" />
                            <Label htmlFor="low-price" className="cursor-pointer">Підозріло низька ціна</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="scam" id="scam" />
                            <Label htmlFor="scam" className="cursor-pointer">Підозра на шахрайство</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="inappropriate" id="inappropriate" />
                            <Label htmlFor="inappropriate" className="cursor-pointer">Недоречний контент</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="spam" id="spam" />
                            <Label htmlFor="spam" className="cursor-pointer">Спам або реклама</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="duplicate" id="duplicate" />
                            <Label htmlFor="duplicate" className="cursor-pointer">Дублікат оголошення</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other" className="cursor-pointer">Інша причина</Label>
                          </div>
                        </RadioGroup>

                        <div className="space-y-2">
                          <Label htmlFor="details">Додаткові деталі (необов'язково)</Label>
                          <Textarea
                            id="details"
                            placeholder="Опишіть проблему детальніше..."
                            value={reportDetails}
                            onChange={(e) => setReportDetails(e.target.value)}
                            rows={4}
                          />
                        </div>
                      </div>

                      <DialogFooter>
                        <Button variant="outline" onClick={() => setReportDialogOpen(false)}>
                          Скасувати
                        </Button>
                        <Button 
                          onClick={handleReportSubmit}
                          disabled={!reportReason}
                          className="bg-gradient-primary"
                        >
                          Надіслати скаргу
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
                
                {/* Edit History */}
                {requestData.edits && requestData.edits.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3">Історія редагування:</h3>
                    <div className="space-y-3">
                      {requestData.edits.map((edit, index) => (
                        <div key={index} className="bg-muted/30 rounded-lg p-3 border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs">Уточнення</Badge>
                            <span className="text-xs text-muted-foreground">{edit.timestamp}</span>
                          </div>
                          <p className="text-sm">{edit.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Images */}
              {requestData.images.length > 0 && (
                <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                  <h2 className="text-xl font-semibold mb-4">Фотографії ({requestData.images.length})</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {requestData.images.map((image, index) => (
                      <div 
                        key={index}
                        className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary transition-colors cursor-pointer group"
                        onClick={() => {
                          setLightboxIndex(index);
                          setLightboxOpen(true);
                        }}
                      >
                        <img 
                          src={image} 
                          alt={`Фото ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tabs for Proposals and Discussion */}
              <Tabs defaultValue="proposals" className="bg-card rounded-2xl shadow-md border border-border">
                <TabsList className="w-full justify-start rounded-t-2xl rounded-b-none h-14 p-1 bg-muted/50">
                  <TabsTrigger value="proposals" className="flex-1 text-base">
                    Отримані пропозиції ({requestData.proposalsCount})
                  </TabsTrigger>
                  <TabsTrigger value="discussion" className="flex-1 text-base">
                    Публічні обговорення
                  </TabsTrigger>
                </TabsList>

                {/* Received Proposals Tab */}
                <TabsContent value="proposals" className="p-6 mt-0">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {requestData.proposalsCount} відгуків
                    </Badge>
                  </div>

                <div className="space-y-4">
                  {/* Individual Proposal Cards */}
                  {[
                    {
                      id: 1,
                      seller: {
                        name: "Олексій Шевченко",
                        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oleksiy",
                        rating: 4.9,
                        reviewsCount: 47,
                        completedDeals: 52,
                      },
                      price: 2500,
                      title: "Професійний ремонт MacBook з гарантією 6 місяців",
                      description: "Маю 8 років досвіду ремонту техніки Apple. Використовую тільки оригінальні комплектуючі. Зроблю діагностику безкоштовно, заміню батарею, почищу від пилу та заміню термопасту. Гарантія на всі роботи 6 місяців.",
                      deliveryTime: "2-3 дні",
                      warranty: "6 місяців",
                      createdAt: "10 хвилин тому",
                    },
                    {
                      id: 2,
                      seller: {
                        name: "Марина Коваль",
                        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryna",
                        rating: 4.7,
                        reviewsCount: 31,
                        completedDeals: 38,
                      },
                      price: 2800,
                      title: "Якісний ремонт Apple техніки",
                      description: "Сертифікований спеціаліст Apple. Можу виконати ремонт протягом дня при наявності комплектуючих. Використовую оригінальні батареї з гарантією якості.",
                      deliveryTime: "1 день",
                      warranty: "3 місяці",
                      createdAt: "25 хвилин тому",
                    },
                    {
                      id: 3,
                      seller: {
                        name: "Дмитро Петренко",
                        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmytro",
                        rating: 4.8,
                        reviewsCount: 56,
                        completedDeals: 64,
                      },
                      price: 2200,
                      title: "Швидкий та надійний ремонт MacBook",
                      description: "Маю власний сервісний центр. Виконую діагностику безкоштовно. Можу виконати роботу терміново за домовленістю. Надаю гарантію та підтримку після ремонту.",
                      deliveryTime: "3-5 днів",
                      warranty: "1 рік",
                      createdAt: "1 годину тому",
                    },
                  ].map((proposal) => (
                    <div 
                      key={proposal.id}
                      className="border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        {/* Seller Avatar */}
                        <Avatar className="h-16 w-16 border-2 border-primary">
                          <AvatarImage src={proposal.seller.avatar} />
                          <AvatarFallback>{proposal.seller.name[0]}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          {/* Seller Info */}
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-lg flex items-center gap-2">
                                {proposal.seller.name}
                                <Badge variant="secondary" className="text-xs">
                                  <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                                  {proposal.seller.rating}
                                </Badge>
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {proposal.seller.completedDeals} виконаних замовлень • {proposal.seller.reviewsCount} відгуків
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">{proposal.price} грн</div>
                              <p className="text-xs text-muted-foreground">{proposal.createdAt}</p>
                            </div>
                          </div>

                          {/* Proposal Title */}
                          <h4 className="font-semibold mb-2">{proposal.title}</h4>

                          {/* Proposal Description */}
                          <p className="text-sm text-muted-foreground mb-4">{proposal.description}</p>

                          {/* Proposal Details */}
                          <div className="flex flex-wrap gap-4 text-sm mb-4">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">Виконання:</span>
                              <span className="font-medium">{proposal.deliveryTime}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Shield className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">Гарантія:</span>
                              <span className="font-medium">{proposal.warranty}</span>
                            </span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Link to={`/proposal/${proposal.id}`}>
                              <Button variant="default" size="sm">
                                Переглянути детально
                              </Button>
                            </Link>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Написати
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </TabsContent>

                {/* Public Discussion Tab */}
                <TabsContent value="discussion" className="p-6 mt-0">
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="outline" className="text-base px-3 py-1">
                      {discussions.length} повідомлень
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    Задавайте питання публічно. Автор запиту та інші виконавці можуть відповісти.
                  </p>

                {/* Discussion Thread */}
                <div className="space-y-6 mb-6">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="space-y-3">
                      {/* Main Message */}
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={discussion.user.avatar} />
                          <AvatarFallback>{discussion.user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 bg-muted/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{discussion.user.name}</span>
                              <Badge variant={discussion.user.role === "buyer" ? "default" : "secondary"} className="text-xs">
                                {discussion.user.role === "buyer" ? "Замовник" : "Виконавець"}
                              </Badge>
                            </div>
                            <span className="text-xs text-muted-foreground">{discussion.timestamp}</span>
                          </div>
                          <p className="text-sm">{discussion.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Discussion Form */}
                <form onSubmit={handleDiscussionSubmit} className="space-y-3">
                  {replyTo && (
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-center justify-between">
                      <span className="text-sm">
                        Відповідь на повідомлення #{replyTo}
                      </span>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setReplyTo(null)}
                        className="h-6"
                      >
                        Скасувати
                      </Button>
                    </div>
                  )}
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Current" />
                        <AvatarFallback>Ви</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder={replyTo ? "Напишіть вашу відповідь..." : "Задайте питання або залишіть коментар..."}
                          value={discussionText}
                          onChange={(e) => setDiscussionText(e.target.value)}
                          rows={3}
                          className="resize-none mb-2"
                        />
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">
                            Це публічне повідомлення. Всі учасники зможуть його побачити.
                          </p>
                          <Button 
                            type="submit" 
                            size="sm"
                            disabled={!discussionText.trim()}
                            className="bg-gradient-primary"
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Надіслати
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                </TabsContent>
              </Tabs>

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

      <ImageLightbox
        images={requestData.images}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />

      <Footer />
    </div>
  );
};

export default RequestDetail;
