import { MapPin, Phone, Instagram, Facebook, Youtube, Video, Send, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useSite, API_URL } from "@/context/SiteContext";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const { contact } = useSite();
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accepted, setAccepted] = useState(false);

  if (!contact.active) return null;

  const socials = [
    { icon: Instagram, label: "Instagram", url: contact.instagram_url, active: contact.instagram_active, color: "hover:text-pink-500" },
    { icon: Video, label: "TikTok", url: contact.tiktok_url, active: contact.tiktok_active, color: "hover:text-foreground" },
    { icon: Facebook, label: "Facebook", url: contact.facebook_url, active: contact.facebook_active, color: "hover:text-blue-600" },
    { icon: Youtube, label: "YouTube", url: contact.youtube_url, active: contact.youtube_active, color: "hover:text-red-600" },
  ].filter(s => s.active && s.url);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return toast.error("Ingresa tu número");
    if (!accepted) return toast.error("Debes aceptar el tratamiento de datos");

    setIsSubmitting(true);
    try {
      let location = "Desconocida";
      try {
        const resIp = await fetch('https://ipapi.co/json/');
        const dataIp = await resIp.json();
        location = `${dataIp.city}, ${dataIp.country_name}`;
      } catch (e) { console.error(e); }

      const res = await fetch(`${API_URL}/public-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          phone, 
          location, 
          consentGiven: true, 
          policyVersion: 'v1.0' 
        })
      });

      if (res.ok) {
        toast.success("Tu asesoría se ha solicitado con éxito.");
        setPhone("");
        setAccepted(false);
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "No se pudo enviar la solicitud.");
      }
    } catch (err) {
      toast.error("Error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Phone, label: "Teléfono", value: contact.phone },
              { icon: MapPin, label: "Ubicación", value: contact.address },
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                Diligencia tu número de teléfono para solicitar información o asesoría:
              </p>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Tu número de teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !accepted}
                  className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-secondary/10 p-4 rounded-xl border border-primary/10">
              <input 
                type="checkbox" 
                id="legal-consent"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary transition-all cursor-pointer"
              />
              <label htmlFor="legal-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer select-none">
                Autorizo el tratamiento de mi número de teléfono para recibir asesorías e información de servicios vía WhatsApp, 
                conforme a la <a href="/politica-de-privacidad" target="_blank" className="text-primary font-bold hover:underline">Política de Privacidad</a>.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
