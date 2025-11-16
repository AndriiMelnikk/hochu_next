import Header from "@/widgets/app/Header";
import Hero from "@/widgets/app/Hero";
import Features from "@/widgets/app/Features";
import HowItWorks from "@/widgets/app/HowItWorks";
import Footer from "@/widgets/app/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

