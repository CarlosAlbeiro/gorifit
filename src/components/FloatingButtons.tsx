import { Download, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/525551234567?text=Hola%2C%20me%20interesa%20su%20catálogo", "_blank");
  };

  const handleDownload = () => {
    // Placeholder: replace with actual catalog PDF URL
    const link = document.createElement("a");
    link.href = "/catalogo.pdf";
    link.download = "catalogo-bellastudio.pdf";
    link.click();
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
      <button
        onClick={handleWhatsApp}
        aria-label="Contactar por WhatsApp"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-hover hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
};

export default FloatingButtons;
