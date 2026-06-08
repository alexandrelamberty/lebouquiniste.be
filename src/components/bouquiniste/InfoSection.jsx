import { Clock, Mail, MapPin, Phone } from "lucide-react";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    value: "Rue des tilleuls 47\n1435 Mont-Saint-Guibert, Belgium",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Tuesday – Saturday: 10h – 18h30\nSunday: 14h – 18h\nMonday: Closed",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+32 477 31 18 85",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@lebouquiniste.be",
  },
];

export default function InfoSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info cards */}
        <div>
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
              Plan Your Visit
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-oak leading-tight mb-10">
              Find Us
            </h2>
          </div>

          <div className="space-y-8">
            {INFO_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className="flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-brass/25">
                  <item.icon size={18} className="text-brass/70" strokeWidth={1.3} />
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground/85 whitespace-pre-line leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="relative overflow-hidden bg-vellum-dark border border-brass/15 min-h-[350px]">
          <iframe
            title="Le Bouquiniste location map"
            src="https://maps.google.com/maps?q=Rue%20des%20tilleuls%2047%201435%20Mont-Saint-Guibert%20Belgium&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[350px]"
          />

          <div className="absolute left-1/2 -translate-x-1/2 bottom-5">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rue+des+tilleuls+47,+1435+Mont-Saint-Guibert,+Belgium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-oak/85 text-amber-100 text-xs font-label uppercase tracking-[0.16em] border border-brass/35 hover:bg-oak transition-colors"
            >
              <MapPin size={14} className="text-amber-200/80" strokeWidth={1.5} />
              Open in Google Maps
            </a>
          </div>
          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-brass/20" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-brass/20" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-brass/20" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-brass/20" />
        </div>
      </div>
    </section>
  );
}