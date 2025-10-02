import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img src="/logo.png" alt="Sólida Concreto" className="h-32 w-auto mx-auto mb-8 drop-shadow-2xl" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Sólida Concreto
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 font-light animate-fade-in drop-shadow-lg">
            Soluções concretas para seus projetos
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in drop-shadow-lg">
            Fornecemos soluções em concreto para grandes obras com qualidade, segurança e sustentabilidade, construindo parcerias de confiança que impulsionam o desenvolvimento da nossa região.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground text-lg px-8 shadow-xl"
              asChild
            >
              <a href="https://wa.me/5567996517667" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/60 text-white hover:bg-white hover:text-foreground shadow-xl"
              onClick={() => scrollToSection("servicos")}
            >
              Nossos serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
