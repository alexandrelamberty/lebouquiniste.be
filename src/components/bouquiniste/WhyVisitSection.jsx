import { BookOpen, Compass, Flame } from "lucide-react";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Thousands of Books",
    description:
      "Each volume has been hand-selected over decades of patient collecting — from literary classics to forgotten gems waiting to be rediscovered.",
  },
  {
    icon: Flame,
    title: "Warm Atmosphere",
    description:
      "Wooden floors, soft lamplight, the scent of aged paper — an authentic experience that no screen can replicate.",
  },
  {
    icon: Compass,
    title: "Personal Discoveries",
    description:
      "A knowledgeable bookseller who listens, recommends, and guides you toward your next unforgettable read.",
  },
];

export default function WhyVisitSection() {
  return (
    <section id="visit" className="py-24 lg:py-32 bg-vellum-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
            The Experience
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-oak leading-tight">
            Why Visit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 border border-brass/30 mb-6 transition-all duration-500 group-hover:border-brass/60 group-hover:shadow-lg group-hover:shadow-amber-900/10">
                <f.icon
                  size={28}
                  className="text-brass/70 transition-colors duration-500 group-hover:text-brass"
                  strokeWidth={1.2}
                />
              </div>
              <h3 className="font-display text-2xl font-medium text-oak mb-3">
                {f.title}
              </h3>
              <p className="text-foreground/70 leading-[1.7] text-[1.02rem] max-w-xs mx-auto">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}