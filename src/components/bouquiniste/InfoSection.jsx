import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    value: "12 Rue des Vieux Chênes\n37500 Chinon, France",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Tuesday – Saturday: 10h – 18h30\nSunday: 14h – 18h\nMonday: Closed",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 2 47 93 00 00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@lebouquiniste.fr",
  },
];

export default function InfoSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
              Plan Your Visit
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-oak leading-tight mb-10">
              Find Us
            </h2>
          </motion.div>

          <div className="space-y-8">
            {INFO_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden bg-vellum-dark border border-brass/15 min-h-[350px] flex items-center justify-center"
        >
          <div className="text-center px-6">
            <MapPin size={32} className="text-brass/40 mx-auto mb-4" strokeWidth={1} />
            <p className="font-display text-xl text-oak/60 italic">
              12 Rue des Vieux Chênes
            </p>
            <p className="font-body text-foreground/40 mt-2 text-sm">
              Chinon, Loire Valley, France
            </p>
            <div className="mt-6 h-[1px] w-16 mx-auto bg-brass/20" />
          </div>
          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-brass/20" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-brass/20" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-brass/20" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-brass/20" />
        </motion.div>
      </div>
    </section>
  );
}