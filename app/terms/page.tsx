import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Умови використання</h1>
          <Card className="p-8">
            <p className="text-muted-foreground">Тут будуть умови використання платформи.</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

