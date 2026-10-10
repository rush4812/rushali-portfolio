import { motion } from "framer-motion";
import { SkillCategory } from "@/data/skills";

interface SkillFiltersProps {
  categories: { id: SkillCategory | "all"; label: string }[];
  activeCategory: SkillCategory | "all";
  onSelect: (category: SkillCategory | "all") => void;
}

export function SkillFilters({ categories, activeCategory, onSelect }: SkillFiltersProps) {
  return (
    <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar w-full max-w-4xl mx-auto px-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`relative px-5 py-2.5 rounded-full font-mono text-[10px] tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 ${
              isActive ? "text-background" : "text-foreground/60 hover:text-foreground hover:bg-white/5"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-neon-accent rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            )}
            <span className="relative z-10 font-bold">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
