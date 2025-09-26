import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Menu, 
  X, 
  ShoppingCart, 
  Search,
  User
} from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Productos", href: "#productos" },
    { label: "Características", href: "#caracteristicas" },
    { label: "Soporte", href: "#soporte" },
    { label: "Empresa", href: "#empresa" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="feature-icon">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">PhoneTech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                2
              </span>
            </Button>
            <Button className="cta-button border-0 text-primary-foreground">
              Comprar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 tech-card m-4 rounded-2xl p-6 animate-fade-in">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="border-t border-border/30 pt-4 space-y-3">
                <div className="flex justify-between">
                  <Button variant="ghost" size="sm" className="hover:text-primary">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-primary">
                    <User className="w-4 h-4 mr-2" />
                    Cuenta
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-primary">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Carrito (2)
                  </Button>
                </div>
                <Button className="w-full cta-button border-0 text-primary-foreground">
                  Comprar Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;