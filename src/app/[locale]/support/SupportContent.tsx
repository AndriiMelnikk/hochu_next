'use client';

import Link from '@/shared/ui/link';
import { routes } from '@/app/router/routes';
import { useLingui } from '@lingui/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Container,
  CtaBanner,
  PageHero,
} from '@/ui-v2';

export default function SupportContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const faqs = [
    {
      question: t('support.faq.items.1.question'),
      answer: t('support.faq.items.1.answer'),
    },
    {
      question: t('support.faq.items.2.question'),
      answer: t('support.faq.items.2.answer'),
    },
    {
      question: t('support.faq.items.3.question'),
      answer: t('support.faq.items.3.answer'),
    },
    {
      question: t('support.faq.items.4.question'),
      answer: t('support.faq.items.4.answer'),
    },
    {
      question: t('support.faq.items.5.question'),
      answer: t('support.faq.items.5.answer'),
    },
    {
      question: t('support.faq.items.6.question'),
      answer: t('support.faq.items.6.answer'),
    },
  ];

  return (
    <div className="ui-v2">
      <Container className="py-6 md:py-8">
        <PageHero
          as="h2"
          title={t('support.hero.title')}
          subtitle={t('support.hero.subtitle')}
          action={
            <Button asChild className="h-12 px-8 text-base">
              <Link href={routes.CONTACT}>{t('support.contact.button.email')}</Link>
            </Button>
          }
        />

        <section className="mx-auto mt-16 max-w-3xl">
          <h2 className="mb-8 text-4xl font-[450] tracking-tight">{t('support.faq.title')}</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-v2-muted">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <div className="my-16">
          <CtaBanner
            title={t('support.contact.title')}
            description={t('support.contact.subtitle')}
            actions={
              <Link
                href={routes.CONTACT}
                className="inline-flex h-12 items-center rounded-v2-pill bg-white px-6 font-semibold text-black hover:bg-white/90"
              >
                {t('support.contact.button.email')}
              </Link>
            }
          />
        </div>
      </Container>
    </div>
  );
}
