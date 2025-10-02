import { Package, Droplets, Boxes, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "Concreto usinado",
      description: "Diversas classes de resistência e slump para atender às necessidades específicas da sua obra."
    },
    {
      icon: Droplets,
      title: "Concretos especiais",
      items: [
        "Alta resistência",
        "Bombeável",
        "Sustentável (menor impacto ambiental)"
      ]
    },
    {
      icon: Boxes,
      title: "Argamassa estabilizada",
      description: "Pronta para aplicação em diferentes tipos de obra, garantindo praticidade e qualidade."
    },
    {
      icon: Package,
      title: "Pré-moldados de concreto",
      description: "Soluções rápidas e seguras para construção civil."
    },
    {
      icon: FlaskConical,
      title: "Aditivos e soluções complementares",
      description: "Para melhor desempenho do concreto em diferentes condições de aplicação."
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos produtos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Materiais de alta qualidade para sua construção
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {product.description && (
                    <p className="text-muted-foreground">{product.description}</p>
                  )}
                  {product.items && (
                    <ul className="text-muted-foreground space-y-2">
                      {product.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
