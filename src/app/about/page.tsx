import { Users, Target, Heart, Zap } from "lucide-react";
import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Спільнота",
      description: "Ми об'єднуємо людей, які хочуть отримати послуги, з тими, хто готовий їх надати"
    },
    {
      icon: Target,
      title: "Прозорість",
      description: "Чіткі умови, відкриті відгуки та прозорі ціни для всіх учасників"
    },
    {
      icon: Heart,
      title: "Довіра",
      description: "Система рейтингів та відгуків допомагає будувати довірчі відносини"
    },
    {
      icon: Zap,
      title: "Швидкість",
      description: "Миттєве з'єднання між тими, хто потребує послуги, та виконавцями"
    }
  ];

  const stats = [
    { value: "5000+", label: "Користувачів" },
    { value: "10000+", label: "Виконаних замовлень" },
    { value: "50+", label: "Категорій послуг" },
    { value: "4.8/5", label: "Середній рейтинг" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Про Hochu
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hochu — це платформа, яка з'єднує людей, які потребують послуг, 
              з професіоналами, готовими їх надати. Ми створили простір, 
              де кожен може знайти потрібну послугу або запропонувати свої навички.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наша місія</h2>
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Ми прагнемо створити найпростіший та найбезпечніший спосіб 
                знайти виконавця для будь-якої послуги. Незалежно від того, 
                чи потрібен вам ремонт, навчання, доставка чи будь-яка інша послуга — 
                на Hochu ви знайдете відповідних фахівців.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Для виконавців ми надаємо можливість розвивати свій бізнес, 
                знаходити нових клієнтів та будувати репутацію через систему 
                відгуків та рейтингів.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наші цінності</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary transition-all hover:shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наша історія</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hochu був створений у 2024 році з метою вирішити просту проблему: 
                як легко знайти надійного виконавця для повсякденних завдань?
              </p>
              <p>
                Ми побачили, що багато людей витрачають години на пошук потрібних 
                послуг, а професіонали втрачають потенційних клієнтів через брак 
                зручної платформи.
              </p>
              <p>
                Сьогодні Hochu — це зростаюча спільнота тисяч користувачів, 
                які щодня знаходять один одного та успішно співпрацюють.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

