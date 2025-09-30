import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Star,
  Award,
  Briefcase,
  CheckCircle2,
  Calendar as CalendarIcon,
  MapPin,
  Phone,
  MessageCircle,
  CreditCard,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  date: z.date({
    required_error: "Selecione uma data",
  }),
  time: z.string().min(1, "Selecione um horário"),
});

type FormValues = z.infer<typeof formSchema>;

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

const highlights = [
  "Atendimento humanizado e acolhedor",
  "Mais de 10 anos de experiência",
  "Especialização internacional",
  "Uso de tecnologias avançadas",
  "Alta taxa de satisfação dos pacientes",
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "Profissional excepcional! Muito atencioso e dedicado. Recomendo fortemente.",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Excelente atendimento. Senti confiança desde a primeira consulta.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    text: "Muito competente e empático. Resolveu meu problema rapidamente.",
    rating: 5,
  },
];

const Professional = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Agendamento Confirmado!",
      description: `Sua consulta foi agendada para ${format(data.date, "PPP", { locale: ptBR })} às ${data.time}.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Profile Section */}
          <Card className="border-none shadow-lg rounded-xl overflow-hidden mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
                    alt="Dr. Carlos Mendes"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Dr. Carlos Mendes</h1>
                  <p className="text-xl text-muted-foreground mb-4">Cardiologista</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(248 avaliações)</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>10+ anos de experiência</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>São Paulo, SP</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Biography */}
              <Card className="border-none shadow-md rounded-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Sobre o Profissional</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Dr. Carlos Mendes é cardiologista com mais de 10 anos de experiência no diagnóstico 
                    e tratamento de doenças cardiovasculares. Formado pela USP, com especialização em 
                    cardiologia intervencionista pela Harvard Medical School, dedica-se a oferecer 
                    atendimento humanizado e baseado nas mais recentes evidências científicas.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Formação Acadêmica
                      </h3>
                      <ul className="space-y-2 ml-7 text-sm text-muted-foreground">
                        <li>• Medicina - Universidade de São Paulo (USP)</li>
                        <li>• Residência em Cardiologia - InCor/HCFMUSP</li>
                        <li>• Fellowship em Cardiologia Intervencionista - Harvard Medical School</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Experiência Profissional
                      </h3>
                      <ul className="space-y-2 ml-7 text-sm text-muted-foreground">
                        <li>• Coordenador de Cardiologia - Hospital Sírio-Libanês</li>
                        <li>• Médico Assistente - Instituto do Coração (InCor)</li>
                        <li>• Membro da Sociedade Brasileira de Cardiologia</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card className="border-none shadow-md rounded-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Destaques</h2>
                  <div className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <Card className="border-none shadow-md rounded-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Depoimentos de Pacientes</h2>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-muted/30 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground italic mb-3">"{testimonial.text}"</p>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Appointment Section */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg rounded-xl sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Agendar Consulta</h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">Nome Completo</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Seu nome"
                        className="rounded-xl"
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="seu@email.com"
                        className="rounded-xl"
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">Telefone</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="(11) 99999-9999"
                        className="rounded-xl"
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm">Data da Consulta</Label>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          if (selectedDate) {
                            setValue("date", selectedDate);
                          }
                        }}
                        disabled={(date) => date < new Date()}
                        className="rounded-xl border p-3 pointer-events-auto"
                      />
                      {errors.date && (
                        <p className="text-xs text-destructive">{errors.date.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm">Horário Disponível</Label>
                      <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto p-1">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => {
                              setSelectedTime(time);
                              setValue("time", time);
                            }}
                            className={cn(
                              "px-3 py-2 text-sm rounded-lg border transition-all",
                              selectedTime === time
                                ? "bg-primary text-white border-primary"
                                : "bg-background hover:bg-muted border-border"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      {errors.time && (
                        <p className="text-xs text-destructive">{errors.time.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all"
                      size="lg"
                    >
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      Confirmar Consulta
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Location & Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <Card className="border-none shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="h-80 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974332626697!2d-46.65886668449639!3d-23.56146196688447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1642000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Localização do consultório"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Endereço do Consultório
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Av. Paulista, 1000 - Sala 805<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Payment Info */}
            <div className="space-y-6">
              <Card className="border-none shadow-md rounded-xl">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Informações de Contato</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Telefone</p>
                        <p className="text-sm text-muted-foreground">(11) 3456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Horário de Atendimento</p>
                        <p className="text-sm text-muted-foreground">Seg-Sex: 08:00-18:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md rounded-xl">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Convênios e Pagamentos
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Convênios Aceitos:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Unimed", "Bradesco Saúde", "SulAmérica", "Amil"].map((convenio) => (
                          <span
                            key={convenio}
                            className="text-xs px-3 py-1 bg-muted rounded-full"
                          >
                            {convenio}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Formas de Pagamento:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dinheiro</li>
                        <li>• Cartão de crédito e débito</li>
                        <li>• PIX</li>
                        <li>• Transferência bancária</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Professional;
