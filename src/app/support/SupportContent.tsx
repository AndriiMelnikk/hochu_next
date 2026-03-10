'use client';

import { Search, BookOpen, MessageCircle, HelpCircle, FileText, Video, Mail } from 'lucide-react';
import { Input } from '@shared/ui/input';
import { Button } from '@shared/ui/button';
import Link from 'next/link';
import { routes } from '@/app/router/routes';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@shared/ui/accordion';
import { useLingui } from '@lingui/react';

export default function SupportContent() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(id);

  const categories = [
    {
      icon: BookOpen,
      title: t('support.categories.gettingStarted.title'),
      description: t('support.categories.gettingStarted.description'),
      articles: 12,
    },
    {
      icon: MessageCircle,
      title: t('support.categories.orders.title'),
      description: t('support.categories.orders.description'),
      articles: 8,
    },
    {
      icon: HelpCircle,
      title: t('support.categories.payments.title'),
      description: t('support.categories.payments.description'),
      articles: 6,
    },
    {
      icon: FileText,
      title: t('support.categories.profile.title'),
      description: t('support.categories.profile.description'),
      articles: 10,
    },
    {
      icon: Video,
      title: t('support.categories.video.title'),
      description: t('support.categories.video.description'),
      articles: 5,
    },
  ];

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
    <div className="bg-background">
      {/* Hero Section */}
      {/* <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Як ми можемо допомогти?
            </h1>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Пошук статей допомоги..."
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </section> */}

      {/* Categories */}
      {/* <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Категорії допомоги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={index}
                    href={routes.BLOG}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary transition-all hover:shadow-xl cursor-pointer group block"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <p className="text-sm text-primary font-medium">
                      {category.articles} статей
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section> */}

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('support.faq.title')}</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('support.contact.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t('support.contact.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={routes.CONTACT}>
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('support.contact.button.chat')}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={routes.CONTACT}>
                <Mail className="w-5 h-5 mr-2" />
                {t('support.contact.button.email')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
