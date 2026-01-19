'use client';

import { Button } from '@shared/ui/button';
import { HeroBadge } from '@shared/ui/hero-badge';
import { CreateRequestButton } from '@/features/requests';
import Link from 'next/link';
import { Search, MessageSquare, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-background">
      {/* Декоративні елементи */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Ліва частина */}
            <div className="text-center lg:text-left">
              <HeroBadge icon="🎯" className="mb-6">
                Реверсна платформа торгівлі
              </HeroBadge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Не шукай — <span className="text-primary">скажи що хочеш</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Створи запит на те, що потрібно. Продавці самі знайдуть тебе та запропонують свої
                варіанти. Обери найкращий!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <CreateRequestButton />
                <Button size="xl" variant="outline" className="border-2" asChild>
                  <Link href="/browse">Переглянути запити</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Безкоштовно</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Швидко</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Безпечно</span>
                </div>
              </div>
            </div>

            {/* Права частина - статистика */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <Search className="h-10 w-10 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">5 хв</div>
                <div className="text-sm text-muted-foreground">Створення запиту</div>
              </div>
              <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <MessageSquare className="h-10 w-10 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Пропозицій на запит</div>
              </div>
              <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <CheckCircle className="h-10 w-10 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Успішних угод</div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-red">
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-sm opacity-90">Активних користувачів</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
