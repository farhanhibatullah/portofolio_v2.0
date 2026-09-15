import React, { useState } from "react";
import { Cpu, Search } from "lucide-react";
import Card3D from "./Card3D";

interface TechItem {
  name: string;
  category: "ai" | "data" | "backend" | "frontend" | "devops";
  icon: string;
  level: "Expert" | "Advanced" | "Proficient";
  experience: string;
  highlights: string;
}

const techCatalog: TechItem[] = [
  {
    name: "Python",
    category: "ai",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: "Expert",
    experience: "8+ Th",
    highlights: "Pandas, NumPy, AsyncIO, PyTorch, Scikit-Learn",
  },
  {
    name: "PyTorch",
    category: "ai",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    level: "Expert",
    experience: "5+ Th",
    highlights: "Neural Networks, TorchVision, Fine-tuning, NLP",
  },
  {
    name: "TensorFlow",
    category: "ai",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    level: "Advanced",
    experience: "4+ Th",
    highlights: "Keras, TF Serving, CNN, RNN Modeling",
  },
  {
    name: "Scikit-learn",
    category: "ai",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    level: "Expert",
    experience: "6+ Th",
    highlights: "XGBoost, Regression, Random Forest, Clustering",
  },
  {
    name: "FastAPI",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    level: "Expert",
    experience: "5+ Th",
    highlights: "Pydantic, OpenAPI, High Concurrency, Microservices",
  },
  {
    name: "SQL & Relational DB",
    category: "data",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: "Expert",
    experience: "7+ Th",
    highlights: "PostgreSQL, MySQL, Complex Queries, Index Tuning",
  },
  {
    name: "Google Cloud (GCP)",
    category: "data",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    level: "Advanced",
    experience: "4+ Th",
    highlights: "BigQuery, Cloud Run, Vertex AI, Cloud Storage",
  },
  {
    name: "Docker",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: "Expert",
    experience: "5+ Th",
    highlights: "Containerization, Multi-stage Builds, Compose",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: "Advanced",
    experience: "4+ Th",
    highlights: "Strict Typing, Generics, Modern ES6+ Tooling",
  },
  {
    name: "React.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Expert",
    experience: "6+ Th",
    highlights: "Custom Hooks, Virtual DOM, State Management",
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    level: "Expert",
    experience: "5+ Th",
    highlights: "Modern Responsive Design, 3D Effects, Glassmorphism",
  },
  {
    name: "Git & GitHub",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: "Expert",
    experience: "8+ Th",
    highlights: "Branching Strategy, CI/CD Actions, Version Control",
  },
  {
    name: "VS Code & Linux",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: "Expert",
    experience: "8+ Th",
    highlights: "Bash Scripting, WSL, Server Administration",
  },
];

const categoryLabels: { id: string; label: string }[] = [
  { id: "all", label: "Semua Teknologi" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "data", label: "Data & Cloud" },
  { id: "backend", label: "Backend & APIs" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "devops", label: "DevOps & Tools" },
];

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTech = techCatalog.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.highlights.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="techstack" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            Teknologi & Keahlian Teknis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack & Kemampuan Rekayasa
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Kombinasi teknologi yang telah teruji untuk membangun ekosistem data cerdas, arsitektur backend performa tinggi, dan antarmuka web modern.
          </p>

          {/* Filter Bar & Search */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categoryLabels.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                    selectedCategory === cat.id
                      ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/25"
                      : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari teknologi..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-teal-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* 3D Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredTech.map((tech) => (
            <Card3D key={tech.name} depth={15}>
              <div className="h-full bg-slate-900/80 border border-slate-800/90 hover:border-teal-400/50 rounded-2xl p-5 backdrop-blur-xl shadow-xl flex flex-col justify-between group transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold border ${
                        tech.level === "Expert"
                          ? "bg-teal-500/10 text-teal-300 border-teal-500/30"
                          : "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                      }`}
                    >
                      {tech.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {tech.highlights}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Pengalaman</span>
                  <span className="text-teal-400 font-semibold">{tech.experience}</span>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {filteredTech.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">Tidak ada teknologi yang cocok dengan kata kunci "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-teal-500/20 text-teal-300 text-xs font-semibold"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default TechStack;
