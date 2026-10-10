"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#060911]/90 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 group z-50"
          >
            <Terminal className="text-neon-accent group-hover:text-neon-cyan transition-colors" size={20} />
            <span className="font-display font-bold tracking-widest text-base sm:text-lg uppercase">
              Rushali<span className="text-neon-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wider">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-foreground/75 hover:text-neon-accent transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 border border-neon-accent text-neon-accent hover:bg-neon-accent hover:text-foreground transition-all font-display rounded-sm uppercase tracking-widest text-xs font-semibold"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-foreground hover:text-neon-accent transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-neon-accent"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[57px] z-40 bg-[#060911]/98 backdrop-blur-2xl border-b border-white/15 px-6 py-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 font-mono text-base tracking-wider">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-foreground/80 hover:text-neon-accent border-b border-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-neon-accent font-mono opacity-60">0{idx + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="pt-2"
            >
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block py-3.5 text-center bg-neon-accent text-background font-display font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-neon-cyan transition-colors shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
