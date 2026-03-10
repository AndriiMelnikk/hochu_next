'use client';

import { Button } from '@shared/ui/button';
import { HeroBadge } from '@shared/ui/hero-badge';
import { CreateRequestButton } from '@/features/requests';
import Link from 'next/link';
import { Search, MessageSquare, CheckCircle } from 'lucide-react';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';

const Hero = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

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
                {t('common.home.hero.badge')}
              </HeroBadge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('common.home.hero.title.prefix')}{' '}
                <span className="text-primary">{t('common.home.hero.title.emphasis')}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('common.home.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <CreateRequestButton />
                <Button size="xl" variant="outline" className="border-2" asChild>
                  <Link href={routes.REQUEST}>{t('common.nav.viewRequests')}</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t('common.home.hero.benefit.free')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t('common.home.hero.benefit.fast')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t('common.home.hero.benefit.safe')}</span>
                </div>
              </div>
            </div>

            {/* Права частина - статистика */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <Search className="h-10 w-10 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {t('common.home.hero.stats.createTime.value')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t('common.home.hero.stats.createTime.label')}
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <MessageSquare className="h-10 w-10 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {t('common.home.hero.stats.proposals.value')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t('common.home.hero.stats.proposals.label')}
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-colors">
                <CheckCircle className="h-10 w-10 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {t('common.home.hero.stats.successRate.value')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t('common.home.hero.stats.successRate.label')}
                </div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-red">
                <div className="text-3xl font-bold mb-1">
                  {t('common.home.hero.stats.users.value')}
                </div>
                <div className="text-sm opacity-90">{t('common.home.hero.stats.users.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
