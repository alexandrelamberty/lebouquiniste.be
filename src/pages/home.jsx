import { Suspense, lazy, useEffect } from "react";
import DeckleDivider from "../components/bouquiniste/DeckleDivider";
import HeroSection from "../components/bouquiniste/HeroSection";
import Navbar from "../components/bouquiniste/Navbar";

const AboutSection = lazy(() => import("../components/bouquiniste/AboutSection"));
const CollectionSection = lazy(() => import("../components/bouquiniste/CollectionSection"));
const GallerySection = lazy(() => import("../components/bouquiniste/GallerySection"));
const WhyVisitSection = lazy(() => import("../components/bouquiniste/WhyVisitSection"));
const InfoSection = lazy(() => import("../components/bouquiniste/InfoSection"));
const ContactSection = lazy(() => import("../components/bouquiniste/ContactSection"));
const Footer = lazy(() => import("../components/bouquiniste/Footer"));

const SectionFallback = () => <div className="min-h-[220px]" aria-hidden="true" />;

export default function Home() {
  useEffect(() => {
    const preloadSections = () => {
      void import("../components/bouquiniste/AboutSection");
      void import("../components/bouquiniste/CollectionSection");
      void import("../components/bouquiniste/GallerySection");
      void import("../components/bouquiniste/WhyVisitSection");
      void import("../components/bouquiniste/InfoSection");
      void import("../components/bouquiniste/ContactSection");
      void import("../components/bouquiniste/Footer");
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(preloadSections, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(preloadSections, 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DeckleDivider />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <DeckleDivider />
      <Suspense fallback={<SectionFallback />}>
        <CollectionSection />
      </Suspense>
      <DeckleDivider className="bg-oak" />
      <Suspense fallback={<SectionFallback />}>
        <GallerySection />
      </Suspense>
      <DeckleDivider />
      <Suspense fallback={<SectionFallback />}>
        <WhyVisitSection />
      </Suspense>
      <DeckleDivider className="bg-vellum-dark" />
      <Suspense fallback={<SectionFallback />}>
        <InfoSection />
      </Suspense>
      <DeckleDivider />
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
      <DeckleDivider className="bg-oak" />
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
