import { useNavigate } from "react-router-dom";
import { categories } from "@/data/products";

const categoryIcons: Record<string, string> = {
  "Velas": "🕯️",
  "Cuidado Facial": "✨",
  "Jabones": "🧼",
  "Aceites Esenciales": "🌿",
  "Baño y Spa": "🛁",
  "Joyería": "💎",
  "Aromaterapia": "🌸",
  "Maquillaje Natural": "💄",
  "Cuidado Capilar": "💇‍♀️",
  "Cremas Corporales": "🧴",
  "Exfoliantes": "🫧",
  "Mascarillas": "🎭",
  "Perfumes Naturales": "🌺",
  "Sets de Regalo": "🎁",
  "Accesorios": "👜",
};

const CatalogSection = () => {
  const navigate = useNavigate();

  const handleCategory = (cat: string) => {
    navigate(`/categoria/${cat.toLowerCase().replace(/\s+/g, "-")}`);
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
            Explora nuestra selección de productos artesanales, creados con los mejores ingredientes naturales.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {categoryIcons[cat] || "🛍️"}
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight">
                {cat}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
