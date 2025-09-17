import { Phone, Mail, MessageCircle, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/hooks/use-i18n";
const Footer = () => {
  const { lang } = useI18n();
  return <footer className="bg-muted/30 text-foreground">
      {/* CTA Section */}
      <div className="border-b border-border/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-heading mb-4">
              {lang === 'en' ? 'Ready to open your company in the US ' : 'Pronto para abrir sua empresa nos EUA '}
              <span className="text-accent">{lang === 'en' ? 'in just days?' : 'em poucos dias?'}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {lang === 'en' ? "Don't waste time with bureaucracy. Start today and have your company running this week." : 'Não perca mais tempo com processos burocráticos. \n              Comece hoje e tenha sua empresa funcionando esta semana.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cta" size="xl" className="min-w-[280px] font-medium normal-case">
                {lang === 'en' ? 'Open company now' : 'Abrir empresa agora'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/img/logo.png" alt="H7 Advisory" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {lang === 'en' ? 'The fastest and simplest way to start, expand and manage your US business: Accounting, Taxes and compliance.' : 'A maneira mais rápida e simples de iniciar, expandir e gerenciar seu negócio nos EUA: Contabilidade, Impostos e regularizações fiscais.'}
            </p>
            <div className="flex items-center gap-3 mb-6">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="Instagram" className="rounded-full">
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" aria-label="LinkedIn" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
            </div>
            
            {/* IRS Badge */}
            <div className="mb-6">
              <img src="/img/IRS.png" alt="IRS Certified" className="h-16 w-auto opacity-80" />
            </div>
            
            {/* Speed Guarantee Badge */}
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{lang === 'en' ? 'Quick Links' : 'Links Rápidos'}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  {lang === 'en' ? 'Services' : 'Serviços'}
                </a>
              </li>
              <li>
                <a href="#processo" className="text-muted-foreground hover:text-accent transition-colors">
                  {lang === 'en' ? 'How it works' : 'Como Funciona'}
                </a>
              </li>
              <li>
                <a href="#precos" className="text-muted-foreground hover:text-accent transition-colors">
                  {lang === 'en' ? 'Pricing' : 'Preços'}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{lang === 'en' ? 'Quick Contact' : 'Contato Rápido'}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground text-sm">{lang === 'en' ? 'Contact' : 'Contato'}: +1 (727) 554-7736</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground text-sm">{lang === 'en' ? 'Email' : 'E-mail'}: help@h7advisory.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground text-sm">{lang === 'en' ? 'Location' : 'Localização'}: T. Petersburg, Florida, US</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-muted-foreground text-sm">
              {lang === 'en' ? '© 2025 H7 Advisory. All rights reserved.' : '© 2025 H7 Advisory. Todos os direitos reservados.'}
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                {lang === 'en' ? 'Privacy Policy' : 'Política de Privacidade'}
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                {lang === 'en' ? 'Terms of Service' : 'Termos de Serviço'}
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                {lang === 'en' ? 'Guarantees' : 'Garantias'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;