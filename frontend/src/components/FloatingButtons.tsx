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
import { useSite, API_URL } from "@/context/SiteContext";

const COUNTRY_CODES = [
  { code: '+57', name: 'COL', flag: '🇨🇴' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+52', name: 'MEX', flag: '🇲🇽' },
  { code: '+34', name: 'ESP', flag: '🇪🇸' },
  { code: '+54', name: 'ARG', flag: '🇦🇷' },
  { code: '+56', name: 'CHL', flag: '🇨🇱' },
  { code: '+51', name: 'PER', flag: '🇵🇪' },
  { code: '+593', name: 'ECU', flag: '🇪🇨' },
  { code: '+507', name: 'PAN', flag: '🇵🇦' },
];

const FloatingButtons = () => {
  const { contact } = useSite();
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState(() => localStorage.getItem("user_phone") || "");
  const [countryCode, setCountryCode] = useState(() => localStorage.getItem("user_country_code") || "+57");
  const [accepted, setAccepted] = useState(() => localStorage.getItem("user_consent") === "true");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRequestAsesoria = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return toast.error("Por favor ingresa tu número");
    if (!accepted) return toast.error("Debes aceptar el tratamiento de datos");

    setIsSubmitting(true);
    try {
      let location = "Desconocida";
      try {
        const resIp = await fetch('https://ipapi.co/json/');
        const dataIp = await resIp.json();
        location = `${dataIp.city}, ${dataIp.country_name}`;
      } catch (e) { console.error("No se pudo obtener ubicación"); }

      const fullPhone = `${countryCode}${phone}`;
      const res = await fetch(`${API_URL}/public-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: fullPhone,
          location: location,
          consentGiven: true,
          policyVersion: 'v1.0'
        })
      });

      if (res.ok) {
        toast.success("Solicitud enviada con éxito. Te contactaremos pronto.");
        // Persistir datos
        localStorage.setItem("user_phone", phone);
        localStorage.setItem("user_country_code", countryCode);
        localStorage.setItem("user_consent", "true");
        setIsOpen(false);
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
                <div className="flex gap-2">
                  <select 
                    className="flex h-10 w-[90px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <Input 
                    id="phone" 
                    placeholder="300 123 4567" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 bg-secondary/5 p-3 rounded-xl border border-border/50">
                <input 
                  type="checkbox" 
                  id="legal-consent-whatsapp"
                  checked={accepted}
                  onChange={(e) => {
                    setAccepted(e.target.checked);
                    localStorage.setItem("user_consent", e.target.checked.toString());
                  }}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                />
                <label htmlFor="legal-consent-whatsapp" className="text-[10px] text-muted-foreground leading-snug cursor-pointer select-none">
                  Acepto el tratamiento de mis datos para recibir asesoría personalizada vía WhatsApp, 
                  según la <a href="/politica-de-privacidad" target="_blank" className="text-primary font-bold underline">Política de Privacidad</a>.
                </label>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#1eb956]" disabled={isSubmitting || !accepted}>
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
