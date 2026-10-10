"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { submitContact } from "@/app/actions/contact";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContact({}, formData);
    
    if (result.success) {
      setStatus("success");
      setMessage(result.message);
      formRef.current?.reset();
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative w-full px-4 sm:px-6 flex items-center overflow-hidden border-t border-foreground/10">
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-[6vw] uppercase leading-[0.88] mb-8 sm:mb-12 tracking-[-0.04em]">
            LET&apos;S WORK <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-neon-cyan drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">TOGETHER.</span>
          </h2>
          
          <div className="flex flex-col gap-5 sm:gap-8 font-mono text-xs">
            <a href="mailto:rushjivrajani48@gmail.com" className="flex items-center gap-4 sm:gap-6 text-foreground/70 hover:text-neon-accent transition-colors group w-fit uppercase tracking-wider sm:tracking-widest break-all">
              <Mail size={18} className="group-hover:scale-110 transition-transform shrink-0" />
              <span>rushjivrajani48@gmail.com</span>
            </a>
            <a href="tel:+919099538086" className="flex items-center gap-4 sm:gap-6 text-foreground/70 hover:text-neon-cyan transition-colors group w-fit uppercase tracking-widest">
              <Phone size={18} className="group-hover:scale-110 transition-transform shrink-0" />
              <span>+91 90995 38086</span>
            </a>
          </div>

          <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-foreground/10 flex flex-wrap gap-3 sm:gap-4">
            <a href="https://linkedin.com/in/rushali-jivrajani" target="_blank" rel="noreferrer" className="px-5 sm:px-6 py-2.5 sm:py-3 border border-foreground/20 text-foreground font-mono text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-foreground/10 transition-colors">
              LINKEDIN
            </a>
            <a href="https://github.com/rush4812" target="_blank" rel="noreferrer" className="px-5 sm:px-6 py-2.5 sm:py-3 border border-foreground/20 text-foreground font-mono text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-foreground/10 transition-colors">
              GITHUB
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="bg-[#050505]/60 backdrop-blur-2xl border border-white/10 p-5 sm:p-8 md:p-12 relative rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(56,189,248,0.05)] w-full"
        >
          <div className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-8 sm:mb-12 flex items-center gap-3 sm:gap-4">
            <span className="w-4 h-[1px] bg-neon-accent" />
            SEND MESSAGE
          </div>
          
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
            {/* Honeypot field for spam bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="honeypot">Leave this empty if you are human</label>
              <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="relative group">
              <input 
                type="text" id="name" name="name" required
                className="w-full bg-transparent border-b border-foreground/20 py-3 sm:py-4 text-foreground text-base sm:text-sm font-sans outline-none focus:border-neon-accent transition-colors peer"
                placeholder=" "
              />
              <label htmlFor="name" className="absolute left-0 top-3 sm:top-4 font-mono text-xs text-foreground/50 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-neon-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]">Your Name</label>
            </div>
            
            <div className="relative group">
              <input 
                type="email" id="email" name="email" required
                className="w-full bg-transparent border-b border-foreground/20 py-3 sm:py-4 text-foreground text-base sm:text-sm font-sans outline-none focus:border-neon-cyan transition-colors peer"
                placeholder=" "
              />
              <label htmlFor="email" className="absolute left-0 top-3 sm:top-4 font-mono text-xs text-foreground/50 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-neon-cyan peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]">Your Email</label>
            </div>
            
            <div className="relative group">
              <textarea 
                id="message" name="message" rows={4} required
                className="w-full bg-transparent border-b border-foreground/20 py-3 sm:py-4 text-foreground text-base sm:text-sm font-sans outline-none focus:border-neon-accent transition-colors resize-none peer"
                placeholder=" "
              />
              <label htmlFor="message" className="absolute left-0 top-3 sm:top-4 font-mono text-xs text-foreground/50 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-neon-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]">Your Message</label>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full py-3.5 sm:py-4 mt-3 sm:mt-6 bg-gradient-to-r from-neon-accent to-neon-cyan text-background font-mono font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs rounded-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all disabled:opacity-50 flex items-center justify-center gap-3 cursor-pointer active:scale-95"
            >
              {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
            </button>
            
            {status === "success" && <p className="text-neon-cyan font-mono text-[10px] mt-2 text-center uppercase tracking-widest">{message}</p>}
            {status === "error" && <p className="text-red-500 font-mono text-[10px] mt-2 text-center uppercase tracking-widest">{message}</p>}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
