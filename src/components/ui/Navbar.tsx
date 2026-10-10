"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-foreground/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="text-neon-accent group-hover:text-neon-cyan transition-colors" />
          <span className="font-display font-bold tracking-widest text-lg uppercase">
            Rushali<span className="text-neon-accent">.</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wider">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-neon-accent transition-colors">
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 border border-neon-accent text-neon-accent hover:bg-neon-accent hover:text-foreground transition-all font-display rounded-sm uppercase tracking-widest text-xs"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
