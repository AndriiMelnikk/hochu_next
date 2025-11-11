import { ShoppingBag, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Для покупців",
    description: "Створіть запит за 5 хвилин, отримайте десятки пропозицій і оберіть найкращу",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Для продавців",
    description: "Знаходьте клієнтів активно — бачте що людям потрібно і пропонуйте свої послуги",
    color: "text-secondary"
  },
  {
    icon: Zap,
    title: "Швидко і просто",
    description: "Без нескінченних пошуків — швидке поєднання попиту та пропозиції",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Безпечно",
    description: "Рейтинги, відгуки, верифікація користувачів та захист від шахрайства",
    color: "text-secondary"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Чому <span className="bg-gradient-primary bg-clip-text text-transparent">Hochu</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ми змінюємо традиційний підхід до купівлі-продажу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className={`${feature.color} mb-4`}>
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
