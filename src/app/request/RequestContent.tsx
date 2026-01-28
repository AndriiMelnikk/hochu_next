'use client';

import Header from '@/widgets/app/Header';
import Footer from '@/widgets/app/Footer';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { Badge } from '@shared/ui/badge';
import { Loading } from '@shared/ui/loading';
import { Error } from '@shared/ui/error';
import { CategoryFilterButton, RequestCard } from '@/features/requests';
import { Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRequestStore, REQUEST_CATEGORIES } from '@/entities/request';

export default function RequestContent() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  // These seem unused in the original code but kept state for them
  const [location, setLocation] = useState('');

  const { requests, loading, error, fetchRequests } = useRequestStore();

  useEffect(() => {
    fetchRequests({
      category: selectedCategories.length > 0 ? selectedCategories.join(',') : undefined,
      search: searchQuery || undefined,
      location: location || undefined,
    });
  }, [selectedCategories, searchQuery, location, fetchRequests]);

  const toggleCategory = (category: string) => {
    if (category === 'Всі категорії') {
      setSelectedCategories([]);
      return;
    }

    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const removeCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };

  const requestResults = requests?.results || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Знайдіть{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                своїх клієнтів
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Переглядайте запити та пропонуйте свої послуги
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-2xl shadow-md p-6 mb-8 border border-border">
            {/* Search Bar */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    {REQUEST_CATEGORIES.map((category) => (
                      <CategoryFilterButton
                        key={category}
                        category={category}
                        isSelected={
                          selectedCategories.includes(category) ||
                          (category === 'Всі категорії' && selectedCategories.length === 0)
                        }
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
              {loading ? (
                <Loading variant="inline" />
              ) : error ? (
                <Error variant="inline" message="Помилка завантаження" />
              ) : (
                <>
                  Знайдено{' '}
                  <span className="font-semibold text-foreground">{requests?.count || 0}</span>{' '}
                  активних запитів
                </>
              )}
            </p>
          </div>

          {/* Requests Grid */}
          {loading ? (
            <Loading variant="block" />
          ) : error ? (
            <Error variant="block" message="Помилка завантаження запитів" />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {requestResults.map((request) => (
                <RequestCard key={request._id.toString()} request={request} />
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
