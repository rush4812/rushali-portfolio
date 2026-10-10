"use client";
import { useState } from "react";
import { skillsData, SkillCategory } from "@/data/skills";
import { SkillCard } from "@/components/ui/SkillCard";
import { SkillFilters } from "@/components/ui/SkillFilters";
import { StackFlow } from "@/components/ui/StackFlow";

const categories: { id: SkillCategory | "all"; label: string }[] = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "devops", label: "DevOps" },
  { id: "language", label: "Languages" },
];

export default function Stack() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  const filteredSkills = skillsData.filter(s => activeCategory === "all" || s.category === activeCategory);

  return (
    <section id="stack" className="relative w-full overflow-hidden bg-background py-16 md:py-32 border-t border-white/5">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-neon-accent/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-neon-accent" />
            <span>My Tech Stack</span>
            <span className="w-8 h-[1px] bg-neon-accent" />
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-foreground mb-3 sm:mb-4">
            Core <span className="text-neon-accent">Technologies.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-foreground/60 leading-relaxed px-2">
            A look at the tools, languages, and frameworks I use to build great web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="w-full flex justify-center mb-8 sm:mb-12">
          <SkillFilters 
            categories={categories} 
            activeCategory={activeCategory} 
            onSelect={setActiveCategory} 
          />
        </div>

        {/* Full-width Responsive Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-4 md:gap-5">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={index}
              isDimmed={hoveredSkillId !== null && hoveredSkillId !== skill.id}
              onHover={setHoveredSkillId}
            />
          ))}
        </div>

        {/* Architectural Flow Pipeline */}
        <div className="mt-12 sm:mt-20 w-full max-w-4xl">
           <StackFlow />
        </div>

      </div>
    </section>
  );
}
