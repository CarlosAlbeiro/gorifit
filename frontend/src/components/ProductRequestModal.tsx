import React, { useState } from "react";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription, DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { API_URL } from "@/context/SiteContext";

interface ProductRequestModalProps {
  product: any | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductRequestModal: React.FC<ProductRequestModalProps> = ({ product, isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          policyVersion: 'v1.0',
          productInfo: `Producto: ${product.name} | Marca: ${product.brand_name || 'N/A'} | Ref: ${product.reference || 'N/A'}`
        })
      });

      if (res.ok) {
        toast.success("Tu solicitud de asesoría para este producto ha sido enviada.");
        setPhone("");
        setAccepted(false);
        onClose();
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

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-3xl">
        <DialogHeader>
          <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center text-white mb-4 shadow-soft">
            <ShoppingBag size={24} />
          </div>
          <DialogTitle className="text-2xl font-bold font-heading">Asesoría de Producto</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2">
            ¿Te interesa el <strong>{product.name}</strong>? Déjanos tu WhatsApp y te daremos toda la información de precios y disponibilidad.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div className="flex items-center gap-4 p-3 bg-secondary/10 rounded-2xl border border-primary/5">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-16 h-16 object-cover rounded-xl shadow-sm"
            />
            <div>
              <p className="text-[10px] font-black text-primary uppercase tracking-tighter leading-none mb-1">
                {product.brand_name || "Producto Profesional"}
              </p>
              <p className="text-sm font-bold leading-tight">{product.name}</p>
              <p className="text-xs text-muted-foreground mt-1 font-bold">${product.price?.toLocaleString()}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">WhatsApp</label>
              <Input 
                placeholder="Tu número de teléfono" 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-xl h-12 bg-card border-border focus-visible:ring-primary/30"
                required
              />
            </div>

            <div className="flex items-start gap-3 bg-secondary/5 p-3 rounded-xl border border-border/50">
              <input 
                type="checkbox" 
                id="legal-consent-product"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="legal-consent-product" className="text-[10px] text-muted-foreground leading-snug cursor-pointer select-none">
                Acepto el tratamiento de mis datos para recibir información de este producto vía WhatsApp, 
                según la <a href="/politica-de-privacidad" target="_blank" className="text-primary font-bold">Política de Privacidad</a>.
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 rounded-xl gradient-primary text-primary-foreground font-bold shadow-soft hover:shadow-hover transition-all"
              disabled={isSubmitting || !accepted}
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Solicitar Asesoría <Send className="ml-2 w-4 h-4" /></>}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductRequestModal;
