import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Send } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "AI Lab", href: "#ai-lab" },
  { name: "Proyek", href: "#projects" },
  { name: "Sertifikasi", href: "#certifications" },
  { name: "Kontak", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const sections = ["hero", "about", "techstack", "ai-lab", "projects", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/85 backdrop-blur-xl border-b border-teal-500/20 shadow-2xl shadow-black/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with 3D Cyber glow */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-[1px] shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-extrabold text-teal-300 text-lg">FH</span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
              Farhan Hibatullah<span className="text-teal-400">, S.T.</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 -mt-0.5">Data Scientist & AI Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-teal-300 bg-teal-500/15 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full" />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-slate-700/80 transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" />
            <span>Resume / CV</span>
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 shadow-lg shadow-teal-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-teal-300 border border-slate-700 text-xs flex items-center gap-1"
          >
            <FileText className="w-4 h-4 text-teal-400" />
            <span className="hidden xs:inline">CV</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl bg-slate-800/90 text-slate-200 hover:text-teal-300 border border-slate-700 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 m-3 rounded-2xl bg-slate-950/95 border border-teal-500/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-teal-300 hover:bg-slate-900/80 transition flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-teal-500/50 text-xs">→</span>
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-teal-400" />
              Lihat CV
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 py-2.5 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-lg shadow-teal-500/20"
            >
              <Send className="w-3.5 h-3.5" />
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
