import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/hooks/use-i18n";

const FAQSection = () => {
  const { lang } = useI18n();
  const faqs = (lang === 'en' ? [
    { pergunta: 'What is the difference between LLC and Corporation?', resposta: 'LLC is simpler for small businesses and offers tax flexibility. Corporation is ideal for companies looking to grow, raise investment or have multiple shareholders. Our consulting includes a free analysis to determine the best option for your case.' },
    { pergunta: 'Do I need to be in the US to open the company?', resposta: "No! The entire process is done remotely from Brazil or anywhere. You just need the requested documents and we take care of everything. It's not necessary to have an SSN or US visa." },
    { pergunta: 'Do you help open a US bank account?', resposta: 'Yes, we facilitate the process and have partnerships with banks that accept non-residents. We provide all necessary documentation and guidance, but final approval depends on the bank. In the full package, this service is included.' },
    { pergunta: 'What is the minimum investment required?', resposta: 'There is no mandatory minimum investment to open an LLC or Corporation. You can start with $1 of capital. The real investment will depend on your business plan and operational needs.' },
    { pergunta: 'How are you faster than competitors?', resposta: 'We eliminate unnecessary bureaucracy, have direct partnerships, a fully digitized process, and a team specialized only in company formation. While others take weeks, we do it in days.' },
    { pergunta: 'What if something goes wrong?', resposta: 'We offer a full guarantee. If something goes wrong due to our responsibility, we redo it at no cost. Our Portuguese support is available during and after the process.' },
    { pergunta: 'Do I need an accountant in the US afterwards?', resposta: 'Yes, it is mandatory to keep accounting up to date. We offer complete monthly accounting services, or you can hire another accountant. We provide all the necessary documentation for an easy transition.' }
  ] : [
    {
      pergunta: "Qual a diferença entre LLC e Corporation?",
      resposta: "LLC é mais simples para pequenas empresas e oferece flexibilidade tributária. Corporation é ideal para empresas que planejam crescer, captar investimento ou ter sócios. Nossa consultoria inclui análise gratuita para determinar a melhor opção para seu caso."
    },
    {
      pergunta: "Preciso estar nos EUA para abrir a empresa?",
      resposta: "Não! Todo o processo é feito remotamente do Brasil. Você só precisa dos documentos que solicitamos e nós cuidamos de tudo. Também não é necessário ter SSN (Social Security Number) ou visto americano."
    },
    {
      pergunta: "Vocês ajudam a abrir conta bancária americana?",
      resposta: "Sim, facilitamos o processo e temos parcerias com bancos que aceitam não-residentes. Fornecemos toda documentação necessária e orientação, mas a aprovação final depende do banco. No pacote completo, esse serviço está incluído."
    },
    {
      pergunta: "Qual o investimento mínimo necessário?",
      resposta: "Não há investimento mínimo obrigatório para abrir LLC ou Corporation. Você pode começar com $1 de capital. O investimento real será conforme seu plano de negócios e necessidades operacionais."
    },
    {
      pergunta: "Como vocês são mais rápidos que a concorrência?",
      resposta: "Eliminamos burocracias desnecessárias, temos parcerias diretas com cartórios, processo 100% digitalizado e equipe especializada apenas em abertura de empresas. Enquanto outros fazem em semanas, nós fazemos em dias."
    },
    {
      pergunta: "O que acontece se houver algum problema?",
      resposta: "Oferecemos garantia total. Se algo der errado por nossa responsabilidade, refazemos sem custo. Além disso, nosso suporte em português está disponível durante todo o processo e após a abertura da empresa."
    },
    {
      pergunta: "Preciso de um contador nos EUA depois?",
      resposta: "Sim, é obrigatório manter a contabilidade em dia. Oferecemos serviços completos de contabilidade mensal, ou você pode contratar outro contador. Fornecemos toda documentação necessária para facilitar a transição."
    }
  ]);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-heading text-foreground">
            {lang === 'en' ? 'Frequently ' : 'Dúvidas '}<span className="text-accent">{lang === 'en' ? 'Asked Questions' : 'Frequentes'}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-card rounded-xl border border-border/50 px-6 shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-6">
                  <span className="font-semibold">{faq.pergunta}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center gradient-card rounded-xl p-8 border border-accent/20">
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">
              {lang === 'en' ? 'Still have specific questions?' : 'Ainda tem dúvidas específicas?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {lang === 'en' ? 'Consult our AI specialist or schedule a free consultation.' : 'Consulte nossa AI especialista, ou agende uma consulta gratuita.'}
            </p>
            <div className="flex items-center justify-center">
              <Button variant="cta" size="lg">
                {lang === 'en' ? 'Schedule a Consultation' : 'Agendar Consultoria'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;