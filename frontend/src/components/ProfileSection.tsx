import { Award, Heart, Sparkles, Star, Instagram, Facebook, Youtube, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useSite } from "@/context/SiteContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProfileSection = () => {
  const { profile, contact, getMediaUrl } = useSite();
  const [activeSlide, setActiveSlide] = useState(0);

  if (!profile.active) return null;

  const stats = [
    { icon: Star, label: "Años de experiencia", value: profile.stats_years },
    { icon: Heart, label: "Clientes felices", value: profile.stats_clients },
    { icon: Sparkles, label: "Productos creados", value: profile.stats_products },
    { icon: Award, label: "Reconocimientos", value: profile.stats_awards },
  ];

  const socials = [
    { icon: Instagram, label: "Instagram", url: contact.instagram_url, active: contact.instagram_active, color: "hover:text-pink-500" },
    { icon: Video, label: "TikTok", url: contact.tiktok_url, active: contact.tiktok_active, color: "hover:text-foreground" },
    { icon: Facebook, label: "Facebook", url: contact.facebook_url, active: contact.facebook_active, color: "hover:text-blue-600" },
    { icon: Youtube, label: "YouTube", url: contact.youtube_url, active: contact.youtube_active, color: "hover:text-red-600" },
  ].filter(s => s.active && s.url);

  const getTikTokEmbedUrl = (url?: string) => {
    if (!url) return null;
    const match = url.match(/video\/(\d+)/) || url.match(/\/v\/(\d+)/) || url.match(/(\d{15,})/);
    if (match) return `https://www.tiktok.com/embed/v2/${match[1]}?autoplay=1&rel=0`;
    return null;
  };

  const tiktokEmbed = getTikTokEmbedUrl(profile.tiktok_video_url);
  const slides = [
    { type: 'image', content: getMediaUrl(profile.imageUrl) },
    ...(tiktokEmbed ? [{ type: 'video', content: tiktokEmbed }] : [])
  ];

  return (
    <section id="perfil" className="py-8 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo/Video Slider */}
          <div className="relative group w-full max-w-[260px] mx-auto">
            <div className="absolute -inset-4 gradient-primary rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            
            <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[9/16] bg-secondary/10">
              {slides.map((slide, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-in-out",
                    activeSlide === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                  )}
                >
                  {slide.type === 'image' ? (
                    <img
                      src={slide.content}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={slide.content}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              ))}

              {/* Controls */}
              {slides.length > 1 && (
                <>
                  <button 
                    onClick={() => setActiveSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors z-10"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setActiveSlide(prev => (prev + 1) % slides.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors z-10"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {slides.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          activeSlide === idx ? "bg-white w-6" : "bg-white/50"
                        )}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">Sobre mí</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {profile.name}
            </h2>

            <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
              {profile.bio}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-4 shadow-card border border-border hover:shadow-hover transition-all duration-300">
                  <stat.icon className="text-primary mb-2" size={20} />
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social media strip */}
        {socials.length > 0 && (
          <div className="mt-16 py-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-widest">Síguenos en redes</p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {socials.map((social, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border shadow-card text-muted-foreground ${social.color} hover:shadow-hover hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon size={20} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="gradient-primary text-primary-foreground text-sm font-medium">
                    {social.label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileSection;
