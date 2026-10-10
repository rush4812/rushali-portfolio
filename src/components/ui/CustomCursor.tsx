"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view">("default");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const matchMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0 || matchMedia.matches);
    };
    checkMobile();

    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const viewElement = target.closest('[data-cursor="view"]');
      if (viewElement) {
        setCursorState("view");
        return;
      }

      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") || 
        target.closest("button")
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  const isView = cursorState === "view";
  const isHover = cursorState === "hover";

  return (
    <>
      {/* Small Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[100] w-3 h-3 bg-white rounded-full pointer-events-none mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          opacity: isView ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />
      
      {/* Outer Ring / View Label */}
      <motion.div
        className="fixed top-0 left-0 z-[100] rounded-full border border-white pointer-events-none mix-blend-difference hidden md:flex items-center justify-center font-mono text-[9px] uppercase tracking-widest text-white font-bold"
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        animate={{
          x: mousePosition.x - (isView ? 36 : isHover ? 0 : 18),
          y: mousePosition.y - (isView ? 36 : isHover ? 0 : 18),
          width: isView ? 72 : isHover ? 0 : 36,
          height: isView ? 72 : isHover ? 0 : 36,
          backgroundColor: isView ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
          opacity: isHover ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      >
        <AnimatePresence>
          {isView && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
