import { useCallback, useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryCarousel from "@/components/CategoryCarousel";
import ProfileSection from "@/components/ProfileSection";
import CatalogSection from "@/components/CatalogSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useSite } from "@/context/SiteContext";

const Index = () => {
  const { sections } = useSite();
  const [activeSection, setActiveSection] = useState("inicio");

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      {sections.hero && <CategoryCarousel />}
      {sections.services && <ServicesSection />}
      {sections.profile && <ProfileSection />}
      {sections.catalog && <CatalogSection />}
      {sections.contact && <ContactSection />}
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
