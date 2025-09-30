import { Shield, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Seus dados estão protegidos com criptografia de ponta a ponta e conformidade total com a LGPD.",
  },
  {
    icon: Sparkles,
    title: "Facilidade",
    description: "Interface intuitiva e processo de agendamento simples. Marque sua consulta em menos de 2 minutos.",
  },
  {
    icon: Users,
    title: "Profissionais Confiáveis",
    description: "Todos os profissionais são verificados e possuem certificações reconhecidas pelo conselho de classe.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Por que escolher a MediAgenda?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow rounded-xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
