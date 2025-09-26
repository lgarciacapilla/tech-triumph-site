import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Productos",
      links: [
        "PhoneTech Pro",
        "PhoneTech Max", 
        "PhoneTech Air",
        "Accesorios",
        "Comparar Modelos"
      ]
    },
    {
      title: "Soporte",
      links: [
        "Centro de Ayuda",
        "Garantía",
        "Reparaciones",
        "Contacto",
        "Estado del Pedido"
      ]
    },
    {
      title: "Empresa",
      links: [
        "Sobre Nosotros",
        "Carreras",
        "Prensa",
        "Blog",
        "Inversionistas"
      ]
    },
    {
      title: "Legal",
      links: [
        "Política de Privacidad",
        "Términos de Uso",
        "Cookies",
        "Seguridad",
        "Compliance"
      ]
    }
  ];

  return (
    <footer className="border-t border-border/30 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        {/* Newsletter Section */}
        <div className="tech-card p-8 rounded-3xl mb-16 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Mantente <span className="gradient-text">Conectado</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Sé el primero en conocer nuestros nuevos productos, ofertas exclusivas y novedades tecnológicas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Tu email aquí" 
              className="flex-1 bg-background/50 border-border/50 focus:border-primary"
            />
            <Button className="cta-button border-0 text-primary-foreground">
              <Mail className="w-4 h-4 mr-2" />
              Suscribirse
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="feature-icon">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold gradient-text">PhoneTech</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Revolucionamos la tecnología móvil con dispositivos inteligentes que conectan tu mundo digital de manera perfecta y elegante.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@phonetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Cupertino, CA 95014</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="text-muted-foreground">Síguenos:</span>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" }
              ].map(({ icon: Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={label}
                  className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-colors group"
                >
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 PhoneTech. Todos los derechos reservados.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;