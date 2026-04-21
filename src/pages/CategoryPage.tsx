import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { products, categories } from "@/data/products";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const categoryName = categories.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const filtered = products.filter((p) => p.category === categoryName);

  if (!categoryName) {
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
    <div className="min-h-screen gradient-hero">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Volver al catálogo</span>
        </button>

        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Categoría</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">{categoryName}</h1>
          <p className="text-muted-foreground mt-3">{filtered.length} productos disponibles</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">{product.price}</span>
                  <button className="gradient-primary text-primary-foreground p-2.5 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
