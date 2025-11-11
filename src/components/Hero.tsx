import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MessageSquare, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-3 duration-1000">
            <span className="mr-2">🎯</span>
            Інноваційна платформа бажань і можливостей
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Не шукай —{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              скажи що хочеш
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Замість нескінченних пошуків просто опиши свою потребу, а ті, хто може її виконати, самі тебе знайдуть
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button size="lg" className="bg-gradient-primary text-lg px-8 shadow-glow hover:scale-105 transition-transform" asChild>
              <Link to="/create">
                Створити запит
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 hover:bg-accent" asChild>
              <Link to="/browse">
                Переглянути запити
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
            <div className="flex flex-col items-center">
              <Search className="h-12 w-12 text-primary mb-3" />
              <div className="text-3xl font-bold text-foreground">5 хв</div>
              <div className="text-muted-foreground">Середній час створення запиту</div>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="h-12 w-12 text-secondary mb-3" />
              <div className="text-3xl font-bold text-foreground">10+</div>
              <div className="text-muted-foreground">Пропозицій на запит</div>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-primary mb-3" />
              <div className="text-3xl font-bold text-foreground">95%</div>
              <div className="text-muted-foreground">Успішних угод</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
