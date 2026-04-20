import profilePhoto from "@/assets/profile-photo.jpg";
import { Award, Heart, Sparkles, Star } from "lucide-react";

const stats = [
  { icon: Star, label: "Años de experiencia", value: "8+" },
  { icon: Heart, label: "Clientes felices", value: "500+" },
  { icon: Sparkles, label: "Productos creados", value: "120+" },
  { icon: Award, label: "Reconocimientos", value: "15" },
];

const ProfileSection = () => {
  return (
    <section id="perfil" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative group">
            <div className="absolute -inset-4 gradient-primary rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            <img
              src={profilePhoto}
              alt="Foto de perfil profesional"
              width={512}
              height={512}
              className="relative rounded-2xl shadow-soft w-full max-w-md mx-auto object-cover aspect-square"
            />
          </div>

          {/* Info */}
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Sobre mí</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              María García
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soy una emprendedora apasionada por crear productos artesanales que transforman la rutina diaria en momentos especiales. Cada pieza está diseñada con ingredientes naturales y mucho cariño.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mi misión es ofrecer bienestar a través de productos únicos que cuiden de ti y del medio ambiente. Creo en la belleza consciente y en el poder de lo hecho a mano.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-4 shadow-card border border-border hover:shadow-hover transition-all duration-300">
                  <stat.icon className="text-primary mb-2" size={20} />
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
