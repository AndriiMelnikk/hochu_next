import Header from "@/widgets/app/Header";
import Footer from "@/widgets/app/Footer";
import HowItWorks from "@/widgets/app/HowItWorks";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

