'use client';

import { ShoppingBag, Users, Zap, Shield } from 'lucide-react';
import { useLingui } from '@lingui/react';

const features = [
  {
    icon: ShoppingBag,
    titleKey: 'common.home.features.buyers.title',
    descriptionKey: 'common.home.features.buyers.description',
    color: 'text-primary',
  },
  {
    icon: Users,
    titleKey: 'common.home.features.sellers.title',
    descriptionKey: 'common.home.features.sellers.description',
    color: 'text-secondary',
  },
  {
    icon: Zap,
    titleKey: 'common.home.features.fastSimple.title',
    descriptionKey: 'common.home.features.fastSimple.description',
    color: 'text-primary',
  },
  {
    icon: Shield,
    titleKey: 'common.home.features.safe.title',
    descriptionKey: 'common.home.features.safe.description',
    color: 'text-secondary',
  },
];

const Features = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('common.home.features.title.prefix')} <span className="text-primary">Hochu</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('common.home.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`${feature.color} p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
