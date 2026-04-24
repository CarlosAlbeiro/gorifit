import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Loader2, Search, X } from "lucide-react";
import { useSite } from "@/context/SiteContext";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { products, categories, isLoading } = useSite();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-hero">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  const category = categories.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const filtered = useMemo(() => {
    let result = products.filter((p) => p.category_id === category?.id && p.active);
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerSearch) || 
        (p.brand_name && p.brand_name.toLowerCase().includes(lowerSearch)) ||
        (p.reference && p.reference.toLowerCase().includes(lowerSearch))
      );
    }
    return result;
  }, [products, category, searchTerm]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-hero">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Categoría no encontrada</h1>
          <button onClick={() => navigate("/")} className="gradient-primary text-primary-foreground px-6 py-2 rounded-lg">
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Search Header */}
      <div className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors shrink-0"
          >
            <ArrowLeft size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">Volver</span>
          </button>
          
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder={`Buscar en ${category.name}...`}
              className="pl-10 h-10 bg-secondary/10 dark:bg-white/5 border-none rounded-xl focus-visible:ring-primary/30"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary/20 dark:hover:bg-white/10"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
          
          <div className="hidden lg:block shrink-0 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
            <p className="text-[10px] font-bold text-primary dark:text-pink-300 uppercase tracking-widest leading-none">Categoría</p>
            <p className="text-sm font-bold text-foreground leading-none mt-1">{category.name}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">{category.name}</h1>
          <p className="text-muted-foreground text-sm">
            {searchTerm ? `Resultados para "${searchTerm}"` : `${filtered.length} productos profesionales disponibles`}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground/50" />
            </div>
            <h3 className="text-xl font-semibold">No se encontraron productos</h3>
            <p className="text-muted-foreground mt-2">Prueba con palabras como "brocha", "atenea" o el nombre del producto.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-square bg-secondary/10">
                  <img
                    src={product.image || PLACEHOLDER_IMAGE}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <div className="flex-1">
                    {product.brand_name && (
                      <p className="text-[10px] font-black text-primary mb-1 uppercase tracking-tighter">{product.brand_name}</p>
                    )}
                    <h3 className="font-heading text-sm font-bold text-foreground line-clamp-2 leading-tight min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {product.reference && (
                        <p className="text-[10px] text-muted-foreground font-medium bg-secondary/50 px-1.5 py-0.5 rounded w-fit">
                          Ref: {product.reference}
                        </p>
                      )}
                      {product.notes && (
                        <p className="text-[10px] text-amber-600 dark:text-amber-400 italic line-clamp-1">
                          {product.notes}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-secondary/50">
                    <span className="text-base font-black text-foreground">
                      ${product.price?.toLocaleString("es-CO") || "0"}
                    </span>
                    <button className="bg-primary text-primary-foreground p-2 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-110">
                      <ShoppingBag size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
