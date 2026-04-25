import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSite } from "@/context/SiteContext";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const { profile } = useSite();

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-bold uppercase tracking-wider">Volver</span>
        </button>

        <h1 className="font-heading text-4xl font-bold mb-8">Términos y Condiciones de Uso</h1>
        
        <div className="prose prose-pink dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Descripción del Sitio</h2>
            <p>
              Este sitio web es propiedad de <strong>{profile.name}</strong> y tiene como objetivo principal 
              presentar el portafolio de servicios de maquillaje profesional, catálogo de productos y facilitar 
              el contacto para asesorías personalizadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Carácter Informativo</h2>
            <p>
              La información contenida en este sitio, incluyendo descripciones de servicios y precios en el catálogo, 
              es de carácter referencial e informativo. Los precios finales y la disponibilidad de los servicios 
              están sujetos a confirmación directa a través de los canales de contacto autorizados (WhatsApp).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Asesorías vía WhatsApp</h2>
            <p>
              Al solicitar una asesoría, usted entiende que este es un servicio informativo previo y no constituye 
              por sí mismo un contrato de prestación de servicios. La formalización de cualquier servicio se realizará 
              bajo los términos acordados directamente entre las partes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido visual, logotipos, fotografías y textos presentes en este sitio son propiedad de 
              <strong>{profile.name}</strong> o se cuenta con la autorización para su uso. Queda prohibida su 
              reproducción total o parcial sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Limitación de Responsabilidad</h2>
            <p>
              Nos esforzamos por mantener la información actualizada, pero no garantizamos la ausencia de errores 
              técnicos o tipográficos. No nos hacemos responsables por daños derivados del uso o imposibilidad 
              de uso del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Legislación Aplicable</h2>
            <p>
              Estos términos y condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia 
              será sometida a los tribunales competentes en la ciudad de Medellín.
            </p>
            <p className="mt-4 pt-8 border-t border-border text-xs uppercase tracking-widest">
              Última actualización: 25 de abril de 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
