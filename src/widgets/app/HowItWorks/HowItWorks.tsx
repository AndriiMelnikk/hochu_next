'use client';

import { FileText, Users2, MessageCircle, Handshake } from 'lucide-react';
import { useLingui } from '@lingui/react';

const steps = [
  {
    icon: FileText,
    number: '01',
    titleKey: 'common.home.howItWorks.step1.title',
    descriptionKey: 'common.home.howItWorks.step1.description',
  },
  {
    icon: Users2,
    number: '02',
    titleKey: 'common.home.howItWorks.step2.title',
    descriptionKey: 'common.home.howItWorks.step2.description',
  },
  {
    icon: MessageCircle,
    number: '03',
    titleKey: 'common.home.howItWorks.step3.title',
    descriptionKey: 'common.home.howItWorks.step3.description',
  },
  {
    icon: Handshake,
    number: '04',
    titleKey: 'common.home.howItWorks.step4.title',
    descriptionKey: 'common.home.howItWorks.step4.description',
  },
];

const HowItWorks = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('common.home.howItWorks.title.prefix')}{' '}
            <span className="text-primary">{t('common.home.howItWorks.title.emphasis')}</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('common.home.howItWorks.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-border" />
              )}

              <div className="relative flex gap-6 group">
                {/* Number circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-red z-10 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card p-6 rounded-xl border-2 border-border group-hover:border-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-primary p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(step.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
