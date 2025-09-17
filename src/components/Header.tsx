import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const Header = () => {
  const { lang, toggle, setLang } = useI18n();

  const handleContactClick = () => {
    const el = document.getElementById("contato");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "contato";
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#" className="inline-flex items-center">
              <img src="/img/logo.png" alt="H7 Advisory" className="h-8 w-auto" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-foreground hover:text-accent transition-colors">
              {lang === "en" ? "Services" : "Serviços"}
            </a>
            <a href="#processo" className="text-foreground hover:text-accent transition-colors">
              {lang === "en" ? "How it works" : "Como Funciona"}
            </a>
            <a href="#precos" className="text-foreground hover:text-accent transition-colors">
              {lang === "en" ? "Pricing" : "Preços"}
            </a>
            <a href="#faq" className="text-foreground hover:text-accent transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTAs */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center gap-1 bg-muted/60 backdrop-blur rounded-full px-2 py-1 sm:px-3 sm:py-1.5 border border-border/50 transition-soft shadow-sm">
              <div className="relative group">
                <button aria-label="English" onClick={() => setLang("en")} className={`p-1.5 sm:p-2 rounded-full hover:scale-105 transition-soft ${lang === 'en' ? 'ring-2 ring-accent/60' : ''}`}>
                  <img src="https://flagcdn.com/w40/us.png" alt="English" className="h-4 w-5 sm:h-5 sm:w-7" />
                </button>
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity">English</span>
              </div>
              <div className="relative group">
                <button aria-label="Português" onClick={() => setLang("pt")} className={`p-1.5 sm:p-2 rounded-full hover:scale-105 transition-soft ${lang === 'pt' ? 'ring-2 ring-accent/60' : ''}`}>
                  <img src="https://flagcdn.com/w40/br.png" alt="Português" className="h-4 w-5 sm:h-5 sm:w-7" />
                </button>
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity">Português</span>
              </div>
            </div>
            <a href="https://wa.me/17275547736" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="sm" className="hidden sm:flex">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </a>
            <Button variant="professional" size="sm" onClick={handleContactClick} className="text-xs sm:text-sm">
              {lang === "en" ? "Contact Us" : "Fale Conosco"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;