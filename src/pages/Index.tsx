import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicosSection from "@/components/ServicosSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ProcessoSection from "@/components/ProcessoSection";
import PricingSection from "@/components/PricingSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import LeadFormSection from "@/components/LeadFormSection";
import { ArrowUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-0 md:space-y-16 transition-soft">
        <HeroSection />
        <div className="transition-soft"><ServicosSection /></div>
        <div className="transition-soft"><DiferenciaisSection /></div>
        <div className="transition-soft"><ProcessoSection /></div>
        <div className="transition-soft"><PricingSection /></div>
        <div className="transition-soft"><LeadFormSection /></div>
        <SocialProofSection />
        <FAQSection />
      </main>
      {/* Scroll to Top */}
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-accent text-accent-foreground shadow-elegant p-3 hover:opacity-90 transition-soft"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
      <Footer />
    </div>
  );
};

export default Index;
