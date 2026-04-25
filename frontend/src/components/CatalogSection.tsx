import { useNavigate } from "react-router-dom";
import { useSite } from "@/context/SiteContext";
import { Loader2, WifiOff } from "lucide-react";

const CatalogSection = () => {
  const { categories, isLoading, isConnected } = useSite();
  const navigate = useNavigate();

  const catalogCategories = categories.filter(c => c.type === 'product' && c.active);

  const handleCategory = (catName: string) => {
    navigate(`/categoria/${catName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <section id="catalogo" className="py-24 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Colección</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Catálogo
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explora nuestra selección de productos profesionales para resaltar tu belleza.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {catalogCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => handleCategory(cat.name)}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {cat.icon || "🛍️"}
              </span>
              <span className="text-sm font-semibold text-foreground text-center leading-tight">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
