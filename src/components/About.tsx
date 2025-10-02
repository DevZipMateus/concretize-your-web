import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre nós
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Construindo o futuro com solidez, confiança e excelência
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Especializada em soluções completas para concreto usinado, atendemos 
              diversos segmentos: <strong>calçadas, lajes, construção industrial, 
              agrícola, bases de silos, pontes</strong> e muito mais. Nosso concreto 
              é preparado com a mais alta tecnologia e rigoroso controle de qualidade, 
              garantindo precisão e resistência em projetos de qualquer porte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                  Missão
                </h3>
                <p className="text-muted-foreground text-center">
                  Fornecer soluções em concreto para grandes obras com qualidade, segurança e sustentabilidade, construindo parcerias de confiança que impulsionam o desenvolvimento da nossa região.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                  Visão
                </h3>
                <p className="text-muted-foreground text-center">
                  Ser reconhecida como a principal referência em soluções de concreto para grandes obras, unindo inovação, sustentabilidade e confiança, contribuindo para um futuro mais sólido e seguro.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                  Valores
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Sustentabilidade</li>
                  <li>• Segurança</li>
                  <li>• Confiança</li>
                  <li>• Parceria</li>
                  <li>• Excelência</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
