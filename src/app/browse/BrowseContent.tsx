"use client";

import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Badge } from "@shared/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";
import { Loading } from "@shared/ui/loading";
import { Error } from "@shared/ui/error";
import { CategoryFilterButton } from "@/features/requests";
import { Search, MapPin, DollarSign, Clock, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRequests } from "@/entities/request";
import { REQUEST_CATEGORIES } from "@/entities/request";
import { routes } from "@/app/router/routes";

export default function BrowseContent() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState("");
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, error } = useRequests({
    category: selectedCategories.length > 0 ? selectedCategories[0] : undefined,
    search: searchQuery || undefined,
    location: location || undefined,
  });

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

  const requests = data?.results || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
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
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4" >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Пошук запитів..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

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
            </div>

            {/* Category Tags */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Категорії:</p>
              <div className="relative">
                <div className="overflow-x-auto pb-2 scrollbar-thin">
                  <div className="flex gap-2 min-w-min">
                    {REQUEST_CATEGORIES.map((category) => (
                      <CategoryFilterButton
                        key={category}
                        category={category}
                        isSelected={selectedCategories.includes(category) || (category === "Всі категорії" && selectedCategories.length === 0)}
                        onClick={() => toggleCategory(category)}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
              {isLoading ? (
                <Loading variant="inline" />
              ) : error ? (
                <Error variant="inline" message="Помилка завантаження" />
              ) : (
                <>
                  Знайдено <span className="font-semibold text-foreground">{data?.count || 0}</span> активних запитів
                </>
              )}
            </p>
          </div>

          {/* Requests Grid */}
          {isLoading ? (
            <Loading variant="block" />
          ) : error ? (
            <Error variant="block" message="Помилка завантаження запитів" />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {requests.map((request) => (
                <Link 
                  key={request.id}
                  href={`${routes.REQUEST}/${request.id}`}
                  className="group"
                >
                  <div className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg hover:shadow-blue/20 transition-all h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {request.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {new Date(request.createdAt).toLocaleDateString()}
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
                        <span className="font-medium text-foreground">{request.budgetMin}-{request.budgetMax} грн</span>
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
          )}

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
}
