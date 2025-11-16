import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { routes } from "@/app/router/routes";

export default function BlogListPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Блог</h1>
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Стаття 1</h2>
              <p className="text-muted-foreground mb-4">Опис статті...</p>
              <Link href={`${routes.BLOG}/1`} className="text-primary hover:underline">
                Читати далі
              </Link>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

