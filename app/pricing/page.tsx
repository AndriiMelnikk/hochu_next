import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Ціни</h1>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Базовий</h3>
              <p className="text-3xl font-bold mb-4">Безкоштовно</p>
              <ul className="space-y-2 mb-6">
                <li>5 запитів на місяць</li>
                <li>Базові функції</li>
              </ul>
              <Button className="w-full">Обрати</Button>
            </Card>
            <Card className="p-6 border-primary">
              <h3 className="text-2xl font-semibold mb-4">Про</h3>
              <p className="text-3xl font-bold mb-4">500 грн/міс</p>
              <ul className="space-y-2 mb-6">
                <li>Необмежена кількість запитів</li>
                <li>Пріоритетна підтримка</li>
              </ul>
              <Button className="w-full">Обрати</Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Бізнес</h3>
              <p className="text-3xl font-bold mb-4">2000 грн/міс</p>
              <ul className="space-y-2 mb-6">
                <li>Всі функції Pro</li>
                <li>API доступ</li>
              </ul>
              <Button className="w-full">Обрати</Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

