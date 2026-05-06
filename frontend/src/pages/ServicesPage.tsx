import { useSite } from "@/context/SiteContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scissors, ShoppingBag, ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import ProductRequestModal from "@/components/ProductRequestModal";

const ServicesPage = () => {
  const { services, categories, getMediaUrl } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);

  const serviceCategories = categories.filter(c => c.type === 'service' && c.active);
  const displayServices = services.filter(s => s.active && (!selectedCategory || s.category_id === selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 gradient-primary border-none text-white px-4 py-1">Nuestras Experiencias</Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight">Servicios Profesionales</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Transformamos tu visión en realidad con técnicas avanzadas y productos de la más alta calidad.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"}
              className="rounded-full px-8"
              onClick={() => setSelectedCategory(null)}
            >
              Todos
            </Button>
            {serviceCategories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className="rounded-full px-8"
                onClick={() => setSelectedCategory(cat.id as string)}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayServices.map((service, i) => (
              <div 
                key={service.id}
                className="group relative bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={getMediaUrl(service.image)} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={service.name}
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500&auto=format&fit=crop'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-3 text-white border border-white/20">
                      <Scissors className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">
                    {categories.find(c => c.id === service.category_id)?.name}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{service.name}</h3>
                  <p className="text-sm text-white/70 mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-white">${service.price.toLocaleString()}</span>
                    <Button 
                      className="rounded-full gradient-primary border-none text-white font-bold"
                      onClick={() => setSelectedService(service)}
                    >
                      Reservar <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {displayServices.length === 0 && (
            <div className="text-center py-24 bg-secondary/10 rounded-[3rem] border border-dashed">
              <Sparkles className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground font-medium italic">No se encontraron servicios en esta categoría.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
      
      {selectedService && (
        <ProductRequestModal 
          product={{ 
            id: selectedService.id, 
            name: selectedService.name, 
            price: selectedService.price, 
            image: selectedService.image 
          }} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default ServicesPage;
