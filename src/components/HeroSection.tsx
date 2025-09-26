import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20" />
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl animate-pulse-glow delay-1000" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full tech-card">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Nueva Generación Disponible</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            El Futuro es{" "}
            <span className="gradient-text">Inteligente</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Descubre la nueva era de smartphones con tecnología revolucionaria y diseño premium.
          </p>
          
          {/* Features List */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Carga Ultra Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">IA Avanzada</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Cámara Pro</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="cta-button border-0 text-primary-foreground"
              onClick={() => window.open('https://amazon.com/smartphones', '_blank')}
            >
              Explorar Modelos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 hover:border-primary">
              Ver Especificaciones
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold gradient-text">2.5M+</div>
              <div className="text-sm text-muted-foreground">Usuarios Activos</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold gradient-text">5★</div>
              <div className="text-sm text-muted-foreground">Calificación</div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Hero Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Image */}
            <img 
              src={heroPhone} 
              alt="Smartphone Premium - Última Generación" 
              className="w-full max-w-md lg:max-w-lg phone-float phone-glow rounded-3xl"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 tech-card p-4 rounded-2xl animate-fade-in delay-500">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Online</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-8 tech-card p-4 rounded-2xl animate-fade-in delay-700">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">5G</div>
                <div className="text-xs text-muted-foreground">Ultra Velocidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;