import React from "react";
import { X, ExternalLink, Layers, Cpu, CheckCircle2, Share2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle?: string;
  category: "ai" | "data" | "web";
  description: string;
  longDescription?: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  highlights?: string[];
  architecture?: string[];
  github: string;
  live: string;
  image: string;
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!project) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(project.live || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900/95 border border-teal-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-44 sm:h-60 w-full overflow-hidden bg-slate-800">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-sm transition"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
            <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-mono font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/40 uppercase tracking-wider">
              {project.category.toUpperCase()} SOLUTION
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white mt-1 sm:mt-1.5 drop-shadow leading-tight">{project.title}</h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-5 text-sm text-slate-300">
          {/* Description */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-400 mb-2">Ikhtisar Proyek</h4>
            <p className="leading-relaxed text-slate-200 bg-slate-800/40 p-3.5 sm:p-4 rounded-xl border border-slate-800/80 text-xs sm:text-sm">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Performa & Hasil Utama
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
                    <div className="text-xl font-bold text-teal-300">{m.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights & Architecture */}
          {project.highlights && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Fitur Kunci & Rekayasa Sistem
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/30 border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Teknologi Yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-lg bg-slate-800 text-teal-300 text-xs font-mono font-medium border border-teal-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-slate-800 bg-slate-900 flex flex-col xs:flex-row items-center justify-between gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-300 transition order-2 xs:order-1 self-start xs:self-center"
          >
            <Share2 className="w-4 h-4" />
            {copied ? "Link Tersalin!" : "Bagikan Proyek"}
          </button>
          <div className="flex items-center gap-2.5 sm:gap-3 w-full xs:w-auto order-1 xs:order-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 xs:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 xs:flex-initial flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/20 transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
