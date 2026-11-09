'use client';

import { useLingui } from '@lingui/react';

export default function TermsContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const sections = [
    {
      title: t('terms.sections.1.title'),
      content: [
        t('terms.sections.1.item1'),
        t('terms.sections.1.item2'),
        t('terms.sections.1.item3'),
      ],
    },
    {
      title: t('terms.sections.2.title'),
      content: [
        t('terms.sections.2.item1'),
        t('terms.sections.2.item2'),
        t('terms.sections.2.item3'),
        t('terms.sections.2.item4'),
      ],
    },
    {
      title: t('terms.sections.3.title'),
      content: [
        t('terms.sections.3.item1'),
        t('terms.sections.3.item2'),
        t('terms.sections.3.item3'),
        t('terms.sections.3.item4'),
      ],
    },
    {
      title: t('terms.sections.4.title'),
      content: [
        t('terms.sections.4.item1'),
        t('terms.sections.4.item2'),
        t('terms.sections.4.item3'),
        t('terms.sections.4.item4'),
      ],
    },
    {
      title: t('terms.sections.5.title'),
      content: [
        t('terms.sections.5.item1'),
        t('terms.sections.5.item2'),
        t('terms.sections.5.item3'),
        t('terms.sections.5.item4'),
      ],
    },
    {
      title: t('terms.sections.6.title'),
      content: [
        t('terms.sections.6.item1'),
        t('terms.sections.6.item2'),
        t('terms.sections.6.item3'),
        t('terms.sections.6.item4'),
      ],
    },
    {
      title: t('terms.sections.7.title'),
      content: [
        t('terms.sections.7.item1'),
        t('terms.sections.7.item2'),
        t('terms.sections.7.item3'),
        t('terms.sections.7.item4'),
      ],
    },
    {
      title: t('terms.sections.8.title'),
      content: [
        t('terms.sections.8.item1'),
        t('terms.sections.8.item2'),
        t('terms.sections.8.item3'),
        t('terms.sections.8.item4'),
      ],
    },
    {
      title: t('terms.sections.9.title'),
      content: [
        t('terms.sections.9.item1'),
        t('terms.sections.9.item2'),
        t('terms.sections.9.item3'),
        t('terms.sections.9.item4'),
      ],
    },
    {
      title: t('terms.sections.10.title'),
      content: [
        t('terms.sections.10.item1'),
        t('terms.sections.10.item2'),
        t('terms.sections.10.item3'),
      ],
    },
  ];

  return (
    <div className="bg-v2-surface">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-v2-surface-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-[550] mb-6 text-v2-primary">
            {t('terms.hero.title')}
          </h1>
          <p className="text-lg text-v2-muted">{t('terms.hero.lastUpdated')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-v2-muted mb-12">{t('terms.intro')}</p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-v2-surface rounded-v2-2xl p-8 shadow-sm border border-v2-border"
                >
                  <h2 className="text-2xl font-[550] mb-6">{section.title}</h2>
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-v2-muted leading-relaxed flex">
                        <span className="text-v2-primary mr-3 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-v2-surface-subtle rounded-v2-2xl border border-v2-border">
              <h3 className="text-xl font-semibold mb-4">{t('terms.important.title')}</h3>
              <p className="text-v2-muted leading-relaxed">{t('terms.important.text')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
