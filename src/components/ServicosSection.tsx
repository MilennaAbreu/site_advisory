import { Button } from "@/components/ui/button";
import { useI18n } from "@/hooks/use-i18n";

const ServicosSection = () => {
  const { lang } = useI18n();
  return (
    <section id="servicos" className="py-8 md:py-20">
      <div className="container mx-auto px-4">
        {/* Bloco 1: imagem à esquerda, texto + CTA à direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div className="order-2 md:order-none">
            {/* Imagem desktop */}
            <img
              src="/img/modelo_1.jpg"
              alt="Profissional no escritório com smartphone"
              className="hidden md:block w-full md:w-[80%] h-auto rounded-3xl object-cover shadow-hero mx-auto"
            />
          </div>
          <div>
            <h2 className="text-heading text-foreground mb-6">
              {lang === 'en' ? (
                <>Want to open a company in <span className="text-accent">Florida</span> or anywhere in the US?</>
              ) : (
                <>Quer abrir empresa na <span className="text-accent">Florida</span> ou em qualquer lugar dos EUA?</>
              )}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {lang === 'en' ?
                'With our company formation, virtual address, accounting and tax filing support, you eliminate bureaucracy and delays. Our services simplify your business management, so you can focus on what matters: thriving in the US market.' :
                'Com o nosso suporte de abertura de empresa, endereço virtual, contabilidade e declaração de impostos você elimina toda burocracia e demora para abrir sua empresa nos EUA. Nossos serviços são feitos para simplificar a gestão do seu negócio, permitindo que você concentre seus esforços no que realmente importa: prosperar no mercado americano.'}
            </p>
            {/* Imagem mobile, entre o texto e o botão */}
            <img
              src="/img/modelo_1.jpg"
              alt="Profissional no escritório com smartphone"
              className="block md:hidden w-full h-auto rounded-3xl object-cover shadow-hero mx-auto mb-6"
            />
            <Button variant="cta" size="lg" onClick={() => {
              const el = document.getElementById('contato');
              if (el) el.scrollIntoView({ behavior: 'smooth' }); else window.location.hash = 'contato';
            }}>{lang === 'en' ? 'I want to open my US company' : 'Quero abrir minha empresa nos EUA'}</Button>
          </div>
        </div>

        {/* Bloco 2: texto à esquerda, imagem à direita */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === 'en' ? 'Already have a US company and need fast, complete accounting support?' : 'Já tem uma empresa nos EUA e precisa de uma acessória contábil especializada rápida e completa?'}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {lang === 'en' ?
                'We were born with a sense of urgency. You will count on a team of specialists who truly take care of your company with extremely fast and prioritized support, so you can focus on business.' :
                'Nascemos sob o pilar de senso de urgência, isso significa que não temos braços curtos. Você vai contar com um time de especialistas que vai cuidar de verdade da sua empresa, com um atendimento extremamente rápido e priorizado, deixando você tranquilo para fazer negócios.'}
            </p>
            {/* Imagem mobile, entre o texto e o botão */}
            <img
              src="/img/modelo_2.png"
              alt="Composição moderna com poltrona e mesa"
              className="block md:hidden w-full h-auto rounded-3xl object-cover shadow-hero mx-auto mb-6"
            />
            <Button variant="cta" size="lg" onClick={() => {
              const el = document.getElementById('contato');
              if (el) el.scrollIntoView({ behavior: 'smooth' }); else window.location.hash = 'contato';
            }}>{lang === 'en' ? 'I want H7 Advisory support' : 'Quero ter o suporte da H7 Advisory'}</Button>
          </div>
          <div>
            <img
              src="/img/modelo_2.png"
              alt="Composição moderna com poltrona e mesa"
              className="hidden md:block w-full md:w-[80%] h-auto rounded-3xl object-cover shadow-hero md:ml-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
