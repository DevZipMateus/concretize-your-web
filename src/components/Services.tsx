import { Truck, Users, Microscope, HardHat, Ruler, Waves } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: "Concreto usinado sob medida",
      description: "Produção conforme a necessidade de cada obra, com garantia de qualidade e resistência."
    },
    {
      icon: Truck,
      title: "Logística e entrega programada",
      description: "Frota moderna e eficiente para assegurar pontualidade no fornecimento."
    },
    {
      icon: Users,
      title: "Consultoria técnica",
      description: "Orientação especializada para escolha das melhores soluções em concreto."
    },
    {
      icon: HardHat,
      title: "Acompanhamento em obras",
      description: "Suporte contínuo para garantir desempenho e segurança em todas as etapas."
    },
    {
      icon: Microscope,
      title: "Ensaios e controle tecnológico",
      description: "Monitoramento da qualidade do concreto para atender às normas técnicas."
    },
    {
      icon: Waves,
      title: "Bombas lança concreto",
      description: "Equipamentos modernos para aplicação com mais facilidade, precisão e alcance em obras de qualquer porte."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para o sucesso da sua obra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
