import { useCallback, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import CatalogSection from "@/components/CatalogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      <ProfileSection />
      <CatalogSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
