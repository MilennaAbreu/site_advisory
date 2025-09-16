import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const HeroSection = () => {
  const { lang } = useI18n();
  const handleContactClick = () => {
    const el = document.getElementById("contato");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "contato";
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/img/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 gradient-hero opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/10 rounded-full px-5 py-2.5 mb-10">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">{lang === 'en' ? 'Extreme Speed • Zero Red Tape' : 'Velocidade Extrema • Zero Enrolação'}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero text-foreground mb-8">
            {lang === 'en' ? 'Open your US company in ' : 'Abra sua empresa nos EUA em '}
            <span className="relative inline-block text-accent">
              <span className="relative z-10 text-glow-soft">{lang === 'en' ? 'just DAYS' : 'poucos DIAS'}</span>
            </span>, {lang === 'en' ? 'not months' : 'não em meses'}
          </h1>

          {/* Subheadline */}
          <p className="text-subheading text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {lang === 'en' 
              ? 'The fastest and simplest way to start, expand and manage your US business: Accounting, Taxes and compliance.'
              : 'A maneira mais rápida e simples de iniciar, expandir e gerenciar seu negócio nos EUA: Contabilidade, Impostos e regularizações fiscais.'}
          </p>

          {/* CTA único */}
          <div className="flex items-center justify-center">
            <Button variant="hero" size="xl" className="min-w-[320px] group" onClick={handleContactClick}>
              {lang === 'en' ? 'I want to open my US company' : 'Quero abrir minha empresa nos EUA'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-accent/10 rounded-lg animate-float" style={{
        animationDelay: '2s'
      }}></div>
      <div className="absolute top-1/3 right-8 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
