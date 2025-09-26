import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Battery, 
  Camera, 
  Shield, 
  Zap, 
  Cpu,
  Wifi,
  Fingerprint
} from "lucide-react";
import cameraTech from "@/assets/camera-tech.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Sistema de Cámara Pro",
      description: "Triple cámara con IA avanzada para fotos profesionales en cualquier condición de luz.",
      highlight: "108MP Principal"
    },
    {
      icon: Battery,
      title: "Batería de Larga Duración",
      description: "Hasta 2 días de uso continuo con carga rápida de 120W que te da 50% en 15 minutos.",
      highlight: "5000mAh"
    },
    {
      icon: Cpu,
      title: "Procesador de Última Generación",
      description: "Chipset octa-core de 4nm que ofrece rendimiento excepcional y eficiencia energética.",
      highlight: "A17 Bionic"
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección multicapa con encriptación de hardware y reconocimiento facial 3D.",
      highlight: "Face ID Seguro"
    },
    {
      icon: Wifi,
      title: "Conectividad 5G",
      description: "Velocidades de descarga ultrarrápidas hasta 10Gbps con cobertura global 5G.",
      highlight: "5G Ultra"
    },
    {
      icon: Fingerprint,
      title: "Desbloqueo Instantáneo",
      description: "Sensor de huella ultrasónico integrado en pantalla con reconocimiento en 0.3s.",
      highlight: "Touch ID Pro"
    }
  ];

  const specs = [
    { label: "Pantalla", value: "6.7\" OLED 120Hz" },
    { label: "Almacenamiento", value: "128GB - 1TB" },
    { label: "RAM", value: "8GB - 16GB" },
    { label: "Material", value: "Titanio Grado 5" },
    { label: "Resistencia", value: "IP68 Certificado" },
    { label: "Sistema", value: "PhoneOS 17" }
  ];

  return (
    <section className="py-20 px-4" id="caracteristicas">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnología <span className="gradient-text">Revolucionaria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada detalle ha sido diseñado para ofrecerte una experiencia única e incomparable.
          </p>
        </div>

        {/* Hero Feature with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Sistema de <span className="gradient-text">Cámara Profesional</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Revolucionamos la fotografía móvil con nuestro sistema de triple cámara potenciado por inteligencia artificial. Captura momentos extraordinarios con calidad cinematográfica.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="tech-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text mb-2">108MP</div>
                <div className="text-sm text-muted-foreground">Sensor Principal</div>
              </div>
              <div className="tech-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text mb-2">50X</div>
                <div className="text-sm text-muted-foreground">Zoom Digital</div>
              </div>
              <div className="tech-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text mb-2">8K</div>
                <div className="text-sm text-muted-foreground">Grabación Video</div>
              </div>
              <div className="tech-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text mb-2">IA</div>
                <div className="text-sm text-muted-foreground">Modo Nocturno</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img 
              src={cameraTech} 
              alt="Sistema de cámara profesional con múltiples lentes y tecnología IA"
              className="w-full rounded-3xl phone-glow"
            />
            <div className="absolute -bottom-6 -right-6 tech-card p-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-accent" />
                <span className="font-medium">Modo Pro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="tech-card p-6 border-0 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="feature-icon">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {feature.highlight}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <div className="tech-card p-8 rounded-3xl animate-slide-up">
          <h3 className="text-3xl font-bold text-center mb-12">
            Especificaciones <span className="gradient-text">Técnicas</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec, index) => (
              <div 
                key={index} 
                className="flex justify-between items-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-muted-foreground">{spec.label}</span>
                <span className="font-bold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;