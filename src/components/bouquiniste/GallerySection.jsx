import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const GALLERY_IMAGES = [
  {
    src: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/a6b84b9fc_generated_8311aad6.png",
    alt: "Dark oak bookshelves floor to ceiling packed with antique books and brass reading lamp",
    span: "row-span-2",
  },
  {
    src: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/e28a7c82d_generated_07b003a6.png",
    alt: "Stack of antique books tied with twine, brass pocket watch, and dried rose petals",
    span: "",
  },
  {
    src: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/54cede44a_generated_900e9f37.png",
    alt: "Cozy reading corner with velvet armchair next to tall window with warm afternoon sunlight",
    span: "row-span-2",
  },
  {
    src: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/78be58f40_generated_a3f451d0.png",
    alt: "Old book spines with ornate gold lettering on aged leather in dark oak bookshelf",
    span: "",
  },
  {
    src: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/2b10c92e2_generated_7c7e1ca8.png",
    alt: "Ornate antique wooden furniture details with carved dark oak and brass handles",
    span: "",
  },
  {
    src: "https://media.base44.com/images/public/6a25ced0e7e2ca5071faa834/e500d3171_generated_2afd4f34.png",
    alt: "Charming old stone countryside house bookshop exterior with climbing ivy and cobblestone path",
    span: "col-span-2",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
          A Glimpse Inside
        </p>
        <h2 className="font-display text-4xl lg:text-5xl font-light text-oak leading-tight">
          The Gallery
        </h2>
      </motion.div>

      {/* Masonry grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`relative overflow-hidden cursor-pointer group ${img.span}`}
            onClick={() => setLightbox(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(30,27,24,0.2)]" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-amber-200/70 hover:text-amber-100 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              />
              <p className="text-center font-body text-amber-200/60 italic text-sm mt-4">
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}