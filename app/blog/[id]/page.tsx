import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Card } from "@/components/ui/card";

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8">
            <h1 className="text-4xl font-bold mb-4">Назва статті</h1>
            <p className="text-muted-foreground">Контент статті...</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

