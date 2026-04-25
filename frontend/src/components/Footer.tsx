import { Heart } from "lucide-react";
import { useSite } from "@/context/SiteContext";

const Footer = () => {
  const { profile } = useSite();
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-6 text-center space-y-6">
        <div className="flex justify-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <a href="/politica-de-privacidad" className="hover:text-primary transition-colors">Política de Privacidad</a>
          <a href="/terminos-y-condiciones" className="hover:text-primary transition-colors">Términos y Condiciones</a>
        </div>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Hecho con <Heart size={14} className="text-primary" /> por {profile.name} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
