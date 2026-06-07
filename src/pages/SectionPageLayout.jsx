import DeckleDivider from "../components/bouquiniste/DeckleDivider";
import Footer from "../components/bouquiniste/Footer";
import Navbar from "../components/bouquiniste/Navbar";

export default function SectionPageLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-20 lg:pt-24">{children}</main>
      <DeckleDivider className="bg-oak" />
      <Footer />
    </div>
  );
}
