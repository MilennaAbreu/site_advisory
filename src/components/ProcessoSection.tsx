import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/hooks/use-i18n";
const ProcessoSection = () => {
  const { lang } = useI18n();
  const passos = lang === 'en' ? [
    { title: "Choose your plan", description: "Pick the plan that best fits your current needs to start operating a business in the US." },
    { title: "Kick off the process", description: "Once we receive your information, we work with state and federal agencies to register your company. All legal documents are delivered digitally for access anytime." },
    { title: "Get your company EIN", description: "The Employer Identification Number is required to open a US bank account. We work directly with the IRS and manage your application." },
    { title: "Operate", description: "State annual reports, federal tax filings, and a dedicated account manager. Grow your business while H7 Advisory handles accounting and tax needs." }
  ] : [
    { title: "Selecione seu plano", description: "Escolha o plano que melhor se adequa a sua necessiade atual para começar a operar um negócio nos EUA." },
    { title: "Start no processo", description: "Uma vez que recebemos sua informação, começamos a trabalhar com os organismos estaduais e federais pertinentes para registrar sua empresa. Todos os documentos legais são enviados digitalmente para que você possa acessá-los quando e onde quiser." },
    { title: "Obtenha o EIN da sua empresa", description: "O Número de Identificação Fiscal (EIN) é necessário para abrir uma conta bancária nos EUA. Trabalhamos diretamente com o IRS (Internal Revenue Service) e preparamos e gerenciamos seu processo de solicitação." },
    { title: "Operação", description: "Declarações anuais estaduais, declarações de impostos federais e um gestor de contas dedicado. Faça crescer seu negócio e deixe que a H7 Advisory se encarregue de suas necessidades contábeis e tributárias." }
  ];

  return <section id="processo" className="py-8 md:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Esquerda: título, subtítulo e CTA */}
          <div>
            <h2 className="text-heading text-foreground mb-4">{lang === 'en' ? 'Your company in the US, how does it work?' : 'Sua empresa nos EUA, como funciona?'}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {lang === 'en' ? 'Get started in minutes. We handle legal work and bureaucracy. Spend just a few minutes providing information and we will create the documents needed to incorporate your company and stay compliant.' : 'Comece em questão de minutos. Nós nos encarregamos do trabalho legal e das burocracias. Dedique apenas alguns minutos para preencher alguns dados e nós criaremos todos os documentos necessários para constituir sua empresa e cumprir a normativa.'}
            </p>
            <Button variant="cta" size="lg">
              {lang === 'en' ? 'Start now' : 'Começar agora'}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Direita: Processo passo a passo em cartões/quadrados */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {passos.map((p, i) => <div key={i} className="gradient-card border border-border/60 rounded-2xl p-6 shadow-card">
                  <div className="w-10 h-10 rounded-md bg-accent/20 border border-accent/30 text-accent flex items-center justify-center font-bold mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProcessoSection;