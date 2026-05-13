import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SiteSettings {
  sections: {
    hero: boolean;
    profile: boolean;
    catalog: boolean;
    services: boolean;
    contact: boolean;
  };
  profile: {
    name: string;
    bio: string;
    imageUrl: string;
    active: boolean;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    instagram: string;
    active: boolean;
  };
}

interface AdminState {
  settings: SiteSettings;
  updateSection: (section: keyof SiteSettings["sections"], value: boolean) => void;
  updateProfile: (profile: Partial<SiteSettings["profile"]>) => void;
  updateContact: (contact: Partial<SiteSettings["contact"]>) => void;
}

// Default values
const defaultSettings: SiteSettings = {
  sections: {
    hero: true,
    profile: true,
    catalog: true,
    services: true,
    contact: true,
  },
  profile: {
    name: "Mi Negocio",
    bio: "Bienvenido a nuestro sitio. Ofrecemos servicios de alta calidad para nuestros clientes.",
    imageUrl: "/placeholder.svg",
    active: true,
  },
  contact: {
    phone: "+57 300 000 0000",
    email: "contacto@minegocio.com",
    address: "Ciudad, País",
    whatsapp: "https://wa.me/573000000000",
    instagram: "https://instagram.com/minegocio",
    active: true,
  },
};

// Note: Since I don't have zustand installed, I'll use a simple Context-like approach or just a custom hook with localStorage.
// Let me check package.json if zustand is there. It wasn't. I'll use a simple state management.

export {};
