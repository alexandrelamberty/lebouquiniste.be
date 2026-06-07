import { motion } from "framer-motion";
import CollectionCard from "./CollectionCard";

const CATEGORIES = [
  {
    title: "Literature",
    description: "Classic novels, modern fiction, and poetry collections from across the centuries.",
    image: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/a461b44aa_generated_26bd4777.png",
    icon: "✦",
  },
  {
    title: "History",
    description: "Chronicles of civilizations, wars, revolutions, and the quiet passages of time.",
    image: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/f1135ddd4_generated_aa363991.png",
    icon: "⚜",
  },
  {
    title: "Philosophy",
    description: "From ancient wisdom to existential inquiry — the eternal questions of humanity.",
    image: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/6fd0ad079_generated_c7bf5928.png",
    icon: "◈",
  },
  {
    title: "Art",
    description: "Illustrated volumes, exhibition catalogues, and monographs of the great masters.",
    image: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/b39f048fc_generated_4798fa39.png",
    icon: "❋",
  },
  {
    title: "Travel",
    description: "Journals, atlases, and accounts of expeditions to the world's far corners.",
    image: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/fedfc423f_generated_1b0b2d5c.png",
    icon: "✧",
  },
  {
    title: "Rare Books",
    description: "First editions, signed copies, and bibliographic rarities for the discerning collector.",
    image: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/f0897e0c0_generated_0acea0f8.png",
    icon: "❖",
  },
  {
    title: "Local Heritage",
    description: "Regional histories, folklore, and documents preserving the memory of this land.",
    image: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/651b8af02_generated_4a663500.png",
    icon: "⚘",
  },
  {
    title: "Children's Books",
    description: "Timeless tales and illustrated adventures to enchant young readers.",
    image: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/d8e413949_generated_43d5261d.png",
    icon: "✿",
  },
];

export default function CollectionSection() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-oak">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-amber-400/60 mb-4">
            Browse by Category
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-amber-50 leading-tight">
            The Collection
          </h2>
          <p className="font-body text-amber-100/50 mt-4 max-w-lg mx-auto text-lg italic">
            Thousands of volumes, lovingly curated across eight realms of knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {CATEGORIES.map((cat, i) => (
            <CollectionCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}