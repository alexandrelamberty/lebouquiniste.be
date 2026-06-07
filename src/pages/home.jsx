import AboutSection from "../components/bouquiniste/AboutSection";
import CollectionSection from "../components/bouquiniste/CollectionSection";
import ContactSection from "../components/bouquiniste/ContactSection";
import DeckleDivider from "../components/bouquiniste/DeckleDivider";
import Footer from "../components/bouquiniste/Footer";
import GallerySection from "../components/bouquiniste/GallerySection";
import HeroSection from "../components/bouquiniste/HeroSection";
import InfoSection from "../components/bouquiniste/InfoSection";
import Navbar from "../components/bouquiniste/Navbar";
import WhyVisitSection from "../components/bouquiniste/WhyVisitSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DeckleDivider />
      <AboutSection />
      <DeckleDivider />
      <CollectionSection />
      <DeckleDivider className="bg-oak" />
      <GallerySection />
      <DeckleDivider />
      <WhyVisitSection />
      <DeckleDivider className="bg-vellum-dark" />
      <InfoSection />
      <DeckleDivider />
      <ContactSection />
      <DeckleDivider className="bg-oak" />
      <Footer />
    </div>
  );
}
