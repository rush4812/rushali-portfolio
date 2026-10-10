import { motion } from "framer-motion";
import { SkillCategory } from "@/data/skills";

interface SkillFiltersProps {
  categories: { id: SkillCategory | "all"; label: string }[];
  activeCategory: SkillCategory | "all";
  onSelect: (category: SkillCategory | "all") => void;
}

export function SkillFilters({ categories, activeCategory, onSelect }: SkillFiltersProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Mobile edge fades */}
      <div className="md:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-5 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-2 overflow-x-auto pb-3 md:pb-0 hide-scrollbar w-full px-4 md:px-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-mono text-[10px] tracking-[0.14em] uppercase whitespace-nowrap transition-colors duration-300 active:scale-95 shrink-0 ${
                isActive ? "text-background" : "text-foreground/60 hover:text-foreground bg-white/[0.02] border border-white/5 hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-neon-accent rounded-full -z-10 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
              <span className="relative z-10 font-bold">{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
