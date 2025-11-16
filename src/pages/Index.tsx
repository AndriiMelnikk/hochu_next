import Navbar from "@widgets/app/Header";
import Hero from "@widgets/app/Hero";
import Features from "@widgets/app/Features";
import HowItWorks from "@widgets/app/HowItWorks";
import Footer from "@widgets/app/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
