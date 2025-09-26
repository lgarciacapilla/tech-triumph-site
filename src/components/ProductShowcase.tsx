import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import phoneModels from "@/assets/phone-models.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "PhoneTech Pro",
      price: "$1,299",
      originalPrice: "$1,499",
      color: "Gris Espacial",
      rating: 4.9,
      reviews: 1247,
      isPopular: true,
      features: ["128GB", "5G", "Triple Cámara", "Face ID"]
    },
    {
      id: 2,
      name: "PhoneTech Max",
      price: "$1,599",
      originalPrice: null,
      color: "Azul Profundo", 
      rating: 5.0,
      reviews: 892,
      isNew: true,
      features: ["256GB", "5G", "Cámara Pro", "Face ID"]
    },
    {
      id: 3,
      name: "PhoneTech Air",
      price: "$899",
      originalPrice: "$999",
      color: "Dorado",
      rating: 4.8,
      reviews: 2156,
      isPopular: false,
      features: ["64GB", "5G", "Dual Cámara", "Touch ID"]
    }
  ];

  return (
    <section className="py-20 px-4" id="productos">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestra <span className="gradient-text">Colección</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre la línea completa de smartphones diseñados para cada estilo de vida.
          </p>
        </div>

        {/* Hero Product Image */}
        <div className="relative mb-16 animate-slide-up">
          <div className="relative rounded-3xl overflow-hidden tech-card">
            <img 
              src={phoneModels} 
              alt="Colección completa de smartphones PhoneTech en diferentes colores"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                Tres colores únicos
              </h3>
              <p className="text-muted-foreground text-lg">
                Elige el que mejor refleje tu personalidad
              </p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="tech-card p-0 overflow-hidden border-0 animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card Header */}
              <div className="relative p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {product.isNew && (
                      <Badge className="mb-2 bg-accent text-accent-foreground">
                        Nuevo
                      </Badge>
                    )}
                    {product.isPopular && (
                      <Badge variant="secondary" className="mb-2">
                        Más Popular
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="icon" className="hover:text-accent">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.color}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="ml-1 font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reseñas)
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-border/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold gradient-text">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 cta-button border-0 text-primary-foreground"
                    size="lg"
                    onClick={() => window.open('https://amazon.com/smartphones', '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                  <Button variant="outline" size="lg" className="border-border/50">
                    Ver más
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Button size="lg" variant="outline" className="border-border/50 hover:border-primary">
            Ver Todos los Modelos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;