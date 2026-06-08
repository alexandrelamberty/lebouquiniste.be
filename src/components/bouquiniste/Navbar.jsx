import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
 

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Collection", href: "#collection" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * @param {import("react").MouseEvent<HTMLAnchorElement>} event
   * @param {string} href
   * @param {boolean} [shouldCloseMenu=false]
   */
  const handleNavClick = (event, href, shouldCloseMenu = false) => {
    if (!href.startsWith("#")) {
      if (shouldCloseMenu) setMenuOpen(false);
      return;
    }

    event.preventDefault();

    const id = decodeURIComponent(href.slice(1));
    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }
    };

    if (shouldCloseMenu) {
      setMenuOpen(false);
      // On mobile, wait for menu collapse to begin before scrolling.
      window.setTimeout(() => {
        window.requestAnimationFrame(scrollToTarget);
      }, 120);
      return;
    }

    scrollToTarget();
  };

  const brandClass = scrolled
    ? "text-brass hover:text-accent"
    : "text-amber-50 hover:text-amber-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]";

  const linkClass = scrolled
    ? "text-foreground hover:text-brass"
    : "text-amber-50 hover:text-amber-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]";

  const mobileToggleClass = scrolled
    ? "text-foreground/70 hover:text-brass"
    : "text-amber-50 hover:text-amber-100 bg-black/35 ring-1 ring-amber-100/25 backdrop-blur-sm";

  const mobileMenuClass = scrolled
    ? "md:hidden bg-background/98 backdrop-blur-sm border-b border-brass/20 overflow-hidden"
    : "md:hidden bg-black/70 backdrop-blur-md border-b border-amber-100/25 overflow-hidden";

  const mobileMenuLinkClass = scrolled
    ? "font-label text-xs uppercase tracking-[0.2em] text-foreground hover:text-brass transition-colors"
    : "font-label text-xs uppercase tracking-[0.2em] text-amber-50 hover:text-amber-100 transition-colors";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md border-b border-brass/20"
          : "bg-gradient-to-b from-black/55 via-black/25 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a
          href="#hero"
          onClick={(event) => handleNavClick(event, "#hero")}
          className={`font-display text-xl lg:text-2xl tracking-wide transition-colors ${brandClass}`}
        >
          Le Bouquiniste
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(event) => handleNavClick(event, l.href)}
                className={`font-label text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${linkClass}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 -mr-2 rounded-md transition-colors ${mobileToggleClass}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={mobileMenuClass}
          >
            <ul className="flex flex-col items-center py-6 gap-5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(event) => handleNavClick(event, l.href, true)}
                    className={mobileMenuLinkClass}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}