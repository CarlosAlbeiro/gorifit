import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const categories = ["Todos", "Velas", "Cuidado", "Jabones", "Aceites", "Baño", "Joyería"];

const products = [
  { id: 1, name: "Vela Artesanal Rosa", category: "Velas", price: "$18.00", image: product1, description: "Cera de soja con aroma a rosas y vainilla" },
  { id: 2, name: "Crema Hidratante Luxe", category: "Cuidado", price: "$32.00", image: product2, description: "Hidratación profunda con extracto de lavanda" },
  { id: 3, name: "Jabón Floral Artesanal", category: "Jabones", price: "$12.00", image: product3, description: "Jabón natural con flores secas y karité" },
  { id: 4, name: "Aceite Esencial Lavanda", category: "Aceites", price: "$24.00", image: product4, description: "Aceite puro para aromaterapia y relajación" },
  { id: 5, name: "Set Bombas de Baño", category: "Baño", price: "$28.00", image: product5, description: "6 bombas efervescentes con aceites esenciales" },
  { id: 6, name: "Pulsera Amatista", category: "Joyería", price: "$45.00", image: product6, description: "Pulsera artesanal con piedras de amatista" },
];

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos" ? products : products.filter((p) => p.category === activeCategory);

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

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "gradient-primary text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground hover:shadow-card"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
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
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <span className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-xs font-medium text-muted-foreground px-3 py-1 rounded-full border border-border">
                  {product.category}
                </span>
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
    </section>
  );
};

export default CatalogSection;
