"use client";

import { Check } from "lucide-react";
import { Button } from "@shared/ui/button";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import Link from "next/link";
import { routes } from "@/app/router/routes";

export default function PricingContent() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "назавжди",
      description: "Ідеально для початку роботи",
      features: [
        "До 3 пропозицій на місяць",
        "Базовий профіль",
        "Перегляд запитів",
        "Чат з користувачами",
        "Базова підтримка"
      ],
      limitations: [
        "Без статистики",
        "Без аналітики",
        "Обмежена кількість пропозицій"
      ],
      buttonText: "Почати безкоштовно",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "199",
      period: "на місяць",
      description: "Для професіоналів та бізнесу",
      features: [
        "До 50 пропозицій на місяць",
        "Розширена аналітика",
        "Детальна статистика",
        "Пріоритетна підтримка",
        "Просування пропозицій",
        "Розширений профіль",
        "Бейджі верифікації",
        "Експорт даних"
      ],
      limitations: [],
      buttonText: "Оформити підписку",
      buttonVariant: "default" as const,
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Прості та зрозумілі тарифи
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оберіть план, який підходить саме вам. Без прихованих платежів.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-8 px-4 pb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-3xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${
                  plan.popular 
                    ? "border-primary scale-105" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярний вибір
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== "0" && <span className="text-muted-foreground">грн</span>}
                  </div>
                  <p className="text-muted-foreground mt-1">{plan.period}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start gap-3 opacity-50">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-muted-foreground"></div>
                      </div>
                      <span className="text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.buttonVariant}
                  className="w-full text-lg py-6"
                  asChild
                >
                  <Link href={routes.REGISTER}>{plan.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часті питання</h2>
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Чи можу я змінити план пізніше?</h3>
                <p className="text-muted-foreground">
                  Так, ви можете в будь-який момент перейти на Pro план або повернутися до Free.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Які способи оплати доступні?</h3>
                <p className="text-muted-foreground">
                  Ми приймаємо всі банківські картки (Visa, Mastercard), а також Google Pay та Apple Pay.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Чи є пробний період для Pro?</h3>
                <p className="text-muted-foreground">
                  Так, всі нові користувачі отримують 7 днів безкоштовного доступу до Pro функцій.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
