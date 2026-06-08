import CollectionCard from "./CollectionCard";

const CATEGORIES = [
  {
    title: "Literature",
    description: "Classic novels, modern fiction, and poetry collections from across the centuries.",
    image: "/images/collection/literature.png",
    icon: "✦",
  },
  {
    title: "History",
    description: "Chronicles of civilizations, wars, revolutions, and the quiet passages of time.",
    image: "/images/collection/history.png",
    icon: "⚜",
  },
  {
    title: "Philosophy",
    description: "From ancient wisdom to existential inquiry — the eternal questions of humanity.",
    image: "/images/collection/philosophy.png",
    icon: "◈",
  },
  {
    title: "Art",
    description: "Illustrated volumes, exhibition catalogues, and monographs of the great masters.",
    image: "/images/collection/art.png",
    icon: "❋",
  },
  {
    title: "Travel",
    description: "Journals, atlases, and accounts of expeditions to the world's far corners.",
    image: "/images/collection/travel.png",
    icon: "✧",
  },
  {
    title: "Rare Books",
    description: "First editions, signed copies, and bibliographic rarities for the discerning collector.",
    image: "/images/collection/rare_books.png",
    icon: "❖",
  },
  {
    title: "Local Heritage",
    description: "Regional histories, folklore, and documents preserving the memory of this land.",
    image: "/images/collection/local_heritage.png",
    icon: "⚘",
  },
  {
    title: "Children's Books",
    description: "Timeless tales and illustrated adventures to enchant young readers.",
    image: "/images/collection/childrens_books.png",
    icon: "✿",
  },
];

export default function CollectionSection() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-oak">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-amber-400/60 mb-4">
            Browse by Category
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-amber-50 leading-tight">
            The Collection
          </h2>
          <p className="font-body text-amber-100/50 mt-4 max-w-lg mx-auto text-lg italic">
            Thousands of volumes, lovingly curated across eight realms of knowledge.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {CATEGORIES.map((cat) => (
            <CollectionCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}