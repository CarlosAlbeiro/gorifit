import { MapPin, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const socials = [
  { icon: Instagram, label: "@bellastudio.mx", url: "https://instagram.com/bellastudio.mx", color: "hover:text-pink-500" },
  { icon: Facebook, label: "/BellaStudioMX", url: "https://facebook.com/BellaStudioMX", color: "hover:text-blue-500" },
  { icon: Youtube, label: "@BellaStudioMX", url: "https://youtube.com/@BellaStudioMX", color: "hover:text-red-500" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
      </svg>
    ),
    label: "@bellastudio.mx",
    url: "https://tiktok.com/@bellastudio.mx",
    color: "hover:text-foreground",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
    label: "BellaStudio#1234",
    url: "https://discord.gg/bellastudio",
    color: "hover:text-indigo-500",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Contacto</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hablemos
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido especial? ¡Contáctame!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-10">
          {/* Phone & Location in one row */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Phone, label: "Teléfono", value: "+52 555 123 4567" },
              { icon: MapPin, label: "Ubicación", value: "Ciudad de México, MX" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-card hover:shadow-hover transition-all duration-300">
                <div className="gradient-primary p-3 rounded-xl text-primary-foreground">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social media strip */}
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <Tooltip key={social.label}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card rounded-xl border border-border shadow-card text-muted-foreground ${social.color} hover:shadow-hover hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="gradient-primary text-primary-foreground border-none">
                  {social.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              Diligencia tu número de teléfono para solicitar información o asesoría acerca de nuestros productos y servicios ejemplo: <span className="font-medium text-foreground">+573123456789</span>
            </p>
            <input
              type="tel"
              placeholder="Tu número de teléfono"
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              type="submit"
              className="w-full gradient-primary text-primary-foreground py-3 rounded-xl font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              Solicitar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
