import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, DollarSign, Clock } from "lucide-react";

// Mock data for requests
const mockRequests = [
  {
    id: 1,
    title: "Шукаю ремонт ноутбука MacBook Pro",
    description: "Потрібно замінити батарею та почистити від пилу. Ноутбук 2019 року, працює повільно.",
    category: "Електроніка",
    budget: "2000-3000 грн",
    location: "Київ, Печерський район",
    timeAgo: "15 хв тому",
    proposalsCount: 8
  },
  {
    id: 2,
    title: "Потрібен веб-дизайнер для лендінгу",
    description: "Створення сучасного лендінгу для IT-компанії. Важливий досвід з Figma.",
    category: "Дизайн",
    budget: "10000-15000 грн",
    location: "Віддалено",
    timeAgo: "2 год тому",
    proposalsCount: 23
  },
  {
    id: 3,
    title: "Куплю iPhone 15 Pro Max",
    description: "Нова або у відмінному стані, 256GB, будь-який колір крім титанового.",
    category: "Смартфони",
    budget: "до 50000 грн",
    location: "Львів",
    timeAgo: "3 год тому",
    proposalsCount: 12
  },
  {
    id: 4,
    title: "Шукаю репетитора з англійської",
    description: "Потрібен носій мови або рівень C2 для підготовки до IELTS. Онлайн заняття.",
    category: "Освіта",
    budget: "500-800 грн/год",
    location: "Онлайн",
    timeAgo: "5 год тому",
    proposalsCount: 15
  },
  {
    id: 5,
    title: "Ремонт квартири під ключ",
    description: "2-кімнатна квартира 65м², потрібен повний ремонт з матеріалами.",
    category: "Будівництво",
    budget: "200000-300000 грн",
    location: "Одеса",
    timeAgo: "1 день тому",
    proposalsCount: 31
  },
  {
    id: 6,
    title: "Фотограф на весілля",
    description: "Потрібен досвідчений фотограф, повний день, травень 2025.",
    category: "Послуги",
    budget: "15000-25000 грн",
    location: "Харків",
    timeAgo: "1 день тому",
    proposalsCount: 19
  }
];

const Browse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Знайдіть <span className="bg-gradient-primary bg-clip-text text-transparent">своїх клієнтів</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Переглядайте запити та пропонуйте свої послуги
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-2xl shadow-md p-6 mb-8 border border-border">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Пошук запитів..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Категорії</Button>
              <Button variant="outline">Бюджет</Button>
              <Button variant="outline">Локація</Button>
              <Button className="bg-gradient-primary">Застосувати</Button>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Знайдено <span className="font-semibold text-foreground">{mockRequests.length}</span> активних запитів
            </p>
          </div>

          {/* Requests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRequests.map((request) => (
              <div 
                key={request.id}
                className="bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {request.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {request.timeAgo}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {request.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {request.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 text-primary mr-2" />
                      <span className="text-foreground">{request.budget}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-secondary mr-2" />
                      <span className="text-muted-foreground">{request.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {request.proposalsCount} пропозицій
                    </span>
                    <Button size="sm" className="bg-gradient-primary">
                      Відповісти
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Завантажити ще
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;
