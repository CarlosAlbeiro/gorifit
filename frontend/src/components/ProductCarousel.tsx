import React, { useEffect, useState, useRef } from "react";
import { useSite } from "@/context/SiteContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Sparkles, ArrowRight, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCarousel = () => {
  const { products, getMediaUrl } = useSite();
  const navigate = useNavigate();

  const featuredProducts = products
    .filter(p => p.active && p.is_promotion)
    .slice(0, 6);

  // If no promotional products, just take the first 6 active products
  const displayProducts = featuredProducts.length > 0 
    ? featuredProducts 
    : products.filter(p => p.active).slice(0, 6);

  if (displayProducts.length === 0) return null;

  const handleProductClick = (p: any) => {
    const catName = p.category_name?.toLowerCase().replace(/\s+/g, "-") || "general";
    navigate(`/categoria/${catName}`);
  };

  return (
    <div className="w-full py-8 group">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {displayProducts.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div 
                className="relative h-[380px] rounded-[2rem] overflow-hidden cursor-pointer group/card bg-card border border-white/10 shadow-2xl transition-all duration-700 hover:shadow-primary/30 hover:-translate-y-2"
                onClick={() => handleProductClick(product)}
              >
                {/* Background Image with Parallax-like effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={getMediaUrl(product.image)} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover/card:scale-110"
                    alt={product.name}
                    onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.png'; }}
                  />
                  {/* Dynamic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Glass Light Leak */}
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover/card:translate-x-12 group-hover/card:translate-y-12 transition-transform duration-1000" />
                </div>
                
                {/* Top Badges */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <div className="flex flex-col gap-2">
                    {product.is_promotion && (
                      <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white border-none px-4 py-1.5 flex gap-2 items-center shadow-lg animate-pulse">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Oferta</span>
                      </Badge>
                    )}
                    <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-xl px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                      {product.category_name}
                    </Badge>
                  </div>
                  
                  <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Plus className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                  <div className="space-y-4">
                    <div className="overflow-hidden">
                      <h3 className="text-2xl font-bold leading-tight transform transition-transform duration-500 group-hover/card:translate-y-0 translate-y-1">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div className="space-y-0.5">
                        <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">Inversión</p>
                        <p className="text-2xl font-black text-white group-hover/card:text-primary transition-colors">
                          <span className="text-primary text-lg mr-0.5">$</span>
                          {product.price.toLocaleString()}
                        </p>
                      </div>
                      
                      <Button 
                        size="icon"
                        className="w-12 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transform transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-[10deg]"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </Button>
                    </div>
                    
                    {/* Interactive Footer */}
                    <div className="flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover/card:opacity-100 translate-y-4 group-hover/card:translate-y-0 transition-all duration-700 delay-100">
                      <span>Explorar detalles</span>
                      <div className="w-8 h-[1px] bg-primary group-hover/card:w-12 transition-all duration-500" />
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                {/* Inner Border Highlight */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none group-hover/card:border-white/20 transition-colors duration-700" />
              </div>
            </CarouselItem>

          ))}
        </CarouselContent>
        
        {/* Navigation Buttons - Hidden on mobile, beautiful on desktop */}
        <div className="hidden md:flex justify-end gap-4 mt-8 px-4 opacity-100 transition-opacity duration-300">
          <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 transition-all" />
          <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 transition-all" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
