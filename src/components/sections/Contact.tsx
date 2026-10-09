"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 relative w-full px-6 flex items-center overflow-hidden border-t border-foreground/10">
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display font-black text-[10vw] md:text-[6vw] uppercase leading-[0.85] mb-12 tracking-[-0.04em]">
            INITIATE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-neon-cyan drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">HANDSHAKE.</span>
          </h2>
          
          <div className="flex flex-col gap-8 font-mono text-xs">
            <a href="mailto:rushjivrajani48@gmail.com" className="flex items-center gap-6 text-foreground/70 hover:text-neon-accent transition-colors group w-fit uppercase tracking-widest">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              rushjivrajani48@gmail.com
            </a>
            <a href="tel:+919099538086" className="flex items-center gap-6 text-foreground/70 hover:text-neon-cyan transition-colors group w-fit uppercase tracking-widest">
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
              +91 90995 38086
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-foreground/10 flex gap-4">
            <a href="https://linkedin.com/in/rushali-jivrajani" target="_blank" rel="noreferrer" className="px-6 py-3 border border-foreground/20 text-foreground font-mono text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-foreground/10 transition-colors">
              LINKEDIN
            </a>
            <a href="https://github.com/rush4812" target="_blank" rel="noreferrer" className="px-6 py-3 border border-foreground/20 text-foreground font-mono text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-foreground/10 transition-colors">
              GITHUB
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-[#050505]/60 backdrop-blur-2xl border border-white/10 p-8 md:p-12 relative rounded-3xl shadow-[0_0_50px_rgba(56,189,248,0.05)]"
        >
          <div className="font-mono text-neon-accent text-xs tracking-[0.3em] uppercase mb-12 flex items-center gap-4">
            <span className="w-4 h-[1px] bg-neon-accent" />
            TRANSMIT SECURE DATA
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="relative group">
              <input 
                type="text" id="name" required value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-foreground/20 py-4 text-foreground font-sans outline-none focus:border-neon-accent transition-colors peer"
                placeholder=" "
              />
              <label htmlFor="name" className="absolute left-0 top-4 font-mono text-xs text-foreground/50 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-neon-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]">Identifier (Name)</label>
            </div>
            
            <div className="relative group">
              <input 
                type="email" id="email" required value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-foreground/20 py-4 text-foreground font-sans outline-none focus:border-neon-cyan transition-colors peer"
                placeholder=" "
              />
              <label htmlFor="email" className="absolute left-0 top-4 font-mono text-xs text-foreground/50 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-neon-cyan peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]">Routing Address (Email)</label>
            </div>
            
            <div className="relative group">
              <textarea 
                id="message" rows={4} required value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-b border-foreground/20 py-4 text-foreground font-sans outline-none focus:border-neon-accent transition-colors resize-none peer"
                placeholder=" "
              />
              <label htmlFor="message" className="absolute left-0 top-4 font-mono text-xs text-foreground/50 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-neon-accent peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[9px]">Payload (Message)</label>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full py-4 mt-8 bg-gradient-to-r from-neon-accent to-neon-cyan text-background font-mono font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all disabled:opacity-50"
            >
              {status === "loading" ? "TRANSMITTING..." : "EXECUTE TRANSMISSION"}
            </button>
            
            {status === "success" && <p className="text-neon-cyan font-mono text-[10px] mt-2 text-center uppercase tracking-widest">Transmission Successful.</p>}
            {status === "error" && <p className="text-red-500 font-mono text-[10px] mt-2 text-center uppercase tracking-widest">Connection Failed. Try Direct Routing.</p>}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
