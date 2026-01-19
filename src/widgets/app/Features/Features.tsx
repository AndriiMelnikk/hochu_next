import { ShoppingBag, Users, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Для покупців',
    description: 'Створіть запит за 5 хвилин, отримайте десятки пропозицій і оберіть найкращу',
    color: 'text-primary',
  },
  {
    icon: Users,
    title: 'Для продавців',
    description: 'Знаходьте клієнтів активно — бачте що людям потрібно і пропонуйте свої послуги',
    color: 'text-secondary',
  },
  {
    icon: Zap,
    title: 'Швидко і просто',
    description: 'Без нескінченних пошуків — швидке поєднання попиту та пропозиції',
    color: 'text-primary',
  },
  {
    icon: Shield,
    title: 'Безпечно',
    description: 'Рейтинги, відгуки, верифікація користувачів та захист від шахрайства',
    color: 'text-secondary',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Чому <span className="text-primary">Hochu</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ми змінюємо традиційний підхід до купівлі-продажу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`${feature.color} p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
