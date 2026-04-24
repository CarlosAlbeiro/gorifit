import { useState } from "react";
import { Download, MessageCircle, Send, Loader2 } from "lucide-react";
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useSite } from "@/context/SiteContext";

const FloatingButtons = () => {
  const { contact } = useSite();
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRequestAsesoria = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return toast.error("Por favor ingresa tu número");

    setIsSubmitting(true);
    try {
      // Intentar obtener ubicación básica
      let location = "Desconocida";
      try {
        const resIp = await fetch('https://ipapi.co/json/');
        const dataIp = await resIp.json();
        location = `${dataIp.city}, ${dataIp.country_name}`;
      } catch (e) { console.error("No se pudo obtener ubicación"); }

      // Enviar solicitud al backend
      const res = await fetch('http://localhost:3000/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phone,
          location: location,
          status: 'pendiente'
        })
      });

      if (res.ok) {
        toast.success("Solicitud enviada con éxito. Te contactaremos pronto.");
        setIsOpen(false);
        setPhone("");
      } else {
        throw new Error("Error al guardar solicitud");
      }
    } catch (err) {
      toast.error("Ocurrió un error al procesar tu solicitud.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    window.open("https://canva.link/bht1agp0l0cfiaz", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={handleDownload}
        aria-label="Descargar catálogo"
        className="gradient-primary text-primary-foreground p-4 rounded-full shadow-hover hover:scale-110 transition-all duration-300"
      >
        <Download size={22} />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            aria-label="Solicitar asesoría"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-hover hover:scale-110 transition-all duration-300"
          >
            <MessageCircle size={22} />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleRequestAsesoria}>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <MessageCircle className="text-[#25D366]" /> Solicitar Asesoría
              </DialogTitle>
              <DialogDescription>
                Déjanos tu número de WhatsApp y te contactaremos para brindarte una asesoría personalizada.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="phone">Tu número de WhatsApp</Label>
                <Input 
                  id="phone" 
                  placeholder="Ej: +57 300 123 4567" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#1eb956]" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                Solicitar Asesoría
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FloatingButtons;
