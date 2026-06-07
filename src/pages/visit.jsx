import DeckleDivider from "../components/bouquiniste/DeckleDivider";
import InfoSection from "../components/bouquiniste/InfoSection";
import WhyVisitSection from "../components/bouquiniste/WhyVisitSection";
import SectionPageLayout from "./SectionPageLayout";

export default function VisitPage() {
  return (
    <SectionPageLayout>
      <WhyVisitSection />
      <DeckleDivider className="bg-vellum-dark" />
      <InfoSection />
    </SectionPageLayout>
  );
}
