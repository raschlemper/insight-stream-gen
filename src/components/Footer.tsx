import { Link } from "react-router-dom";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary">MediAgenda</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectamos pacientes aos melhores profissionais de saúde. 
              Agende sua consulta de forma rápida, fácil e segura.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/profissional" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Profissional
                </Link>
              </li>
              <li>
                <Link to="/agendamento" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Agendamento
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                contato@mediagenda.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 MediAgenda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
