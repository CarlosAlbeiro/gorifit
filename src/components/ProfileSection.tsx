import profilePhoto from "@/assets/profile-photo.jpeg";
import { Award, Heart, Sparkles, Star, Instagram, Facebook, Youtube } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const stats = [
  { icon: Star, label: "Años de experiencia", value: "8+" },
  { icon: Heart, label: "Clientes felices", value: "500+" },
  { icon: Sparkles, label: "Productos creados", value: "120+" },
  { icon: Award, label: "Reconocimientos", value: "15" },
];

const socials = [
  { icon: Instagram, label: "@lulecosmetics_", url: "https://www.instagram.com/lulecosmetics_/", color: "hover:text-pink-500" },
  // { icon: Facebook, label: "/BellaStudioMX", url: "https://facebook.com/BellaStudioMX", color: "hover:text-blue-500" },
  // { icon: Youtube, label: "@BellaStudioMX", url: "https://youtube.com/@BellaStudioMX", color: "hover:text-red-500" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
      </svg>
    ),
    label: "@restrepoluisa_",
    url: "https://tiktok.com/@restrepoluisa_",
    color: "hover:text-foreground",
  },
  // {
  //   icon: () => (
  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  //       <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  //     </svg>
  //   ),
  //   label: "BellaStudio#1234",
  //   url: "https://discord.gg/bellastudio",
  //   color: "hover:text-indigo-500",
  // },
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
              Luisa Restrepo
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

        {/* Social media strip */}
        <div className="mt-16 py-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-widest">Síguenos en redes</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {socials.map((social) => (
              <Tooltip key={social.url}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border shadow-card text-muted-foreground ${social.color} hover:shadow-hover hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="gradient-primary text-primary-foreground text-sm font-medium">
                  {social.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
