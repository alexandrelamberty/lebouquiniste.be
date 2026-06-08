import { useEffect, useState } from "react";

const HERO_IMG = "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/02c8a32f0_generated_ca206a9b.png";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  /**
   * @param {import("react").MouseEvent<HTMLAnchorElement>} event
   * @param {string} href
   */
  const handleHeroLinkClick = (event, href) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    const id = decodeURIComponent(href.slice(1));
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${offsetY * 0.35}px)` }}
      >
        <img
          src={HERO_IMG}
          alt="A magnificent floor-to-ceiling wooden library filled with antique books, sunlight streaming through tall windows"
          className="w-full h-[120%] object-cover"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div>
          <p className="font-label text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-amber-200/70 mb-6">
            Librairie d'ancien &amp; d'occasion
          </p>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-amber-50 leading-[0.95] tracking-wide">
            Le Bouquiniste
          </h1>

          <p className="font-body text-lg sm:text-xl lg:text-2xl italic text-amber-100/80 mt-6 max-w-xl mx-auto leading-relaxed">
            "A house of books, stories, and forgotten treasures."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#collection"
              onClick={(event) => handleHeroLinkClick(event, "#collection")}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-amber-300/40 bg-amber-200/10 backdrop-blur-sm text-amber-50 font-label text-[11px] uppercase tracking-[0.2em] hover:bg-amber-200/20 hover:border-amber-300/60 transition-all duration-500"
            >
              Visit the Bookshop
            </a>
            <a
              href="#contact"
              onClick={(event) => handleHeroLinkClick(event, "#contact")}
              className="inline-flex items-center justify-center px-8 py-3.5 text-amber-200/70 font-label text-[11px] uppercase tracking-[0.2em] hover:text-amber-100 transition-colors duration-500"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-[1px] h-10 bg-gradient-to-b from-amber-200/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}