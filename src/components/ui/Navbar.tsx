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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-foreground hover:text-neon-accent transition-all z-50 focus:outline-none active:scale-95"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} className="text-neon-accent" /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Ultra-Premium Fullscreen Glassmorphic Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#060911]/95 backdrop-blur-3xl pt-24 pb-8 px-6 flex flex-col justify-between md:hidden"
          >
            {/* Top / Main Navigation links */}
            <div className="flex flex-col gap-2 font-display">
              <span className="font-mono text-[10px] text-neon-accent uppercase tracking-[0.3em] mb-2">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 text-2xl font-black text-foreground hover:text-neon-accent border-b border-white/5 transition-all group"
                  >
                    <span className="tracking-tight group-hover:translate-x-1.5 transition-transform">
                      {link.name}
                    </span>
                    <span className="text-xs text-neon-accent font-mono tracking-widest opacity-60">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Status Card & Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.3 }}
              className="pt-6 border-t border-white/10 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-foreground/60 px-1">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Available for Hire</span>
                </span>
                <span className="text-foreground/40">Full Stack Dev</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 text-center bg-neon-accent text-background font-display font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-neon-cyan transition-colors shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-95"
                >
                  Hire Me
                </a>
                <a
                  href="/Rushali_Jivrajani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 text-center border border-white/20 text-foreground font-mono font-medium rounded-xl uppercase tracking-widest text-xs hover:border-neon-cyan hover:text-neon-cyan transition-colors active:scale-95"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
