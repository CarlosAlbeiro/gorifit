import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border bg-card">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        Hecho con <Heart size={14} className="text-primary" /> por BellaStudio © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
