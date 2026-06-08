export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-brass/15">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <h3 className="font-display text-3xl lg:text-4xl italic text-brass/70 mb-6">
          Le Bouquiniste
        </h3>

        {/* Quote */}
        <p className="font-body text-foreground/40 italic text-base max-w-md mx-auto mb-8">
          "A room without books is like a body without a soul."
        </p>

        {/* Social links */}
        {/*
        <div className="flex items-center justify-center gap-8 mb-8">
          {["Facebook", "Instagram", "Twitter"].map((name) => (
            <a
              key={name}
              href="#"
              className="font-label text-[10px] uppercase tracking-[0.2em] text-foreground/30 hover:text-brass transition-colors duration-300"
            >
              {name}
            </a>
          ))}
        </div>
        */}
        
        {/* Divider */}
        <div className="h-[1px] w-20 mx-auto bg-brass/20 mb-6" />

        {/* Copyright */}
        <p className="font-label text-[10px] uppercase tracking-[0.15em] text-foreground/25">
          © {new Date().getFullYear()} Le Bouquiniste. All rights reserved.
        </p>
        <p className="font-label text-[10px] uppercase tracking-[0.15em] text-foreground/30 mt-3">
          Created by {" "}
          <a
            href="https://eevos.be"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brass/70 hover:text-brass transition-colors"
          >
            eevos.be
          </a>
        </p>
      </div>
    </footer>
  );
}