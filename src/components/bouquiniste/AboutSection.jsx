const ABOUT_IMG = "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/492aa25cd_generated_fba4a3c9.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden shadow-2xl">
            <img
              src={ABOUT_IMG}
              alt="Cozy reading corner with a worn leather armchair, antique books, and warm amber lamplight"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
            {/* Warm vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(30,27,24,0.3)]" />
          </div>
          {/* Decorative brass frame corner */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-brass/40" />
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-brass/40" />
        </div>

        {/* Text */}
        <div>
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-oak leading-tight mb-8">
            A Lifetime Devoted<br />to the Written Word
          </h2>
          <div className="space-y-5 text-foreground/80 leading-[1.75] text-[1.05rem]">
            <p>
              Nestled within the walls of a centuries-old stone house, Le Bouquiniste is the life's
              work of a passionate bookseller who has spent decades traversing flea markets, estate
              sales, and forgotten attics in search of literary treasures.
            </p>
            <p>
              Every volume on these shelves has been carefully selected — not merely for its rarity,
              but for the stories it carries within and the history woven into its pages. Here, first
              editions rest alongside well-loved paperbacks, and regional curiosities share space with
              philosophical masterworks.
            </p>
            <p>
              This is not a place for hurried browsing. It is a sanctuary for those who understand
              that the best discoveries are made slowly — between the soft creak of wooden floors and
              the whisper of turning pages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}