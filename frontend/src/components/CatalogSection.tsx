import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSite } from "@/context/SiteContext";
import { Loader2, WifiOff, Sparkles, ShoppingBag, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";



const CatalogSection = () => {
  const { products, categories, isLoading, getMediaUrl } = useSite();
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8);

  const catalogCategories = categories.filter(c => c.type === 'product' && c.active);

  // Filter active products and sort by promotion
  const allProducts = products
    .filter(p => p.active)
    .sort((a, b) => (b.is_promotion ? 1 : 0) - (a.is_promotion ? 1 : 0));

  const displayProducts = allProducts.slice(0, visibleCount);

  const handleProduct = (p: any) => {
    navigate(`/categoria/${p.category_name?.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const handleCategoryClick = (catName: string) => {
    navigate(`/categoria/${catName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section id="catalogo" className="py-24 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Arsenal</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Catálogo
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explora nuestra selección de suplementos de alto rendimiento para potenciar tus resultados.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {catalogCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.name)}
              className="px-6 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-primary/10 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-bold shadow-sm"
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div 
              key={product.id}
              onClick={() => handleProduct(product)}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-card border border-border shadow-card hover:shadow-2xl transition-all duration-500 animate-fade-in"
            >
              <img 
                src={getMediaUrl(product.image)} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={product.name}
                onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.png'; }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {product.is_promotion && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white border-none px-3 py-1 flex gap-1 items-center shadow-lg animate-bounce">
                    <Sparkles className="w-3 h-3" /> Promoción
                  </Badge>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/70 mb-1">{product.category_name}</p>
                <h3 className="text-xl font-bold mb-2 leading-tight">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-primary">${product.price.toLocaleString()}</span>
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-full group-hover:bg-primary transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allProducts.length > visibleCount && (
          <div className="mt-16 text-center">
            <Button 
              onClick={loadMore}
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Plus className="w-4 h-4 mr-2" /> Cargar más productos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;

