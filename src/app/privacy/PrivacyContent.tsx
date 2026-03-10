'use client';

import { Shield, Lock, Eye, UserCheck, Database } from 'lucide-react';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';

export default function PrivacyContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const principles = [
    {
      icon: Shield,
      title: t('privacy.principles.protection.title'),
      description: t('privacy.principles.protection.desc'),
    },
    {
      icon: Lock,
      title: t('privacy.principles.privacy.title'),
      description: t('privacy.principles.privacy.desc'),
    },
    {
      icon: Eye,
      title: t('privacy.principles.transparency.title'),
      description: t('privacy.principles.transparency.desc'),
    },
    {
      icon: UserCheck,
      title: t('privacy.principles.control.title'),
      description: t('privacy.principles.control.desc'),
    },
  ];

  const sections = [
    {
      title: t('privacy.section1.title'),
      content: [
        t('privacy.section1.item1'),
        t('privacy.section1.item2'),
        t('privacy.section1.item3'),
        t('privacy.section1.item4'),
        t('privacy.section1.item5'),
      ],
    },
    {
      title: t('privacy.section2.title'),
      content: [
        t('privacy.section2.item1'),
        t('privacy.section2.item2'),
        t('privacy.section2.item3'),
        t('privacy.section2.item4'),
        t('privacy.section2.item5'),
        t('privacy.section2.item6'),
      ],
    },
    {
      title: t('privacy.section3.title'),
      content: [
        t('privacy.section3.item1'),
        t('privacy.section3.item2'),
        t('privacy.section3.item3'),
        t('privacy.section3.item4'),
        t('privacy.section3.item5'),
      ],
    },
    {
      title: t('privacy.section4.title'),
      content: [
        t('privacy.section4.item1'),
        t('privacy.section4.item2'),
        t('privacy.section4.item3'),
        t('privacy.section4.item4'),
        t('privacy.section4.item5'),
      ],
    },
    {
      title: t('privacy.section5.title'),
      content: [
        t('privacy.section5.item1'),
        t('privacy.section5.item2'),
        t('privacy.section5.item3'),
        t('privacy.section5.item4'),
        t('privacy.section5.item5'),
        t('privacy.section5.item6'),
      ],
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            {t('privacy.hero.title')}
          </h1>
          <p className="text-lg text-muted-foreground">{t('privacy.hero.lastUpdated')}</p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('privacy.principles.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-12">{t('privacy.intro')}</p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground leading-relaxed flex">
                        <span className="text-primary mr-3 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary" />
                {t('privacy.contact.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacy.contact.desc')}
              </p>
              <p
                className="text-foreground font-medium"
                dangerouslySetInnerHTML={{ __html: t('privacy.contact.info') }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
