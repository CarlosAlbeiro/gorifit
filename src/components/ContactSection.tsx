import { Instagram, Mail, MapPin, Phone } from "lucide-react";

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

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hola@bellastudio.com" },
              { icon: Phone, label: "Teléfono", value: "+52 555 123 4567" },
              { icon: MapPin, label: "Ubicación", value: "Ciudad de México, MX" },
              { icon: Instagram, label: "Instagram", value: "@bellastudio" },
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

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <p className="text-sm text-muted-foreground leading-relaxed">
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
