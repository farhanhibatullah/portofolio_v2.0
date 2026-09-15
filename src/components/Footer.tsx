import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top bar with brand & Scroll to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-[1px] shadow-lg shadow-teal-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-extrabold text-teal-300 text-sm">FH</span>
              </div>
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight">
                Farhan Hibatullah, S.T.
              </span>
              <p className="text-[11px] text-slate-400 font-mono">
                Data Scientist • AI Engineer • Cloud Specialist
              </p>
            </div>
          </div>

          {/* Quick Nav Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#hero" className="hover:text-teal-400 transition">Beranda</a>
            <a href="#about" className="hover:text-teal-400 transition">Tentang</a>
            <a href="#techstack" className="hover:text-teal-400 transition">Tech Stack</a>
            <a href="#ai-lab" className="hover:text-teal-400 transition">AI Lab</a>
            <a href="#projects" className="hover:text-teal-400 transition">Proyek</a>
            <a href="#certifications" className="hover:text-teal-400 transition">Sertifikasi</a>
            <a href="#contact" className="hover:text-teal-400 transition">Kontak</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 text-slate-300 hover:text-white transition shadow-sm"
          >
            <span className="text-xs font-mono">Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-teal-400" />
          </button>
        </div>

        {/* Bottom bar with socials & copyright */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Farhan Hibatullah. Seluruh Hak Cipta Dilindungi.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/farhanhibatullah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition shadow-sm"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:farhanhibatullah433@gmail.com"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-slate-300 hover:text-teal-400 transition shadow-sm"
              title="Kirim Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
