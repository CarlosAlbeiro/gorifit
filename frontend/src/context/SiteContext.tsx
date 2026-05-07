import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";


export const API_URL = (() => {
  // 1. Prioritize build-time environment variable
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  
  // 2. Smart detection for production environment
  if (typeof window !== 'undefined' && window.location.hostname.includes('galeotek.site')) {
    const protocol = window.location.protocol;
    // Auto-resolve to api- subdomain on the same domain
    return `${protocol}//api-luisa-restrepo.galeotek.site/api`;
  }
  
  // 3. Fallback to local development
  return "http://localhost:3050/api";
})();

interface SectionVisibility {
  hero: boolean;
  profile: boolean;
  catalog: boolean;
  services: boolean;
  contact: boolean;
}

interface Category {
  id: string | number;
  name: string;
  type: 'service' | 'product';
  icon?: string;
  active: boolean;
}

interface Brand {
  id: string | number;
  name: string;
  description?: string;
  logo_url?: string;
  active: boolean;
}

interface Service {
  id: number | string;
  name: string;
  description: string;
  price: number;
  category_id?: string | number;
  image: string;
  active: boolean;
}

interface Product {
  id: number | string;
  name: string;
  description: string;
  price: number;
  category_id?: string | number;
  brand_id?: string | number;
  brand_name?: string;
  category_name?: string;
  image: string;
  active: boolean;
  reference?: string;
  notes?: string;
  is_promotion: boolean;
}

interface Client {
  id: number | string;
  name: string;
  phone: string;
  email: string;
  city: string;
  created_at: string;
}


interface ProfileData {
  name: string;
  fullname: string;
  bio: string;
  imageUrl: string;
  site_icon_url: string;
  stats_years: string;
  stats_clients: string;
  stats_products: string;
  stats_awards: string;
  tiktok_video_url?: string;
  wa_msg_advice?: string;
  wa_msg_product?: string;
  auto_response_active: boolean;
  active: boolean;
}


interface ContactData {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  instagram_url: string;
  instagram_active: boolean;
  tiktok_url: string;
  tiktok_active: boolean;
  facebook_url: string;
  facebook_active: boolean;
  youtube_url: string;
  youtube_active: boolean;
  active: boolean;
}

interface SiteContextType {
  sections: SectionVisibility;
  profile: ProfileData;
  contact: ContactData;
  services: Service[];
  products: Product[];
  categories: Category[];
  brands: Brand[];
  isLoading: boolean;
  isConnected: boolean;
  token: string | null;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  setSectionVisibility: (section: keyof SectionVisibility, visible: boolean) => void;
  updateProfile: (data: Partial<ProfileData>) => void;
  updateContact: (data: Partial<ContactData>) => void;
  addService: (service: Omit<Service, "id">) => void;
  updateService: (id: number | string, data: Partial<Service>) => void;
  deleteService: (id: number | string) => void;
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: number | string, data: Partial<Product>) => void;
  deleteProduct: (id: number | string) => void;
  addCategory: (category: Omit<Category, "id">) => void;
  updateCategory: (id: number | string, data: Partial<Category>) => void;
  deleteCategory: (id: number | string) => void;
  addBrand: (brand: Omit<Brand, "id">) => void;
  updateBrand: (id: number | string, data: Partial<Brand>) => void;
  deleteBrand: (id: number | string) => void;
  clients: Client[];
  addClient: (client: Omit<Client, "id" | "created_at">) => void;
  updateClient: (id: number | string, data: Partial<Client>) => void;
  deleteClient: (id: number | string) => void;
  getMediaUrl: (path: string | null | undefined) => string;
  fetchWithAuth: (url: string, options?: any) => Promise<Response>;
}


const SiteContext = createContext<SiteContextType | undefined>(undefined);

const DEFAULT_SECTIONS: SectionVisibility = {
  hero: true, profile: true, catalog: true, services: true, contact: true,
};

const DEFAULT_PROFILE: ProfileData = {
  name: "Luisa Restrepo", fullname: "Luisa Restrepo - Maquilladora Profesional", bio: "Maquilladora profesional...", imageUrl: "/placeholder.svg", site_icon_url: "/favicon.ico",
  stats_years: "8+", stats_clients: "500+", stats_products: "120+", stats_awards: "15", auto_response_active: true, active: true,
};


const DEFAULT_CONTACT: ContactData = {
  phone: "+57 300 000 0000", email: "hola@luisarestrepo.com", address: "Medellín, Colombia",
  whatsapp: "", instagram_url: "", instagram_active: true, tiktok_url: "", tiktok_active: true,
  facebook_url: "", facebook_active: true, youtube_url: "", youtube_active: true, active: true,
};

const getLocal = (key: string, defaultValue: any) => {
  const saved = localStorage.getItem(key);
  try {
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (e) { return defaultValue; }
};

const isTokenExpired = (token: string | null) => {
  if (!token) return true;
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    const { exp } = JSON.parse(jsonPayload);
    if (!exp) return false;
    
    const currentTime = Math.floor(Date.now() / 1000);
    return exp < currentTime;
  } catch (e) {
    return true;
  }
};

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sections, setSections] = useState<SectionVisibility>(() => getLocal("site_sections", DEFAULT_SECTIONS));
  const [profile, setProfile] = useState<ProfileData>(() => getLocal("site_profile", DEFAULT_PROFILE));
  const [contact, setContact] = useState<ContactData>(() => getLocal("site_contact", DEFAULT_CONTACT));
  const [services, setServices] = useState<Service[]>(() => getLocal("site_services", []));
  const [products, setProducts] = useState<Product[]>(() => getLocal("site_products", []));
  const [categories, setCategories] = useState<Category[]>(() => getLocal("site_categories", []));
  const [brands, setBrands] = useState<Brand[]>(() => getLocal("site_brands", []));
  const [clients, setClients] = useState<Client[]>(() => getLocal("site_clients", []));
  
  const [isLoading, setIsLoading] = useState(true);

  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<any>(() => getLocal("auth_user", null));
  const [token, setToken] = useState<string | null>(localStorage.getItem("auth_token"));
  const [theme, setTheme] = useState<'light' | 'dark'>((localStorage.getItem("site_theme") as 'light' | 'dark') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem("site_theme", theme);
  }, [theme]);

  useEffect(() => {
    if (profile.site_icon_url) {
      const link: HTMLLinkElement = document.querySelector("link[rel~='icon']") || document.createElement('link');
      link.rel = 'icon';
      link.href = getMediaUrl(profile.site_icon_url);
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, [profile.site_icon_url]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const saveLocal = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));

  const login = async (username: string, password: string) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("auth_token", data.token);
        saveLocal("auth_user", data.user);
        return true;
      }
      return false;
    } catch (err) { return false; }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  };

  const fetchWithAuth = async (url: string, options: any = {}) => {
    const currentToken = localStorage.getItem("auth_token");
    
    if (isTokenExpired(currentToken)) {
      logout();
      window.location.href = '/login';
      throw new Error("Session expired");
    }

    const res = await fetch(url, { 
      ...options, 
      headers: { 
        ...options.headers, 
        'Authorization': `Bearer ${currentToken}` 
      } 
    });
    
    if (res.status === 401 || res.status === 403) {
      logout();
      window.location.href = '/login';
    }
    return res;
  };


  const fetchAllData = async () => {
    setIsLoading(true);
    try {
      const healthRes = await fetch(`${API_URL}/sections`);
      if (!healthRes.ok) throw new Error("Offline");
      setIsConnected(true);

      const sData = await healthRes.json();
      const sObj = { ...DEFAULT_SECTIONS };
      sData.forEach((s: any) => { if (s.section_name in sObj) sObj[s.section_name as keyof SectionVisibility] = s.is_active; });
      setSections(sObj);
      saveLocal("site_sections", sObj);

      const pRes = await fetch(`${API_URL}/profile`);
      if (pRes.ok) {
        const pData = await pRes.json();
        if (pData.length > 0) {
          const p = pData[0];
          const np = { 
            name: p.name, 
            fullname: p.fullname || '', 
            bio: p.bio, 
            imageUrl: p.image_url || "/placeholder.svg", 
            site_icon_url: p.site_icon_url || "/favicon.ico",
            stats_years: p.stats_years || "8+", 
            stats_clients: p.stats_clients || "500+", 
            stats_products: p.stats_products || "120+", 
            stats_awards: p.stats_awards || "15",
            auto_response_active: p.auto_response_active ?? true,
            tiktok_video_url: p.tiktok_video_url || '',
            wa_msg_advice: p.wa_msg_advice || "Hola! He visto tu sitio y me gustaría recibir asesoría personalizada. ✨",
            wa_msg_product: p.wa_msg_product || "Hola! Me interesa este producto: {product}. Me darías más información? 🛍️",
            active: p.is_active 
          };
          setProfile(np);
          saveLocal("site_profile", np);
        }
      }

      const cRes = await fetch(`${API_URL}/clients`);
      if (cRes.ok) {
        const cData = await cRes.json();
        setClients(cData);
        saveLocal("site_clients", cData);
      }


      const contactRes = await fetch(`${API_URL}/contact`);
      if (contactRes.ok) {
        const c = (await contactRes.json())[0];
        if (c) {
          const nc = { phone: c.phone || DEFAULT_CONTACT.phone, email: c.email || DEFAULT_CONTACT.email, address: c.address || DEFAULT_CONTACT.address, whatsapp: c.whatsapp || DEFAULT_CONTACT.whatsapp, instagram_url: c.instagram_url || "", instagram_active: c.instagram_active ?? true, tiktok_url: c.tiktok_url || "", tiktok_active: c.tiktok_active ?? true, facebook_url: c.facebook_url || "", facebook_active: c.facebook_active ?? true, youtube_url: c.youtube_url || "", youtube_active: c.youtube_active ?? true, active: c.is_active ?? true };
          setContact(nc);
          saveLocal("site_contact", nc);
        }
      }

      const catRes = await fetch(`${API_URL}/categories`);
      if (catRes.ok) {
        const data = await catRes.json();
        const cats = data.map((c: any) => ({ id: c.id, name: c.name, type: c.type, icon: c.icon, active: c.is_active }));
        setCategories(cats);
        saveLocal("site_categories", cats);
      }

      const brandRes = await fetch(`${API_URL}/brands`);
      if (brandRes.ok) {
        const data = await brandRes.json();
        const bnds = data.map((b: any) => ({ id: b.id, name: b.name, description: b.description, logo_url: b.logo_url, active: b.is_active }));
        setBrands(bnds);
        saveLocal("site_brands", bnds);
      }

      const servicesRes = await fetch(`${API_URL}/services`);
      if (servicesRes.ok) {
        const data = await servicesRes.json();
        const srvs = data.map((s: any) => ({ id: s.id, name: s.name, description: s.description, price: parseFloat(s.price), category_id: s.category_id, image: s.image_url, active: s.is_active }));
        setServices(srvs);
        saveLocal("site_services", srvs);
      }

      const prRes = await fetch(`${API_URL}/products`);
      if (prRes.ok) {
        const data = await prRes.json();
        const prds = data.map((p: any) => ({ id: p.id, name: p.name, description: p.description, price: parseFloat(p.price), category_id: p.category_id, category_name: p.category_name, brand_id: p.brand_id, brand_name: p.brand_name, image: p.image_url, active: p.is_active, reference: p.reference, notes: p.notes, is_promotion: p.is_promotion }));
        setProducts(prds);
        saveLocal("site_products", prds);
      }

    } catch (err) {
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { 
    const t = localStorage.getItem("auth_token");
    if (t && isTokenExpired(t)) {
      logout();
    }
    fetchAllData(); 
  }, []);

  const setSectionVisibility = async (section: keyof SectionVisibility, visible: boolean) => {
    setSections(prev => { const n = { ...prev, [section]: visible }; saveLocal("site_sections", n); return n; });
    try {
      const res = await fetch(`${API_URL}/sections`);
      const data = await res.json();
      const s = data.find((item: any) => item.section_name === section);
      if (s) await fetchWithAuth(`${API_URL}/sections/${s.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ is_active: visible }) });
    } catch (err) { }
  };

  const updateProfile = async (data: Partial<ProfileData>) => {
    setProfile(prev => { const n = { ...prev, ...data }; saveLocal("site_profile", n); return n; });
    try {
      const res = await fetch(`${API_URL}/profile`);
      const p = (await res.json())[0];
      if (p) {
        const payload: any = {
          name: data.name,
          fullname: data.fullname,
          bio: data.bio,
          is_active: data.active,
          image_url: data.imageUrl,
          site_icon_url: data.site_icon_url,
          stats_years: data.stats_years,
          stats_clients: data.stats_clients,
          stats_products: data.stats_products,
          stats_awards: data.stats_awards,
          auto_response_active: data.auto_response_active,
          tiktok_video_url: data.tiktok_video_url,
          wa_msg_advice: data.wa_msg_advice,
          wa_msg_product: data.wa_msg_product
        };

        // Remove undefined keys to avoid overwriting with null
        Object.keys(payload).forEach(key => payload[key] === undefined && delete payload[key]);
        
        await fetchWithAuth(`${API_URL}/profile/${p.id}`, { 
          method: 'PUT', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload) 
        });
        fetchAllData();
      }
    } catch (err) { }
  };


  const updateContact = async (data: Partial<ContactData>) => {
    setContact(prev => { const n = { ...prev, ...data }; saveLocal("site_contact", n); return n; });
    try {
      const res = await fetch(`${API_URL}/contact`);
      const c = (await res.json())[0];
      if (c) {
        const payload: any = { phone: data.phone, email: data.email, address: data.address, is_active: data.active, instagram_url: data.instagram_url, instagram_active: data.instagram_active, tiktok_url: data.tiktok_url, tiktok_active: data.tiktok_active, facebook_url: data.facebook_url, facebook_active: data.facebook_active, youtube_url: data.youtube_url, youtube_active: data.youtube_active };
        Object.keys(payload).forEach(k => payload[k] === undefined && delete payload[k]);
        await fetchWithAuth(`${API_URL}/contact/${c.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        fetchAllData();
      }
    } catch (err) { }
  };


  const addCategory = async (cat: Omit<Category, "id">) => {
    const tid = toast.loading("Creando categoría...");
    try {
      await fetchWithAuth(`${API_URL}/categories`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: cat.name, type: cat.type, icon: cat.icon, is_active: cat.active }) });
      toast.success("Categoría creada", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al crear", { id: tid }); }
  };

  const updateCategory = async (id: number | string, data: Partial<Category>) => {
    const tid = toast.loading("Actualizando categoría...");
    try {
      const p: any = { name: data.name, type: data.type, icon: data.icon, is_active: data.active };
      Object.keys(p).forEach(k => p[k] === undefined && delete p[k]);
      await fetchWithAuth(`${API_URL}/categories/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
      toast.success("Categoría actualizada", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al actualizar", { id: tid }); }
  };


  const deleteCategory = async (id: number | string) => {
    const tid = toast.loading("Eliminando categoría...");
    try { 
      await fetchWithAuth(`${API_URL}/categories/${id}`, { method: 'DELETE' }); 
      toast.success("Categoría eliminada", { id: tid });
      fetchAllData(); 
    } catch (err) { toast.error("Error al eliminar", { id: tid }); }
  };


  const addBrand = async (brand: Omit<Brand, "id">) => {
    const tid = toast.loading("Creando marca...");
    try {
      await fetchWithAuth(`${API_URL}/brands`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: brand.name, description: brand.description, logo_url: brand.logo_url, is_active: brand.active }) });
      toast.success("Marca creada", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al crear", { id: tid }); }
  };

  const updateBrand = async (id: number | string, data: Partial<Brand>) => {
    const tid = toast.loading("Actualizando marca...");
    try {
      const p: any = { name: data.name, description: data.description, logo_url: data.logo_url, is_active: data.active };
      Object.keys(p).forEach(k => p[k] === undefined && delete p[k]);
      await fetchWithAuth(`${API_URL}/brands/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
      toast.success("Marca actualizada", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al actualizar", { id: tid }); }
  };


  const deleteBrand = async (id: number | string) => {
    const tid = toast.loading("Eliminando marca...");
    try { 
      await fetchWithAuth(`${API_URL}/brands/${id}`, { method: 'DELETE' }); 
      toast.success("Marca eliminada", { id: tid });
      fetchAllData(); 
    } catch (err) { toast.error("Error al eliminar", { id: tid }); }
  };


  const addService = async (s: Omit<Service, "id">) => {
    const tid = toast.loading("Creando servicio...");
    try {
      await fetchWithAuth(`${API_URL}/services`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: s.name, description: s.description, price: s.price, category_id: s.category_id, is_active: s.active, image_url: s.image }) });
      toast.success("Servicio creado", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al crear", { id: tid }); }
  };

  const updateService = async (id: number | string, data: Partial<Service>) => {
    const tid = toast.loading("Actualizando servicio...");
    try {
      const p: any = { name: data.name, description: data.description, price: data.price, category_id: data.category_id, is_active: data.active, image_url: data.image };
      Object.keys(p).forEach(k => p[k] === undefined && delete p[k]);
      await fetchWithAuth(`${API_URL}/services/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
      toast.success("Servicio actualizado", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al actualizar", { id: tid }); }
  };


  const deleteService = async (id: number | string) => {
    const tid = toast.loading("Eliminando servicio...");
    try { 
      await fetchWithAuth(`${API_URL}/services/${id}`, { method: 'DELETE' }); 
      toast.success("Servicio eliminado", { id: tid });
      fetchAllData(); 
    } catch (err) { toast.error("Error al eliminar", { id: tid }); }
  };


  const addProduct = async (p: Omit<Product, "id">) => {
    const tid = toast.loading("Creando producto...");
    try {
      await fetchWithAuth(`${API_URL}/products`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: p.name, description: p.description, price: p.price, category_id: p.category_id, brand_id: p.brand_id, reference: p.reference, notes: p.notes, is_active: p.active, image_url: p.image, is_promotion: p.is_promotion }) });
      toast.success("Producto creado", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al crear", { id: tid }); }
  };

  const updateProduct = async (id: number | string, data: Partial<Product>) => {
    const tid = toast.loading("Actualizando producto...");
    try {
      const p: any = { name: data.name, description: data.description, price: data.price, category_id: data.category_id, brand_id: data.brand_id, reference: data.reference, notes: data.notes, is_active: data.active, image_url: data.image, is_promotion: data.is_promotion };
      Object.keys(p).forEach(k => p[k] === undefined && delete p[k]);
      await fetchWithAuth(`${API_URL}/products/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
      toast.success("Producto actualizado", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al actualizar", { id: tid }); }
  };



  const deleteProduct = async (id: number | string) => {
    const tid = toast.loading("Eliminando producto...");
    try { 
      await fetchWithAuth(`${API_URL}/products/${id}`, { method: 'DELETE' }); 
      toast.success("Producto eliminado", { id: tid });
      fetchAllData(); 
    } catch (err) { toast.error("Error al eliminar", { id: tid }); }
  };


  const addClient = async (client: Omit<Client, "id" | "created_at">) => {
    const tid = toast.loading("Agregando cliente...");
    try {
      await fetchWithAuth(`${API_URL}/clients`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(client) });
      toast.success("Cliente agregado", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al agregar", { id: tid }); }
  };

  const updateClient = async (id: number | string, client: Partial<Client>) => {
    const tid = toast.loading("Actualizando cliente...");
    try {
      await fetchWithAuth(`${API_URL}/clients/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(client) });
      toast.success("Cliente actualizado", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al actualizar", { id: tid }); }
  };

  const deleteClient = async (id: number | string) => {
    const tid = toast.loading("Eliminando cliente...");
    try {
      await fetchWithAuth(`${API_URL}/clients/${id}`, { method: 'DELETE' });
      toast.success("Cliente eliminado", { id: tid });
      fetchAllData();
    } catch (err) { toast.error("Error al eliminar", { id: tid }); }
  };



  const getMediaUrl = (path: string | null | undefined) => {

    if (!path || path === "/placeholder.svg") return "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500&auto=format&fit=crop";

    if (path.startsWith('http') || path.startsWith('data:')) {
      // Force https if current page is https
      if (window.location.protocol === 'https:' && path.startsWith('http:')) {
        return path.replace('http:', 'https:');
      }
      return path;
    }
    
    let cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    // Auto-fix for manual entries that forget the /uploads/ prefix
    if (!cleanPath.startsWith('/uploads/') && !cleanPath.startsWith('/api/uploads/')) {
      cleanPath = `/uploads${cleanPath}`;
    }
    
    // Use the full API_URL as base
    let baseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
    
    // Force https if current page is https
    if (window.location.protocol === 'https:' && baseUrl.startsWith('http:')) {
      baseUrl = baseUrl.replace('http:', 'https:');
    }
    
    return `${baseUrl}${cleanPath}`;
  };

  return (
    <SiteContext.Provider value={{ 
      sections, profile, contact, services, products, categories, brands, isLoading, isConnected, user, token, login, logout,
      setSectionVisibility, updateProfile, updateContact, addService, updateService, deleteService, addProduct, updateProduct, deleteProduct, addCategory, updateCategory, deleteCategory, addBrand, updateBrand, deleteBrand,
      clients, addClient, updateClient, deleteClient,
      theme,
      toggleTheme,
      getMediaUrl,
      fetchWithAuth
    }}>

      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (context === undefined) throw new Error("useSite must be used within a SiteProvider");
  return context;
};
