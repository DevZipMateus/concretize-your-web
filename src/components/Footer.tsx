import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Sólida Concreto" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm opacity-90">
                Soluções concretas para seus projetos
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Contato</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>RUA PROJETADA 03, 237</p>
                <p>
                  <a href="https://wa.me/5567996517667" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                    (67) 99651-7667
                  </a>
                </p>
                <p>
                  <a href="mailto:solidaconcreto2025@gmail.com" className="hover:opacity-100 transition-opacity">
                    solidaconcreto2025@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Horário de funcionamento</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>Segunda a sexta:</p>
                <p>07:00 às 11:00 e 13:00 às 18:00</p>
                <p>Sábado: 07:00 às 11:30</p>
              </div>
            </div>
          </div>

          <div className="border-t border-accent-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm opacity-90">
                © {currentYear} Sólida Concreto LTDA. CNPJ: 05.122.854/0001-64. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
