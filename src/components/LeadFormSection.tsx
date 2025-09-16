import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const schema = z.object({
  firstName: z.string().min(2, "Informe o nome"),
  lastName: z.string().min(2, "Informe o sobrenome"),
  whatsapp: z
    .string()
    .regex(/^(\+1\d{10}|\+55\d{11})$/i, "Informe um número válido (+1XXXXXXXXXX ou +55XXXXXXXXXXX)"),
  email: z.string().email("E-mail inválido"),
  need: z.string().min(1, "Selecione uma necessidade"),
});

type FormValues = z.infer<typeof schema>;

const LeadFormSection = () => {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const [phoneDisplay, setPhoneDisplay] = useState("");
  const [country, setCountry] = useState<'us' | 'br'>("br");

  const normalizeToE164 = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (country === 'us') {
      return `+1${digits.slice(-10)}`;
    }
    return `+55${digits.slice(-11)}`;
  };

  const formatDisplay = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (country === 'us') {
      let d = digits;
      if (d.startsWith("1")) d = d.slice(1);
      d = d.slice(0, 10);
      const a = d.slice(0, 3);
      const b = d.slice(3, 6);
      const c = d.slice(6, 10);
      let out = "+1";
      if (a) out += ` (${a}`;
      if (a.length === 3) out += ")";
      if (b) out += ` ${b}`;
      if (c) out += `-${c}`;
      return out;
    } else {
      // Brazil pattern +55 (AA) 9BBBB-BBBB (11 digits)
      let d = digits;
      if (d.startsWith("55")) d = d.slice(2);
      d = d.slice(0, 11);
      const aa = d.slice(0, 2);
      const first = d.slice(2, 7);
      const last = d.slice(7, 11);
      let out = "+55";
      if (aa) out += ` (${aa}`;
      if (aa.length === 2) out += ")";
      if (first) out += ` ${first}`;
      if (last) out += `-${last}`;
      return out;
    }
  };

  const onSubmit = (values: FormValues) => {
    const id = Math.floor(100000 + Math.random() * 900000).toString();
    setTicketId(id);
    setOpen(true);
    console.log("Lead:", { id, ...values });
    reset();
  };

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-heading text-foreground mb-2">{lang === 'en' ? 'Contact us:' : 'Fale conosco:'}</h2>
            <p className="text-lg text-muted-foreground">
              {lang === 'en' ? 'Fill in the form and one of H7 Advisory specialists will contact you via WhatsApp, email and/or phone call.' : 'Preencha o formulário que um dos especialistas de H7 Advisory irá entrar em contato via whatsapp, e-mail e/ou ligação.'}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="gradient-card rounded-xl border border-border/50 p-8 shadow-card grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">{lang === 'en' ? 'First name' : 'Nome'}</Label>
              <Input id="firstName" placeholder={lang === 'en' ? 'Your first name' : 'Seu nome'} {...register("firstName")} />
              {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">{lang === 'en' ? 'Last name' : 'Sobrenome'}</Label>
              <Input id="lastName" placeholder={lang === 'en' ? 'Your last name' : 'Seu sobrenome'} {...register("lastName")} />
              {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <div className="flex gap-3">
                <Select value={country} onValueChange={(v: 'us' | 'br') => { setCountry(v); setPhoneDisplay(''); setValue('whatsapp', '', { shouldValidate: true }); }}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder={country === 'us' ? 'United States (+1)' : 'Brasil (+55)'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">
                      <span className="inline-flex items-center gap-2">
                        <img src="https://flagcdn.com/w20/us.png" alt="US" className="h-4 w-4" />
                        United States (+1)
                      </span>
                    </SelectItem>
                    <SelectItem value="br">
                      <span className="inline-flex items-center gap-2">
                        <img src="https://flagcdn.com/w20/br.png" alt="BR" className="h-4 w-4" />
                        Brasil (+55)
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="whatsapp"
                  value={phoneDisplay}
                  onChange={(e) => {
                    const next = formatDisplay(e.target.value);
                    setPhoneDisplay(next);
                    setValue("whatsapp", normalizeToE164(next), { shouldValidate: true });
                  }}
                  placeholder={country==='us' ? '+1 (727) 000-0000' : '+55 (11) 90000-0000'}
                  className="flex-1"
                />
              </div>
              {errors.whatsapp && <p className="text-destructive text-sm mt-1">{errors.whatsapp.message}</p>}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="email">{lang === 'en' ? 'Professional email' : 'E-mail profissional'}</Label>
              <Input id="email" placeholder={lang === 'en' ? 'you@company.com' : 'voce@empresa.com'} {...register("email")} />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div className="md:col-span-2">
              <Label>{lang === 'en' ? 'Plans' : 'Planos'}</Label>
              <Select onValueChange={(v) => setValue("need", v)}>
                <SelectTrigger>
                  <SelectValue placeholder={lang === 'en' ? 'Select' : 'Selecione'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="starter">{lang === 'en' ? 'Starter' : 'Starter'}</SelectItem>
                  <SelectItem value="essential">{lang === 'en' ? 'Essential Plan' : 'Plano Essencial'}</SelectItem>
                  <SelectItem value="growth">{lang === 'en' ? 'Growth Plan' : 'Plano Growth'}</SelectItem>
                </SelectContent>
              </Select>
              {errors.need && <p className="text-destructive text-sm mt-1">{errors.need.message}</p>}
            </div>

            <div className="md:col-span-2">
              <Button variant="cta" size="lg" className="w-full">{lang === 'en' ? 'Send' : 'Enviar'}</Button>
            </div>
          </form>

          {/* Success Modal */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-2xl p-0 overflow-hidden">
              <div className="gradient-card p-6">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    </div>
                    <DialogTitle className="text-foreground text-xl">
                      {lang === 'en' ? 'All set!' : 'Tudo certo!'}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-base">
                    {lang === 'en' ? (
                      <>Your request number is <span className="font-semibold text-accent">#{ticketId}</span>. A consultant will contact you shortly.</>
                    ) : (
                      <>O número da sua solicitação é <span className="font-semibold text-accent">#{ticketId}</span>. Em breve um consultor entrará em contato.</>
                    )}
                  </DialogDescription>
                </DialogHeader>

                {/* Info blocks */}
                <div className="grid gap-4 my-6">
                  <div className="flex items-start gap-4 bg-accent/10 border border-accent/20 rounded-2xl p-4">
                    <Clock className="w-6 h-6 text-accent mt-0.5" />
                    <p className="text-sm text-foreground">
                      {lang === 'en' ? 'Business hours: 8am to 6pm, Monday to Friday (GMT-3).' : 'Horário de funcionamento: 08h às 18h de segunda a sexta (GMT-3).'}
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-accent/10 border border-accent/20 rounded-2xl p-4">
                    <MessageCircle className="w-6 h-6 text-accent mt-0.5" />
                    <p className="text-sm text-foreground">
                      {lang === 'en' ? 'We will contact you within 12h via WhatsApp and phone. Keep your phone available.' : 'Entraremos em contato com você em até 12h pelo WhatsApp e ligação. Fique atento ao seu celular.'}
                    </p>
                  </div>
                  <div className="flex items-start gap-4 bg-accent/10 border border-accent/20 rounded-2xl p-4">
                    <MessageCircle className="w-6 h-6 text-accent mt-0.5" />
                    <p className="text-sm text-foreground">
                      {lang === 'en' ? 'Want to speed things up? Talk directly to our consultants via WhatsApp.' : 'Quer acelerar seu atendimento? Fale diretamente com nossos consultores pelo WhatsApp.'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                  <a href="https://wa.me/17275547736" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="cta" size="lg" className="w-full sm:w-auto">
                      {lang === 'en' ? 'Talk on WhatsApp now' : 'Falar no WhatsApp agora'}
                    </Button>
                  </a>
                  <Button variant="outline" onClick={() => setOpen(false)} className="w-full sm:w-auto">
                    {lang === 'en' ? 'Close' : 'Fechar'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;


