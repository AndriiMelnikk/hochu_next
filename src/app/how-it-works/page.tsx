import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import HowItWorksWidget from "@/widgets/app/HowItWorks";
import { Button } from "@shared/ui/button";
import { HeroBadge } from "@shared/ui/hero-badge";
import { CreateRequestButton } from "@/features/requests";
import Link from "next/link";
import { routes } from "@/app/router/routes";
import { UserCircle, Store, CheckCircle2 } from "lucide-react";
import { getLocaleFromHeaders } from "@/locales/locale";
import { getMetadataForRoute } from "@/locales/route-metadata";

export async function generateMetadata() {
  const locale = await getLocaleFromHeaders();
  return getMetadataForRoute(locale, 'HOW_IT_WORKS');
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-4 relative z-10 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <HeroBadge icon="📖" className="mb-6">
              Інструкція користувача
            </HeroBadge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Як працює <span className="text-primary">Hochu</span>?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Простий та ефективний спосіб знайти те, що вам потрібно, або знайти клієнтів
            </p>
          </div>
        </div>

        {/* Process Section */}
        <HowItWorksWidget />

        {/* For Buyers & Sellers */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* For Buyers */}
              <div className="bg-card rounded-xl p-8 border-2 border-border hover:border-primary transition-colors">
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                    <UserCircle className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold">Для покупців</h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Економія часу</h4>
                      <p className="text-muted-foreground text-sm">Не треба шукати серед тисяч оголошень — просто опишіть що потрібно</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Багато пропозицій</h4>
                      <p className="text-muted-foreground text-sm">Отримайте десятки варіантів від різних продавців</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Порівняння</h4>
                      <p className="text-muted-foreground text-sm">Легко порівнюйте ціни, умови та рейтинги продавців</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Безпека</h4>
                      <p className="text-muted-foreground text-sm">Рейтинги та відгуки допоможуть обрати надійного продавця</p>
                    </div>
                  </div>
                </div>

                <CreateRequestButton className="w-full" />
              </div>

              {/* For Sellers */}
              <div className="bg-card rounded-xl p-8 border-2 border-border hover:border-primary transition-colors">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg mr-4">
                    <Store className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold">Для продавців</h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Активний пошук</h4>
                      <p className="text-muted-foreground text-sm">Знаходьте клієнтів, які шукають саме те, що ви пропонуєте</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Готові клієнти</h4>
                      <p className="text-muted-foreground text-sm">Люди які створили запит вже готові купувати</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Прямий контакт</h4>
                      <p className="text-muted-foreground text-sm">Вбудований чат для швидкого обговорення деталей</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Репутація</h4>
                      <p className="text-muted-foreground text-sm">Будуйте рейтинг через відгуки задоволених клієнтів</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg" asChild>
                  <Link href={routes.BROWSE}>Переглянути запити</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground shadow-red max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готові розпочати?
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Приєднуйтесь до тисяч користувачів, які вже знайшли те, що їм потрібно
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CreateRequestButton />
                <Button size="xl" variant="outline" className="bg-white/10 hover:bg-white/20 border-2 border-white text-white hover:text-white" asChild>
                  <Link href={routes.BROWSE}>Стати продавцем</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

