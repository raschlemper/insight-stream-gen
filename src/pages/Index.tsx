import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BenefitsSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
