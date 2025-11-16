"use client";

import { Search, BookOpen, MessageCircle, HelpCircle, FileText, Video, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import Link from "next/link";
import { routes } from "@/app/router/routes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SupportPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "Початок роботи",
      description: "Як створити акаунт та почати використовувати Hochu",
      articles: 12
    },
    {
      icon: MessageCircle,
      title: "Замовлення та пропозиції",
      description: "Як створювати запити та надсилати пропозиції",
      articles: 8
    },
    {
      icon: HelpCircle,
      title: "Оплата та розрахунки",
      description: "Інформація про платежі та фінансові операції",
      articles: 6
    },
    {
      icon: FileText,
      title: "Профіль та налаштування",
      description: "Керування вашим профілем та параметрами",
      articles: 10
    },
    {
      icon: Video,
      title: "Відеоінструкції",
      description: "Навчальні відео для швидкого старту",
      articles: 5
    }
  ];

  const faqs = [
    {
      question: "Як створити запит на послугу?",
      answer: "Натисніть кнопку 'Створити запит' у верхній навігації, заповніть форму з описом потрібної послуги, вкажіть бюджет та локацію. Після публікації виконавці зможуть надсилати свої пропозиції."
    },
    {
      question: "Як надіслати пропозицію на виконання?",
      answer: "Перегляньте доступні запити в розділі 'Огляд', оберіть той, що вас цікавить, та натисніть 'Запропонувати'. Опишіть свої послуги, вкажіть ціну та терміни виконання."
    },
    {
      question: "Як працює система оплати?",
      answer: "Оплата здійснюється безпосередньо між замовником та виконавцем після узгодження умов. Hochu не приймає оплату, а лише надає платформу для зв'язку."
    },
    {
      question: "Що робити, якщо виникла проблема з виконавцем?",
      answer: "Ви можете звернутися до нашої служби підтримки через розділ 'Контакти'. Ми допоможемо вирішити конфлікт та захистимо ваші права як користувача платформи."
    },
    {
      question: "Чи безпечно використовувати платформу?",
      answer: "Так, ми використовуємо захищене з'єднання та перевіряємо користувачів. Система відгуків допомагає оцінити надійність виконавців перед початком співпраці."
    },
    {
      question: "Як підвищити свій рейтинг?",
      answer: "Виконуйте замовлення якісно та вчасно, підтримуйте зв'язок із клієнтами, збирайте позитивні відгуки. Активні та надійні користувачі отримують вищий рейтинг та більше замовлень."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
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
        </section>

        {/* Categories */}
        <section className="py-12 px-4">
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
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часті питання</h2>
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
            <h2 className="text-3xl font-bold mb-4">Не знайшли відповідь?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Наша команда підтримки готова допомогти вам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={routes.CONTACT}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Зв'язатися з підтримкою
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={routes.CONTACT}>
                  <Mail className="w-5 h-5 mr-2" />
                  Написати Email
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

