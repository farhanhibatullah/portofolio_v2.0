import React, { useState, useEffect } from "react";
import { Sparkles, Terminal, ArrowRight, Download, Eye, ShieldCheck, Database, Brain, Cloud } from "lucide-react";
import Card3D from "./Card3D";

interface HeroProps {
  onOpenResume: () => void;
}

const roles = [
  "Data Scientist",
  "AI & Machine Learning Engineer",
  "Cloud & Data Pipeline Specialist",
  "Full-Stack Solution Architect",
];

const techBadges = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Column: Bio & Core Info */}
        <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
            </span>
            <span className="text-xs font-mono font-medium text-slate-300">
              Tersedia untuk Proyek & Konsultasi AI
            </span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-teal-300">
              <ShieldCheck className="w-3.5 h-3.5" /> 8+ Th Pengalaman
            </span>
          </div>

          {/* Heading with 3D Text Depth */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Halo, Saya <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 drop-shadow-md">
                Farhan Hibatullah
              </span>
              <span className="text-teal-400 font-light text-3xl sm:text-4xl ml-2">, S.T.</span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="h-10 mt-3 flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span className="text-lg sm:text-xl font-mono font-semibold text-teal-300">
                  {displayedText}
                </span>
                <span className="w-2 h-5 bg-teal-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Value Proposition Description */}
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Merancang dan membangun solusi cerdas berbasis data & kecerdasan buatan end-to-end. Mengintegrasikan pemodelan machine learning siap produksi, arsitektur backend performa tinggi, pipeline data cloud, hingga antarmuka visual yang interaktif dan berdaya guna tinggi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>Jelajahi Proyek</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#ai-lab"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-teal-300 hover:text-white font-semibold text-sm border border-teal-500/30 hover:border-teal-500/60 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
              <span>Coba AI Lab</span>
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 text-teal-400" />
              <span>Curriculum Vitae</span>
            </button>
          </div>

          {/* Tech Stack Strip with 3D Pills */}
          <div className="pt-4 border-t border-slate-800/80">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3 text-center lg:text-left">
              Core Tech Stack & Tools
            </span>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 hover:bg-slate-800/90 transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                  <span className="text-xs font-medium text-slate-200">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic Avatar & Floating Widgets */}
        <div className="w-full lg:w-2/5 flex items-center justify-center relative">
          <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
            
            {/* Concentric 3D Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-spin" style={{ animationDuration: "30s" }} />
            <div className="absolute -inset-4 rounded-full border border-cyan-500/10 border-dashed animate-spin" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
            <div className="absolute -inset-8 rounded-full border border-indigo-500/10" />

            {/* Glowing Backdrop */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-teal-500/25 via-cyan-500/20 to-indigo-500/20 blur-2xl animate-pulse-glow" />

            {/* 3D Profile Frame */}
            <Card3D depth={25} className="relative z-10 w-56 sm:w-64 h-56 sm:h-64 rounded-3xl p-1 bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-600 shadow-2xl shadow-teal-500/30">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative">
                <img
                  src="/Foto.jpg"
                  alt="Farhan Hibatullah"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    // In case Foto.jpg can't load, show an artistic high-tech avatar
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-xs font-mono font-bold text-teal-300 bg-slate-900/90 px-2.5 py-1 rounded-full border border-teal-500/30">
                    Farhan Hibatullah, S.T.
                  </span>
                </div>
              </div>
            </Card3D>

            {/* Floating 3D Badge 1: AI & ML */}
            <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-6 z-20 animate-float-3d bg-slate-900/95 border border-teal-500/40 rounded-xl p-2 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-300">
                <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] sm:text-[10px] text-slate-400 block font-mono">Deep Learning</span>
                <span className="text-[11px] sm:text-xs font-bold text-white">PyTorch & Vision AI</span>
              </div>
            </div>

            {/* Floating 3D Badge 2: Cloud Data Pipeline */}
            <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 z-20 animate-float-slow bg-slate-900/95 border border-cyan-500/40 rounded-xl p-2 sm:p-3 shadow-xl backdrop-blur-md flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-left">
                <span className="text-[9px] sm:text-[10px] text-slate-400 block font-mono">Cloud Architecture</span>
                <span className="text-[11px] sm:text-xs font-bold text-white">GCP & Docker MLOps</span>
              </div>
            </div>

            {/* Floating 3D Badge 3: Big Data / SQL */}
            <div className="absolute top-1/2 -right-4 sm:-right-10 z-20 hidden sm:flex animate-float-3d bg-slate-900/90 border border-slate-700/80 rounded-lg py-1.5 px-2.5 shadow-lg backdrop-blur-md items-center gap-1.5 text-xs text-slate-200">
              <Database className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-mono text-[11px]">ETL & BigQuery</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
