import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Cuidar da sua saúde <br />
          <span className="text-primary">nunca foi tão fácil</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Encontre os melhores profissionais de saúde e agende sua consulta 
          em poucos cliques. Rápido, seguro e confiável.
        </p>
        <Link to="/agendamento">
          <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg">
            Agendar Consulta
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
