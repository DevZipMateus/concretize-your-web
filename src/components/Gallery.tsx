import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Sólida Concreto - Localização e caminhão betoneira" },
    { src: gallery2, alt: "Sólida Concreto - Concreto usinado em estrutura" },
    { src: gallery3, alt: "Sólida Concreto - Bomba lança em obra" },
    { src: gallery4, alt: "Sólida Concreto - Caminhão betoneira em obra" },
    { src: gallery5, alt: "Sólida Concreto - Frota de caminhões" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossa estrutura
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Equipamentos modernos e equipe qualificada para atender suas necessidades
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="border-border overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm hover:bg-background" />
            <CarouselNext className="right-2 bg-background/80 backdrop-blur-sm hover:bg-background" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
