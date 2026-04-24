import { useSite } from "@/context/SiteContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Loader2, WifiOff } from "lucide-react";

const CategoryCarousel = () => {
  const { categories, isLoading, isConnected } = useSite();
  const navigate = useNavigate();
  
  if (isLoading) {
    return (
      <div className="w-full h-[30vh] flex flex-col items-center justify-center bg-secondary/10">
        <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
        <p className="text-xs text-muted-foreground animate-pulse">Cargando catálogo...</p>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="w-full h-[30vh] flex flex-col items-center justify-center bg-red-50/10 text-red-500">
        <WifiOff className="w-8 h-8 mb-4" />
        <p className="text-sm font-semibold">Sin conexión al servidor</p>
      </div>
    );
  }

  const catalogCategories = categories.filter(c => c.type === 'product' && c.active);

  if (catalogCategories.length === 0) return null;

  return (
    <section id="inicio" className="w-full pt-12 pb-8 md:pt-14 md:pb-12 bg-secondary/10 dark:bg-black/20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">Nuestro Catálogo</h2>
          <p className="text-muted-foreground text-sm mt-1">Selecciona una categoría para explorar</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {catalogCategories.map((category) => (
              <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                <div className="p-1 h-full">
                  <Card 
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 border-primary/10 dark:border-white/5 h-full group bg-white/60 dark:bg-white/5 backdrop-blur-sm"
                    onClick={() => navigate(`/categoria/${category.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {category.icon || "✨"}
                      </span>
                      <h3 className="text-sm font-bold text-primary dark:text-pink-300 leading-tight">
                        {category.name}
                      </h3>
                      <p className="text-[10px] font-medium text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Ver productos</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-10 h-8 w-8" />
            <CarouselNext className="-right-10 h-8 w-8" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CategoryCarousel;
