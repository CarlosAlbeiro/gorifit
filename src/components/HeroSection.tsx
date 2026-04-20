import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
          Creaciones con{" "}
          <span className="gradient-primary bg-clip-text text-transparent">Alma</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Productos artesanales hechos con amor y dedicación. Descubre nuestra colección exclusiva de bienestar y belleza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => onNavigate("catalogo")}
            className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver Catálogo
          </button>
          <button
            onClick={() => onNavigate("perfil")}
            className="bg-card text-foreground px-8 py-3 rounded-lg font-medium border border-border shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
          >
            Conóceme
          </button>
        </div>
      </div>

      <button
        onClick={() => onNavigate("perfil")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
