import { motion } from "framer-motion";

export default function CollectionCard({ category, index }) {
  const { title, description, image, icon } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
      className="group relative overflow-hidden cursor-pointer"
      style={{
        perspective: "800px",
      }}
    >
      <div className="relative overflow-hidden transition-transform duration-500 group-hover:[transform:rotateY(-3deg)_rotateX(2deg)]">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-500 group-hover:from-black/70" />
          {/* Warm tone */}
          <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
          {/* Icon */}
          <span className="text-2xl mb-3 transition-all duration-500 group-hover:text-amber-300 opacity-70 group-hover:opacity-100">
            {icon}
          </span>

          <h3 className="font-display text-xl lg:text-2xl font-medium text-amber-50 leading-tight mb-2">
            {title}
          </h3>
          <p className="font-body text-sm text-amber-100/60 leading-relaxed line-clamp-2 transition-all duration-500 group-hover:text-amber-100/80">
            {description}
          </p>

          {/* Brass accent line */}
          <div className="mt-4 h-[1px] bg-gradient-to-r from-amber-400/50 to-transparent w-0 group-hover:w-full transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
}