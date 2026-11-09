'use client';

import { useLingui } from '@lingui/react';

import { JsonLd } from '@/shared/seo/JsonLd';
import { getFaqPageJsonLd } from '@/shared/seo/schemas';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  Heading,
  Section,
} from '@/ui-v2';

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
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <JsonLd
            data={getFaqPageJsonLd(items.map(({ question, answer }) => ({ question, answer })))}
          />
          <div className="mb-8">
            <Heading level="h2" as="h2" className="mb-3">
              {t('common.home.faq.title')}
            </Heading>
            <p className="text-lg text-v2-muted">{t('common.home.faq.subtitle')}</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem key={item.key} value={item.key}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
