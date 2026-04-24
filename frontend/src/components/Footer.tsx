import { Heart, Instagram, Facebook, Youtube, Video } from "lucide-react";
import { useSite } from "@/context/SiteContext";

const Footer = () => {
  const { contact } = useSite();

  const socialLinks = [
    { icon: Instagram, url: contact.instagram_url, active: contact.instagram_active },
    { icon: Video, url: contact.tiktok_url, active: contact.tiktok_active },
    { icon: Facebook, url: contact.facebook_url, active: contact.facebook_active },
    { icon: Youtube, url: contact.youtube_url, active: contact.youtube_active },
  ].filter(link => link.active && link.url);

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-6 text-center space-y-6">
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Hecho con <Heart size={14} className="text-primary" /> por Luisa Restrepo © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
