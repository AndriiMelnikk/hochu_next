'use client';

import { useLingui } from '@lingui/react';
import { Users, Target, Heart, Zap } from 'lucide-react';

export default function AboutContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const values = [
    {
      icon: Users,
      title: t('about.values.community.title'),
      description: t('about.values.community.description'),
    },
    {
      icon: Target,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
    },
    {
      icon: Heart,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description'),
    },
    {
      icon: Zap,
      title: t('about.values.speed.title'),
      description: t('about.values.speed.description'),
    },
  ];

  const stats = [
    { value: '5000+', label: t('about.stats.users') },
    { value: '10000+', label: t('about.stats.orders') },
    { value: '50+', label: t('about.stats.categories') },
    { value: '4.8/5', label: t('about.stats.rating') },
  ];

  return (
    <div className="bg-v2-surface">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-[550] mb-6 text-v2-primary">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-v2-muted leading-relaxed">{t('about.hero.description')}</p>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 px-4 bg-v2-surface-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-[550] text-v2-primary mb-2">{stat.value}</div>
                <div className="text-v2-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-[550] text-center mb-12">{t('about.mission.title')}</h2>
          <div className="bg-v2-surface rounded-3xl p-8 md:p-12  border border-v2-border">
            <p className="text-lg text-v2-ink leading-relaxed mb-6">
              {t('about.mission.paragraph1')}
            </p>
            <p className="text-lg text-v2-ink leading-relaxed">{t('about.mission.paragraph2')}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-v2-surface-subtle">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-[550] text-center mb-12">{t('about.values.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-v2-surface rounded-v2-2xl p-6  border border-v2-border hover:border-v2-primary transition-all hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-v2-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-v2-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-v2-muted">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-[550] text-center mb-12">{t('about.story.title')}</h2>
          <div className="space-y-6 text-lg text-v2-muted leading-relaxed">
            <p>{t('about.story.paragraph1')}</p>
            <p>{t('about.story.paragraph2')}</p>
            <p>{t('about.story.paragraph3')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
