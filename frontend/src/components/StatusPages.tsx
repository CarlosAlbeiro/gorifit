import { Loader2, WifiOff, BicepsFlexed, Medal } from "lucide-react";

export const LoadingPage = ({ message = "Preparando tus suplementos...", submessage = "Estamos cargando nuestros mejores productos" }: { message?: string, submessage?: string }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative">
        <div className="absolute -inset-4 gradient-primary rounded-full opacity-20 blur-xl animate-pulse" />
        <div className="relative flex items-center justify-center">
          <Loader2 className="w-16 h-16 animate-spin text-primary" />
          <BicepsFlexed className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-bounce" style={{ animationDelay: '0.2s' }} />
          <Medal className="absolute -bottom-2 -left-2 w-8 h-8 text-accent animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">{message}</h2>
        <p className="text-muted-foreground animate-pulse">{submessage}</p>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/20 animate-ping" />
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-accent/20 animate-ping" style={{ animationDelay: '1s' }} />
    </div>
  );
};


export const ErrorPage = ({ onRetry }: { onRetry?: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-6">
      <div className="max-w-md w-full text-center">
        <div className="relative mb-8 mx-auto w-80 h-80">
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl opacity-50" />
          <img 
            src="/error_illustration.png" 
            alt="Error de conexión" 
            className="relative z-10 w-full h-full object-contain animate-float-status"
          />

        </div>
        
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4">¡Oh no! Algo salió mal</h2>
        <p className="text-muted-foreground mb-8">
          Parece que nuestro suplementos tuvieron un pequeño percance. No logramos conectar con el servidor.
        </p>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="gradient-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <WifiOff size={20} />
            Reintentar conexión
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes float-status {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-status {
          animation: float-status 3s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
};

export default LoadingPage;

