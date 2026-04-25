import { Heart } from "lucide-react";
import { useSite } from "@/context/SiteContext";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-6 text-center space-y-6">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Hecho con <Heart size={14} className="text-primary" /> por Luisa Restrepo © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
