export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  brand: string | null;
  reference: string | null;
  notes: string | null;
  description: string;
}

export const categories = [
  "Categoría 1",
  "Categoría 2",
  "Categoría 3"
];

export const products: Product[] = [
  {
    id: 1,
    name: "Producto Ejemplo 1",
    category: "Categoría 1",
    price: 10000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
    brand: "Marca A",
    reference: "REF-001",
    notes: "Nota de ejemplo",
    description: "Descripción detallada del producto de ejemplo."
  },
  {
    id: 2,
    name: "Producto Ejemplo 2",
    category: "Categoría 2",
    price: 20000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
    brand: "Marca B",
    reference: "REF-002",
    notes: null,
    description: "Otro producto de ejemplo para el catálogo."
  }
];
