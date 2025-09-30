import { Search, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "1. Encontre o profissional",
    description: "Busque por especialidade ou nome do profissional de saúde.",
  },
  {
    icon: Calendar,
    title: "2. Escolha data e horário",
    description: "Selecione o melhor dia e horário disponível para você.",
  },
  {
    icon: CheckCircle,
    title: "3. Confirme seu agendamento",
    description: "Receba a confirmação instantânea por e-mail e SMS.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Como funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6">
                <step.icon className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/agendamento">
            <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all px-8">
              Começar Agora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
