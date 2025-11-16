import Navbar from "@widgets/app/Header";
import Footer from "@widgets/app/Footer";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Badge } from "@shared/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";
import { Search, MapPin, DollarSign, Clock, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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

const categories = [
  "Всі категорії",
  "Електроніка",
  "Смартфони",
  "Дизайн",
  "Освіта",
  "Будівництво",
  "Послуги"
];

const Browse = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState("");
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (category: string) => {
    if (category === "Всі категорії") {
      setSelectedCategories([]);
      return;
    }
    
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const removeCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter(c => c !== category));
  };
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
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Пошук запитів..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category Tags */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Категорії:</p>
              <div className="relative">
                <div className="overflow-x-auto pb-2 scrollbar-thin">
                  <div className="flex gap-2 min-w-min">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategories.includes(category) || (category === "Всі категорії" && selectedCategories.length === 0) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleCategory(category)}
                        className="rounded-full whitespace-nowrap flex-shrink-0"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Select value={budgetRange} onValueChange={setBudgetRange}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Бюджет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Будь-який</SelectItem>
                  <SelectItem value="0-5000">До 5 000 грн</SelectItem>
                  <SelectItem value="5000-15000">5 000 - 15 000 грн</SelectItem>
                  <SelectItem value="15000-50000">15 000 - 50 000 грн</SelectItem>
                  <SelectItem value="50000+">Більше 50 000 грн</SelectItem>
                </SelectContent>
              </Select>

              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Локація" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Будь-яка</SelectItem>
                  <SelectItem value="kyiv">Київ</SelectItem>
                  <SelectItem value="lviv">Львів</SelectItem>
                  <SelectItem value="odesa">Одеса</SelectItem>
                  <SelectItem value="kharkiv">Харків</SelectItem>
                  <SelectItem value="remote">Віддалено</SelectItem>
                  <SelectItem value="online">Онлайн</SelectItem>
                </SelectContent>
              </Select>

              {(selectedCategories.length > 0 || budgetRange || location || searchQuery) && (
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSelectedCategories([]);
                    setBudgetRange("");
                    setLocation("");
                    setSearchQuery("");
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Скинути фільтри
                </Button>
              )}
            </div>

            {/* Active Filters */}
            {selectedCategories.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                <p className="text-sm text-muted-foreground mr-2">Активні фільтри:</p>
                {selectedCategories.map((category) => (
                  <Badge key={category} variant="secondary" className="gap-1">
                    {category}
                    <button onClick={() => removeCategory(category)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Знайдено <span className="font-semibold text-foreground">{mockRequests.length}</span> активних запитів
            </p>
          </div>

          {/* Requests Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {mockRequests.map((request) => (
              <Link 
                key={request.id}
                to={`/request/${request.id}`}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg hover:shadow-blue/20 transition-all h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {request.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {request.timeAgo}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {request.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {request.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium text-foreground">{request.budget}</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {request.location}
                    </div>

                    <div className="pt-3 border-t border-border">
                      <span className="text-primary font-medium">
                        {request.proposalsCount} пропозицій
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
