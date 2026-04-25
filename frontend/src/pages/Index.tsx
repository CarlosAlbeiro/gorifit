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
import StatusPages, { LoadingPage, ErrorPage } from "@/components/StatusPages";
import AestheticEffects from "@/components/AestheticEffects";

const Index = () => {
  const { sections, isLoading, isConnected } = useSite();
  const [activeSection, setActiveSection] = useState("inicio");

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (isLoading) return <LoadingPage />;
  if (!isConnected) return <ErrorPage />;

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground">
      <AestheticEffects />
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
