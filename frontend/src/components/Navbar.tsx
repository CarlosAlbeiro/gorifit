import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useSite } from "@/context/SiteContext";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useSite();

  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "perfil", label: "Perfil" },
    { id: "catalogo", label: "Catálogo" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        <button onClick={() => handleClick("inicio")} className="font-heading text-xl font-semibold text-foreground tracking-tight">
          <span className="gradient-primary bg-clip-text text-transparent">Bella</span>Studio
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-primary ${
                activeSection === link.id ? "text-primary border-b-2 border-primary pb-0.5" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2 rounded-full h-8 w-8">
            {theme === 'light' ? <Moon size={16} className="text-muted-foreground" /> : <Sun size={16} className="text-amber-400" />}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="block w-full text-left px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 py-4 border-t border-border mt-2">
            <Button variant="outline" className="w-full justify-between" onClick={toggleTheme}>
              <span>{theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}</span>
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
