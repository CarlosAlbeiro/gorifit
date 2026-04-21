import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export const categories = [
  "Velas",
  "Cuidado Facial",
  "Jabones",
  "Aceites Esenciales",
  "Baño y Spa",
  "Joyería",
  "Aromaterapia",
  "Maquillaje Natural",
  "Cuidado Capilar",
  "Cremas Corporales",
  "Exfoliantes",
  "Mascarillas",
  "Perfumes Naturales",
  "Sets de Regalo",
  "Accesorios",
];

const images = [product1, product2, product3, product4, product5, product6];
const pick = (i: number) => images[i % images.length];

export const products: Product[] = [
  // Velas
  { id: 1, name: "Vela Artesanal Rosa", category: "Velas", price: "$18.00", image: pick(0), description: "Cera de soja con aroma a rosas y vainilla" },
  { id: 2, name: "Vela Lavanda Nocturna", category: "Velas", price: "$20.00", image: pick(1), description: "Perfecta para relajación antes de dormir" },
  { id: 3, name: "Vela Cítrica Energizante", category: "Velas", price: "$19.00", image: pick(2), description: "Naranja y limón para recargar energías" },

  // Cuidado Facial
  { id: 4, name: "Sérum Vitamina C", category: "Cuidado Facial", price: "$38.00", image: pick(1), description: "Ilumina y protege tu piel del envejecimiento" },
  { id: 5, name: "Tónico de Rosas", category: "Cuidado Facial", price: "$25.00", image: pick(3), description: "Hidrata y equilibra el pH de tu piel" },
  { id: 6, name: "Contorno de Ojos", category: "Cuidado Facial", price: "$42.00", image: pick(4), description: "Reduce ojeras y líneas de expresión" },

  // Jabones
  { id: 7, name: "Jabón Floral Artesanal", category: "Jabones", price: "$12.00", image: pick(2), description: "Jabón natural con flores secas y karité" },
  { id: 8, name: "Jabón de Avena y Miel", category: "Jabones", price: "$14.00", image: pick(0), description: "Exfoliación suave con ingredientes naturales" },
  { id: 9, name: "Jabón Carbón Activado", category: "Jabones", price: "$15.00", image: pick(5), description: "Limpieza profunda para pieles grasas" },

  // Aceites Esenciales
  { id: 10, name: "Aceite Esencial Lavanda", category: "Aceites Esenciales", price: "$24.00", image: pick(3), description: "Aceite puro para aromaterapia y relajación" },
  { id: 11, name: "Aceite de Árbol de Té", category: "Aceites Esenciales", price: "$22.00", image: pick(4), description: "Antibacterial natural para tu rutina diaria" },
  { id: 12, name: "Aceite de Eucalipto", category: "Aceites Esenciales", price: "$20.00", image: pick(1), description: "Despeja las vías respiratorias naturalmente" },

  // Baño y Spa
  { id: 13, name: "Set Bombas de Baño", category: "Baño y Spa", price: "$28.00", image: pick(4), description: "6 bombas efervescentes con aceites esenciales" },
  { id: 14, name: "Sales de Baño Relajantes", category: "Baño y Spa", price: "$22.00", image: pick(5), description: "Sales del Himalaya con lavanda y romero" },
  { id: 15, name: "Espuma de Baño Luxury", category: "Baño y Spa", price: "$26.00", image: pick(0), description: "Espuma sedosa con extracto de vainilla" },

  // Joyería
  { id: 16, name: "Pulsera Amatista", category: "Joyería", price: "$45.00", image: pick(5), description: "Pulsera artesanal con piedras de amatista" },
  { id: 17, name: "Collar Cuarzo Rosa", category: "Joyería", price: "$55.00", image: pick(0), description: "Energía de amor con cuarzo rosa natural" },
  { id: 18, name: "Aretes Jade Natural", category: "Joyería", price: "$38.00", image: pick(2), description: "Elegancia natural con piedras de jade" },

  // Aromaterapia
  { id: 19, name: "Difusor de Bambú", category: "Aromaterapia", price: "$35.00", image: pick(3), description: "Difusor artesanal con varillas de bambú" },
  { id: 20, name: "Incienso Natural Pack", category: "Aromaterapia", price: "$16.00", image: pick(1), description: "Pack de 20 varitas de incienso natural" },
  { id: 21, name: "Spray Ambiental Zen", category: "Aromaterapia", price: "$18.00", image: pick(4), description: "Spray relajante para tu hogar u oficina" },

  // Maquillaje Natural
  { id: 22, name: "Bálsamo Labial Tintado", category: "Maquillaje Natural", price: "$14.00", image: pick(0), description: "Color natural con manteca de karité" },
  { id: 23, name: "Rubor en Crema", category: "Maquillaje Natural", price: "$22.00", image: pick(2), description: "Tono rosado natural para un glow saludable" },
  { id: 24, name: "Máscara de Pestañas Bio", category: "Maquillaje Natural", price: "$28.00", image: pick(5), description: "Volumen y largo sin químicos agresivos" },

  // Cuidado Capilar
  { id: 25, name: "Shampoo de Romero", category: "Cuidado Capilar", price: "$20.00", image: pick(1), description: "Fortalece y estimula el crecimiento capilar" },
  { id: 26, name: "Mascarilla Capilar Coco", category: "Cuidado Capilar", price: "$24.00", image: pick(3), description: "Nutrición profunda con aceite de coco" },
  { id: 27, name: "Aceite Capilar Argán", category: "Cuidado Capilar", price: "$30.00", image: pick(4), description: "Brillo y suavidad con argán puro" },

  // Cremas Corporales
  { id: 28, name: "Crema Hidratante Luxe", category: "Cremas Corporales", price: "$32.00", image: pick(1), description: "Hidratación profunda con extracto de lavanda" },
  { id: 29, name: "Manteca Corporal Cacao", category: "Cremas Corporales", price: "$28.00", image: pick(0), description: "Nutrición intensa con manteca de cacao" },
  { id: 30, name: "Gel Aloe Vera Puro", category: "Cremas Corporales", price: "$18.00", image: pick(2), description: "Calmante y refrescante para todo tipo de piel" },

  // Exfoliantes
  { id: 31, name: "Exfoliante Café y Coco", category: "Exfoliantes", price: "$22.00", image: pick(5), description: "Activa la circulación y suaviza la piel" },
  { id: 32, name: "Scrub Azúcar y Rosas", category: "Exfoliantes", price: "$20.00", image: pick(0), description: "Exfoliación delicada con pétalos de rosa" },
  { id: 33, name: "Exfoliante Sal Marina", category: "Exfoliantes", price: "$19.00", image: pick(3), description: "Limpieza profunda con minerales del mar" },

  // Mascarillas
  { id: 34, name: "Mascarilla Arcilla Verde", category: "Mascarillas", price: "$16.00", image: pick(2), description: "Purifica y desintoxica pieles mixtas" },
  { id: 35, name: "Mascarilla Miel y Avena", category: "Mascarillas", price: "$18.00", image: pick(4), description: "Hidratación y nutrición para pieles secas" },
  { id: 36, name: "Mascarilla Carbón Detox", category: "Mascarillas", price: "$20.00", image: pick(5), description: "Elimina impurezas y reduce poros" },

  // Perfumes Naturales
  { id: 37, name: "Perfume Floral Silvestre", category: "Perfumes Naturales", price: "$48.00", image: pick(3), description: "Notas de jazmín, rosa y sándalo" },
  { id: 38, name: "Eau de Toilette Cítrica", category: "Perfumes Naturales", price: "$42.00", image: pick(1), description: "Frescura de bergamota y mandarina" },
  { id: 39, name: "Roll-on Esencia Vainilla", category: "Perfumes Naturales", price: "$28.00", image: pick(0), description: "Aroma dulce y cálido en formato portátil" },

  // Sets de Regalo
  { id: 40, name: "Set Spa en Casa", category: "Sets de Regalo", price: "$85.00", image: pick(4), description: "Vela, sales de baño, jabón y crema corporal" },
  { id: 41, name: "Kit Cuidado Facial", category: "Sets de Regalo", price: "$78.00", image: pick(1), description: "Sérum, tónico, mascarilla y contorno de ojos" },
  { id: 42, name: "Box Aromaterapia", category: "Sets de Regalo", price: "$65.00", image: pick(3), description: "Difusor, aceites esenciales y vela aromática" },

  // Accesorios
  { id: 43, name: "Bolsa de Yute Eco", category: "Accesorios", price: "$15.00", image: pick(5), description: "Bolsa reutilizable con diseño artesanal" },
  { id: 44, name: "Porta Jabón Bambú", category: "Accesorios", price: "$12.00", image: pick(2), description: "Elegante porta jabón de bambú natural" },
  { id: 45, name: "Esponja Konjac Natural", category: "Accesorios", price: "$10.00", image: pick(0), description: "Limpieza facial suave y biodegradable" },
];
