import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSite } from "@/context/SiteContext";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const { profile, contact } = useSite();

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

        <h1 className="font-heading text-4xl font-bold mb-8">Política de Privacidad y Tratamiento de Datos Personales</h1>
        
        <div className="prose prose-pink dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground">1. Identificación del Responsable</h2>
            <p>
              El responsable del tratamiento de sus datos personales es <strong>{profile.name}</strong>, 
              identificada como persona natural independiente, domiciliada en la ciudad de {contact.address || "Medellín, Colombia"}, 
              con correo electrónico de contacto <strong>{contact.email}</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">2. Marco Legal</h2>
            <p>
              Esta política se rige por la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas que las modifiquen, 
              sustituyan o complementen, relativas a la protección de datos personales en la República de Colombia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">3. Datos Recolectados</h2>
            <p>
              A través de nuestro sitio web, recolectamos únicamente su <strong>número de teléfono</strong> y, 
              en algunos casos, su ubicación aproximada (ciudad/país) derivada de la conexión, con el fin de 
              brindar una mejor asesoría.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">4. Finalidad del Tratamiento</h2>
            <p>
              Los datos recolectados serán utilizados exclusivamente para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Envío de asesorías personalizadas sobre servicios de maquillaje y belleza.</li>
              <li>Suministro de información sobre precios, disponibilidad y detalles de los servicios solicitados.</li>
              <li>Contacto directo vía WhatsApp para coordinar citas o resolver dudas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">5. Derechos del Titular</h2>
            <p>
              De acuerdo con la ley, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conocer, actualizar y rectificar sus datos personales.</li>
              <li>Solicitar prueba de la autorización otorgada.</li>
              <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
              <li>Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
              <li>Acceder en forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">6. Canal para Ejercer sus Derechos</h2>
            <p>
              Usted puede ejercer sus derechos enviando una comunicación al correo electrónico <strong>{contact.email}</strong> o 
              a través de nuestra línea de WhatsApp <strong>{contact.phone}</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">7. Vigencia y Versión</h2>
            <p>
              Los datos se conservarán mientras sean necesarios para cumplir con la finalidad para la cual fueron 
              recolectados o hasta que el titular solicite su supresión.
            </p>
            <p className="mt-4 pt-8 border-t border-border text-xs uppercase tracking-widest">
              Versión v1.0 — Fecha de publicación: 25 de abril de 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
