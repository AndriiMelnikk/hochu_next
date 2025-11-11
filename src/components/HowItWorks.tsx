import { FileText, Users2, MessageCircle, Handshake } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Створіть запит",
    description: "Опишіть що вам потрібно: товар, послугу, вкажіть бюджет та терміни"
  },
  {
    icon: Users2,
    number: "02",
    title: "Отримайте пропозиції",
    description: "Продавці самі знайдуть ваш запит та запропонують свої варіанти"
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Обговоріть деталі",
    description: "Спілкуйтесь через вбудований чат, порівнюйте пропозиції"
  },
  {
    icon: Handshake,
    number: "04",
    title: "Закрийте угоду",
    description: "Оберіть найкращу пропозицію та залиште відгук після виконання"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Як це <span className="bg-gradient-secondary bg-clip-text text-transparent">працює</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всього 4 простих кроки до вашої мети
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 z-0" />
              )}
              
              <div className="relative z-10 bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border group hover:border-primary">
                <div className="bg-gradient-primary bg-clip-text text-transparent text-6xl font-bold mb-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  {step.number}
                </div>
                
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="h-12 w-12" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
