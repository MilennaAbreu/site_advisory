import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useI18n } from "@/hooks/use-i18n";

const PricingSection = () => {
  const { lang } = useI18n();
  const planos = [
    {
      nome: "Starter",
      preco: "449",
      descricao: lang === 'en' ? 'Complete company formation, address and initial documents.' : "Formação completa da empresa, endereço e documentos iniciais.",
      popular: false,
      button: lang === 'en' ? 'Choose Starter' : "Escolher Starter"
    },
    {
      nome: lang === 'en' ? 'Essential Plan' : "Plano Essencial", 
      preco: "1.190",
      descricao: lang === 'en' ? 'Add first-year tax filing and annual renewals.' : "Adicione a declaração de imposto do primeiro ano e as renovações anuais.",
      popular: true,
      button: lang === 'en' ? 'Choose Essential' : "Escolher Essencial"
    },
    {
      nome: lang === 'en' ? 'Growth Plan' : "Plano Growth",
      preco: "4.990", 
      descricao: lang === 'en' ? 'Accounting and dedicated support for your growth.' : "Contabilidade e suporte dedicado para o crescimento do seu negócio.",
      popular: false,
      button: lang === 'en' ? 'Choose Growth' : "Escolher Growth"
    }
  ];

  const features = [
    {
      category: lang === 'en' ? 'OPEN COMPANY IN THE US' : 'ABRIR EMPRESA NOS EUA',
      items: [
        { name: lang === 'en' ? 'LLC & C‑Corp formation with state fees included' : 'Formação de LLC & C-Corp com taxas estaduais incluídas', starter: true, professional: true, full: true },
        { name: lang === 'en' ? 'EIN (Tax ID) obtainment' : 'Obtenção do EIN (Tax ID)', starter: true, professional: true, full: true },
        { name: lang === 'en' ? 'US fiscal address' : 'Endereço fiscal nos EUA', starter: true, professional: true, full: true },
        { name: lang === 'en' ? 'Operating Agreement and BOI' : 'Operating Agreement e BOI', starter: true, professional: true, full: true },
        { name: lang === 'en' ? 'Bank account opening support' : 'Suporte abertura de conta bancária', starter: true, professional: true, full: true },
        { name: lang === 'en' ? 'ITIN number for foreigners' : 'ITIN number para estrangeiros', starter: true, professional: true, full: true },
      ]
    },
    {
      category: lang === 'en' ? 'TAXES' : 'IMPOSTOS',
      items: [
        { name: lang === 'en' ? 'Tax consulting' : 'Tax Consulting', starter: false, professional: true, full: true },
        { name: lang === 'en' ? 'Federal tax preparation' : 'Preparação de impostos federais', starter: false, professional: true, full: true },
        { name: lang === 'en' ? 'Personal income tax return' : 'Declaração de Imposto de Renda Pessoa Física', starter: false, professional: true, full: true },
        { name: lang === 'en' ? 'Account manager' : 'Gerente de Contas', starter: false, professional: true, full: true },
      ]
    },
    {
      category: lang === 'en' ? 'BOOKKEEPING (Accounting)' : 'BOOKEEPING (Contabilidade)',
      items: [
        { name: lang === 'en' ? 'Daily bookkeeping' : 'Contabilidade Diária', starter: false, professional: false, full: true },
        { name: lang === 'en' ? 'Monthly financial and accounting reports' : 'Relatórios Financeiros e contábeis mensais', starter: false, professional: false, full: true },
        { name: lang === 'en' ? 'Personalized tax planning' : 'Planejamento tributário personalizado', starter: false, professional: false, full: true },
      ]
    }
  ];

  return (
    <section id="precos" className="py-8 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-4">{lang === 'en' ? 'Plans' : 'Planos'}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === 'en' ? 'Choose the ideal plan for you' : 'Escolha o plano ideal para você'}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto mb-12 md:mb-16">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-xl p-8 border transition-all duration-300 hover:shadow-elegant ${
                plano.popular 
                  ? 'border-accent/50 shadow-card scale-105' 
                  : 'border-border/20 hover:border-accent/30'
              }`}
            >
              {plano.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold">
                    {lang === 'en' ? 'Most Popular' : 'Mais Popular'}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plano.nome}
                </h3>
                
                {/* Price */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-foreground">
                    ${plano.preco}
                    <span className="text-base font-normal text-muted-foreground ml-1">
                      {lang === 'en' ? '/yr' : '/ano'}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                  {plano.descricao}
                </p>

                {/* CTA Button */}
                <Button
                  variant={plano.popular ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plano.button}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {lang === 'en' ? 'What is included?' : 'O que está incluído?'}
            </h3>
          </div>

          

          {/* Features Table */}
          <div className="bg-card rounded-xl border border-border/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/20">
                  <TableHead className="font-semibold text-foreground">{lang === 'en' ? 'Features' : 'Recursos'}</TableHead>
                  <TableHead className="text-center font-semibold text-foreground">Starter</TableHead>
                  <TableHead className="text-center font-semibold text-foreground">{lang === 'en' ? 'Essential Plan' : 'Plano Essencial'}</TableHead>
                  <TableHead className="text-center font-semibold text-foreground">{lang === 'en' ? 'Growth Plan' : 'Plano Growth'}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((category, categoryIndex) => (
                  <>
                    <TableRow key={`category-${categoryIndex}`} className="hover:bg-transparent border-border/10">
                      <TableCell colSpan={4} className="font-semibold text-accent bg-accent/5 py-3">
                        {category.category}
                      </TableCell>
                    </TableRow>
                    {category.items.map((item, itemIndex) => (
                      <TableRow key={`item-${categoryIndex}-${itemIndex}-${item.name}`} className="hover:bg-muted/30 border-border/10">
                        <TableCell className="font-medium text-foreground py-4">
                          {item.name}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          {item.starter ? (
                            <Check className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted-foreground text-xl">×</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          {item.professional ? (
                            <Check className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted-foreground text-xl">×</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          {item.full ? (
                            <Check className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted-foreground text-xl">×</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;