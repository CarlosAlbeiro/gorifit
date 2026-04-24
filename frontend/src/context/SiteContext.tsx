import React, { createContext, useContext, useState, useEffect } from "react";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

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
}

interface ProfileData {
  name: string;
  bio: string;
  imageUrl: string;
  stats_years: string;
  stats_clients: string;
  stats_products: string;
  stats_awards: string;
  tiktok_video_url?: string;
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
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const DEFAULT_SECTIONS: SectionVisibility = {
  hero: true, profile: true, catalog: true, services: true, contact: true,
};

const DEFAULT_PROFILE: ProfileData = {
  name: "Luisa Restrepo", bio: "Maquilladora profesional...", imageUrl: "/placeholder.svg",
  stats_years: "8+", stats_clients: "500+", stats_products: "120+", stats_awards: "15", active: true,
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

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sections, setSections] = useState<SectionVisibility>(() => getLocal("site_sections", DEFAULT_SECTIONS));
  const [profile, setProfile] = useState<ProfileData>(() => getLocal("site_profile", DEFAULT_PROFILE));
  const [contact, setContact] = useState<ContactData>(() => getLocal("site_contact", DEFAULT_CONTACT));
  const [services, setServices] = useState<Service[]>(() => getLocal("site_services", []));
  const [products, setProducts] = useState<Product[]>(() => getLocal("site_products", []));
  const [categories, setCategories] = useState<Category[]>(() => getLocal("site_categories", []));
  const [brands, setBrands] = useState<Brand[]>(() => getLocal("site_brands", []));
  
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

  const fetchWithAuth = (url: string, options: any = {}) => {
    return fetch(url, { ...options, headers: { ...options.headers, 'Authorization': `Bearer ${token}` } });
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
            bio: p.bio, 
            imageUrl: p.image_url || "/placeholder.svg", 
            stats_years: p.stats_years || "8+", 
            stats_clients: p.stats_clients || "500+", 
            stats_products: p.stats_products || "120+", 
            stats_awards: p.stats_awards || "15", 
            tiktok_video_url: p.tiktok_video_url || "",
            active: p.is_active 
          };
          setProfile(np);
          saveLocal("site_profile", np);
        }
      }

      const cRes = await fetch(`${API_URL}/contact`);
      if (cRes.ok) {
        const c = (await cRes.json())[0];
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

      const productsRes = await fetch(`${API_URL}/products`);
      if (productsRes.ok) {
        const data = await productsRes.json();
        const prds = data.map((p: any) => ({ id: p.id, name: p.name, description: p.description, price: parseFloat(p.price), category_id: p.category_id, category_name: p.category_name, brand_id: p.brand_id, brand_name: p.brand_name, image: p.image_url, active: p.is_active, reference: p.reference, notes: p.notes }));
        setProducts(prds);
        saveLocal("site_products", prds);
      }

    } catch (err) {
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchAllData(); }, []);

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
        const payload: any = { name: data.name, bio: data.bio, is_active: data.active, image_url: data.imageUrl, stats_years: data.stats_years, stats_clients: data.stats_clients, stats_products: data.stats_products, stats_awards: data.stats_awards, tiktok_video_url: data.tiktok_video_url };
        Object.keys(payload).forEach(k => payload[k] === undefined && delete payload[k]);
        await fetchWithAuth(`${API_URL}/profile/${p.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
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
      }
    } catch (err) { }
  };

  const addCategory = async (cat: Omit<Category, "id">) => {
    try {
      await fetchWithAuth(`${API_URL}/categories`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: cat.name, type: cat.type, icon: cat.icon, is_active: cat.active }) });
      fetchAllData();
    } catch (err) { }
  };

  const updateCategory = async (id: number | string, data: Partial<Category>) => {
    try {
      const p: any = { name: data.name, type: data.type, icon: data.icon, is_active: data.active };
      Object.keys(p).forEach(k => p[k] === undefined && delete p[k]);
      await fetchWithAuth(`${API_URL}/categories/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
      fetchAllData();
    } catch (err) { }
  };

  const deleteCategory = async (id: number | string) => {
    try { await fetchWithAuth(`${API_URL}/categories/${id}`, { method: 'DELETE' }); fetchAllData(); } catch (err) { }
  };

  const addBrand = async (brand: Omit<Brand, "id">) => {
    try {
      await fetchWithAuth(`${API_URL}/brands`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: brand.name, description: brand.description, logo_url: brand.logo_url, is_active: brand.active }) });
      fetchAllData();
    } catch (err) { }
  };

  const updateBrand = async (id: number | string, data: Partial<Brand>) => {
    try {
      const p: any = { name: data.name, description: data.description, logo_url: data.logo_url, is_active: data.active };
      Object.keys(p).forEach(k => p[k] === undefined && delete p[k]);
      await fetchWithAuth(`${API_URL}/brands/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
      fetchAllData();
    } catch (err) { }
  };

  const deleteBrand = async (id: number | string) => {
    try { await fetchWithAuth(`${API_URL}/brands/${id}`, { method: 'DELETE' }); fetchAllData(); } catch (err) { }
  };

  const addService = async (s: Omit<Service, "id">) => {
    try {
      await fetchWithAuth(`${API_URL}/services`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: s.name, description: s.description, price: s.price, category_id: s.category_id, is_active: s.active, image_url: s.image }) });
      fetchAllData();
    } catch (err) { }
  };

  const updateService = async (id: number | string, data: Partial<Service>) => {
    try {
      const p: any = { name: data.name, description: data.description, price: data.price, category_id: data.category_id, is_active: data.active, image_url: data.image };
      Object.keys(p).forEach(k => p[k] === undefined && delete p[k]);
      await fetchWithAuth(`${API_URL}/services/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
      fetchAllData();
    } catch (err) { }
  };

  const deleteService = async (id: number | string) => {
    try { await fetchWithAuth(`${API_URL}/services/${id}`, { method: 'DELETE' }); fetchAllData(); } catch (err) { }
  };

  const addProduct = async (p: Omit<Product, "id">) => {
    try {
      await fetchWithAuth(`${API_URL}/products`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: p.name, description: p.description, price: p.price, category_id: p.category_id, brand_id: p.brand_id, reference: p.reference, notes: p.notes, is_active: p.active, image_url: p.image }) });
      fetchAllData();
    } catch (err) { }
  };

  const updateProduct = async (id: number | string, data: Partial<Product>) => {
    try {
      const p: any = { name: data.name, description: data.description, price: data.price, category_id: data.category_id, brand_id: data.brand_id, reference: data.reference, notes: data.notes, is_active: data.active, image_url: data.image };
      Object.keys(p).forEach(k => p[k] === undefined && delete p[k]);
      await fetchWithAuth(`${API_URL}/products/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
      fetchAllData();
    } catch (err) { }
  };

  const deleteProduct = async (id: number | string) => {
    try { await fetchWithAuth(`${API_URL}/products/${id}`, { method: 'DELETE' }); fetchAllData(); } catch (err) { }
  };

  return (
    <SiteContext.Provider value={{ 
      sections, profile, contact, services, products, categories, brands, isLoading, isConnected, user, token, login, logout,
      setSectionVisibility, updateProfile, updateContact, addService, updateService, deleteService, addProduct, updateProduct, deleteProduct, addCategory, updateCategory, deleteCategory, addBrand, updateBrand, deleteBrand,
      theme,
      toggleTheme
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
