'use client';

import { useLingui } from '@lingui/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { JsonLd } from '@/shared/seo/JsonLd';
import { getFaqPageJsonLd } from '@/shared/seo/schemas';

const FAQ_KEYS = [
  'whatIs',
  'howToCreate',
  'isFree',
  'howSellersWork',
  'isSafe',
  'howToStart',
] as const;

const Faq = () => {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const items = FAQ_KEYS.map((key) => ({
    key,
    question: t(`common.home.faq.${key}.question`),
    answer: t(`common.home.faq.${key}.answer`),
  }));

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <JsonLd
            data={getFaqPageJsonLd(items.map(({ question, answer }) => ({ question, answer })))}
          />

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('common.home.faq.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('common.home.faq.subtitle')}</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem key={item.key} value={item.key}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
