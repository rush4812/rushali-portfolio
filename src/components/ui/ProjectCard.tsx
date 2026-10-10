"use client";
import { Project } from "@/data/projects";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectInfo } from "./ProjectInfo";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export function ProjectCard({ project, isActive }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // 3D Tilt Logic
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [4, -4]);
  const rotateY = useTransform(smoothX, [0, 1], [-4, 4]);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isActive && !isTouch && isHovered ? rotateX : 0,
        rotateY: isActive ? (isHovered && !isTouch ? rotateY : 0) : -6,
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.45,
        filter: isActive ? "blur(0px)" : "blur(2px)",
        transformStyle: "preserve-3d",
      }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`w-full max-w-5xl mx-auto flex flex-col md:flex-row bg-[#0d1117] border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 ease-out md:h-[480px] lg:h-[510px]`}
    >
      {/* Dynamic Inner Glow */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none mix-blend-screen"
        style={{ 
          background: `radial-gradient(circle at 50% 0%, ${project.accent}15 0%, transparent 70%)`,
          opacity: isActive ? 1 : 0 
        }} 
      />

      {/* Media (Left 55%) */}
      <div className="w-full md:w-[55%] relative z-10 shrink-0 md:h-full">
        <ProjectMedia project={project} />
      </div>

      {/* Info (Right 45%) */}
      <div className="w-full md:w-[45%] relative z-10 bg-background/50 backdrop-blur-md md:h-full">
        <ProjectInfo project={project} />
      </div>
    </motion.div>
  );
}
