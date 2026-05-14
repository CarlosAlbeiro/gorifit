import { useSite } from "@/context/SiteContext";
import { Loader2, WifiOff } from "lucide-react";

const ServicesSection = () => {
  const { services, categories, isLoading, isConnected, getMediaUrl } = useSite();
  
  const activeServices = services.filter(s => s.active);

  if (activeServices.length === 0) return null;

  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Entrenamiento</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mis Servicios
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ofrecemos planes de entrenamiento y asesoría nutricional para llevar tu físico al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {activeServices.map((service, i) => {
            const categoryName = categories.find(c => c.id === service.category_id)?.name || "General";
            return (
              <div
                key={service.id}
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={getMediaUrl(service.image)}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/logo_gori.png'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span className="text-white font-bold text-lg">${service.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">
                    {categoryName}
                  </span>
                  <h3 className="text-lg font-bold mb-1 leading-tight group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2">
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
