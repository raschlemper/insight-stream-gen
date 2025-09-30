import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "5 Dicas para uma vida mais saudável",
    excerpt: "Descubra hábitos simples que podem transformar sua rotina e melhorar sua qualidade de vida.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    date: "15 Jan 2025",
    category: "Bem-estar",
  },
  {
    id: 2,
    title: "Importância dos check-ups regulares",
    excerpt: "Entenda porque a prevenção é sempre o melhor remédio e como os exames periódicos podem salvar vidas.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    date: "12 Jan 2025",
    category: "Prevenção",
  },
  {
    id: 3,
    title: "Saúde Mental: quebrando tabus",
    excerpt: "A importância de cuidar da mente tanto quanto cuidamos do corpo. Conheça os principais sinais de alerta.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    date: "08 Jan 2025",
    category: "Saúde Mental",
  },
  {
    id: 4,
    title: "Nutrição: alimentação balanceada",
    excerpt: "Aprenda a montar um prato equilibrado e descubra os benefícios de uma alimentação consciente.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
    date: "05 Jan 2025",
    category: "Nutrição",
  },
  {
    id: 5,
    title: "Atividade física: por onde começar?",
    excerpt: "Dicas práticas para iniciar uma rotina de exercícios, independente do seu nível de condicionamento.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    date: "02 Jan 2025",
    category: "Exercícios",
  },
  {
    id: 6,
    title: "Sono de qualidade: essencial para a saúde",
    excerpt: "Descubra como melhorar a qualidade do seu sono e entenda seu impacto na saúde geral.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop",
    date: "29 Dez 2024",
    category: "Bem-estar",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Conteúdos sobre saúde, bem-estar e qualidade de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                    Ler mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
