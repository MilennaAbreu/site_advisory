import { Target, ShieldCheck, Gauge } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";
const DiferenciaisSection = () => {
  const { lang } = useI18n();
  const diferenciais = lang === 'en' ? [{
    icon: <Target className="w-8 h-8 text-white" />,
    title: "PROCESSES & TECHNOLOGY",
    subtitle: "Complete and intelligent management",
    description: "Bookkeeping + daily strategic reports. Full accounting with cutting-edge tech. Accurate financials that turn data into strategic decisions.",
    highlight: "360º Management"
  }, {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "TAX EXPERTISE",
    subtitle: "Strategic planning for tax savings",
    description: "Full compliance with the lowest legal tax burden. We keep you IRS compliant while implementing legal strategies to reduce taxes.",
    highlight: "IRS Compliant"
  }, {
    icon: <Gauge className="w-8 h-8 text-white" />,
    title: "FAST DELIVERY",
    subtitle: "Fast delivery, full focus on your business.",
    description: "Top-notch support at your pace, without compromising quality.",
    highlight: "Sense of Urgency"
  }] : [{
    icon: <Target className="w-8 h-8 text-white" />,
    title: "PROCESSOS E TECNOLOGIA",
    subtitle: "Gestão completa e inteligente",
    description: "Bookkeeping + Relatórios estratégicos diários. Gestão contábil completa com tecnologia de ponta Relatórios financeiros precisos que transformam dados em decisões estratégicas para seu negócio.",
    highlight: "Gestão 360º"
  }, {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "EXPERTISE TRIBUTÁRIA",
    subtitle: "Planejamento estratégico para economia fiscal",
    description: "Conformidade total com menor carga tributária legal. Sua empresa em total conformidade com o IRS enquanto implementamos estratégias legais para reduzir sua carga tributária. Planejamento tributário inteligente que coloca mais dinheiro no seu bolso.",
    highlight: "IRS Compliant"
  }, {
    icon: <Gauge className="w-8 h-8 text-white" />,
    title: "FAST DELIVERY",
    subtitle: "Entregas rápidas, foco total no seu negócio.",
    description: "O melhor suporte e atendimento na velocidade da sua necessidade, mas sem jamais comprometar a qualidade.",
    highlight: "Senso de Urgência"
  }];
  return <section className="py-8 md:py-20 bg-card/30">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-4">
            {lang === 'en' ? 'Why is H7 Advisory ' : 'Porque a H7 Advisory é '}<span className="text-accent">{lang === 'en' ? 'different:' : 'diferente:'}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === 'en' ? "We're not just another accounting firm. We're specialists in speed and results." : "Não somos apenas mais uma empresa de contabilidade. Somos especialistas em velocidade e resultados."}
          </p>
        </div>

        {/* Diferenciais Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {diferenciais.map((item, index) => <div key={index} className="group gradient-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border border-border/50">
              {/* Icon */}
              <div className="w-16 h-16 gradient-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center">
                <span className={index === 0 ? 'mr-3 w-1.5 h-6 rounded bg-blue-400/70' : index === 1 ? 'mr-3 w-1.5 h-6 rounded bg-orange-400/70' : 'mr-3 w-1.5 h-6 rounded bg-emerald-400/70'}></span>
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-accent font-medium mb-4">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                <span className="text-accent text-sm font-medium">{item.highlight}</span>
              </div>
            </div>)}
        </div>

        {/* Stats Row */}
        
      </div>
    </section>;
};
export default DiferenciaisSection;