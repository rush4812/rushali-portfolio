"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skill } from "@/data/skills";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import Link from "next/link";

interface SkillCardProps {
  skill: Skill;
  onHover: (id: string | null) => void;
  isDimmed: boolean;
  index: number;
}

export function SkillCard({ skill, onHover, isDimmed, index }: SkillCardProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  // Dynamic icon
  const Icon = (SiIcons as any)[skill.icon] || (FaIcons as any)[skill.icon] || SiIcons.SiReact;

  const handleInteract = (active: boolean) => {
    setIsFocused(active);
    onHover(active ? skill.id : null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3), ease: "easeOut" }}
      className={`relative w-full transition-opacity duration-300 ${isDimmed ? "opacity-35" : "opacity-100"}`}
    >
      <div
        className="group relative w-full flex flex-col items-center justify-center gap-2 sm:gap-3 p-3.5 sm:p-5 bg-[#0b0f17]/90 hover:bg-[#101623] border border-white/10 hover:border-white/30 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden z-20 shadow-md hover:shadow-xl hover:-translate-y-1.5"
        style={{
          boxShadow: isFocused ? `0 0 24px ${skill.color}35` : undefined,
          borderColor: isFocused ? `${skill.color}90` : undefined,
        }}
        onMouseEnter={() => handleInteract(true)}
        onMouseLeave={() => handleInteract(false)}
        onFocus={() => handleInteract(true)}
        onBlur={() => handleInteract(false)}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${skill.name}`}
        aria-expanded={isFocused}
      >
        {/* Subtle Brand Glow on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" 
          style={{ 
            background: `radial-gradient(circle at 50% 50%, ${skill.color} 0%, transparent 80%)` 
          }} 
        />

        {/* Icon Container */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          {/* Default greyscale */}
          <Icon 
            size={26} 
            className="absolute z-10 text-foreground/45 group-hover:opacity-0 transition-opacity duration-300" 
          />
          {/* Colored brand icon on hover */}
          <Icon 
            size={26} 
            className="absolute z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" 
            style={{ 
              color: skill.color, 
              filter: `drop-shadow(0 0 10px ${skill.color}90)` 
            }} 
          />
        </div>

        {/* Name */}
        <span className="font-mono text-[11px] sm:text-xs font-semibold text-foreground/80 group-hover:text-foreground transition-colors text-center w-full truncate">
          {skill.name}
        </span>

        {/* Category micro-tag */}
        <span className="font-mono text-[8px] sm:text-[9px] text-foreground/40 uppercase tracking-wider group-hover:text-neon-accent transition-colors">
          {skill.category}
        </span>
      </div>

      {/* Tooltip on Focus / Hover */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 sm:w-60 p-3 sm:p-3.5 bg-[#090d14] border border-white/15 rounded-xl shadow-2xl z-50 pointer-events-none max-w-[88vw]"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
                <span className="font-display font-bold text-xs text-foreground">{skill.name}</span>
                <span 
                  className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10"
                  style={{ color: skill.color }}
                >
                  {skill.level}
                </span>
              </div>
              
              {/* Level Indicator */}
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((step) => {
                  const isActive = 
                    (skill.level === "daily" && step <= 3) || 
                    (skill.level === "comfortable" && step <= 2) || 
                    (skill.level === "learning" && step <= 1);
                  return (
                    <div 
                      key={step} 
                      className={`h-1 flex-1 rounded-full ${isActive ? 'bg-neon-accent' : 'bg-white/10'}`} 
                    />
                  );
                })}
              </div>

              {skill.usedIn && skill.usedIn.length > 0 && (
                <div className="mt-0.5">
                  <span className="block font-mono text-[8px] text-foreground/40 uppercase tracking-widest mb-0.5">Application</span>
                  <p className="text-[11px] text-foreground/80 leading-snug">
                    <strong className="text-neon-cyan font-medium">{skill.usedIn[0].project}</strong>: {skill.usedIn[0].note}
                  </p>
                </div>
              )}
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#090d14] border-b border-r border-white/15 rotate-45 -mt-1" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
