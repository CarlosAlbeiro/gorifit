import { useSite } from "@/context/SiteContext";
import { Loader2, WifiOff } from "lucide-react";

const ServicesSection = () => {
  const { services, categories, isLoading, isConnected } = useSite();
  
  const activeServices = services.filter(s => s.active);

  if (activeServices.length === 0) return null;

  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Experiencias</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mis Servicios
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ofrezco una variedad de servicios profesionales diseñados para resaltar tu belleza única en cada ocasión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeServices.map((service, i) => {
            const categoryName = categories.find(c => c.id === service.category_id)?.name || "General";
            return (
              <div
                key={service.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image || "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop"}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                      {categoryName}
                    </span>
                    <span className="font-bold text-lg text-foreground">
                      ${service.price.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
