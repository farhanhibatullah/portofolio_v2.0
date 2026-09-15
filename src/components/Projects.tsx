import React, { useState } from "react";
import { FolderGit2, ExternalLink, Eye, ArrowUpRight } from "lucide-react";
import Card3D from "./Card3D";
import { ProjectDetail } from "./ProjectModal";
import { GithubIcon } from "./Icons";

interface ProjectsProps {
  onSelectProject: (project: ProjectDetail) => void;
}

const projectsData: ProjectDetail[] = [
  {
    id: "ai-portfolio",
    title: "AI Portfolio & Neural Hub",
    subtitle: "Full-Stack AI & Cloud Web Application",
    category: "ai",
    description: "Portofolio modern full-stack dengan backend FastAPI, antarmuka React interaktif, database terstruktur, dan integrasi container Docker.",
    longDescription: "Aplikasi full-stack komprehensif yang dirancang untuk mendemonstrasikan integrasi end-to-end antara model kecerdasan buatan dan antarmuka web modern. Menggunakan arsitektur microservice terpisah antara frontend React TypeScript dan backend FastAPI yang menyajikan inferensi model data dengan latensi rendah.",
    technologies: ["React.js", "TypeScript", "FastAPI", "Python", "Docker", "SQLite", "TailwindCSS"],
    metrics: [
      { label: "Response Latency", value: "<45ms" },
      { label: "Deployment", value: "Docker / Cloud" },
      { label: "Type Coverage", value: "100% Strict TS" },
    ],
    highlights: [
      "Microservice arsitektur dengan dokumentasi OpenAPI Swagger otomatis.",
      "Desain antarmuka 3D interaktif dengan akselerasi hardware CSS GPU.",
      "Optimasi performa loading aset dan caching respons API.",
    ],
    github: "https://github.com/farhanhibatullah",
    live: "https://ais-dev-dlziphk7srnyvi6vcj4fhz-485156896783.asia-southeast1.run.app",
    image: "/ai_project.jpg",
  },
  {
    id: "ds-blog",
    title: "Data Science Blog & Analytics Engine",
    subtitle: "Interactive Research & Knowledge Platform",
    category: "data",
    description: "Platform publikasi riset data science dengan parser markdown, integrasi visualisasi grafik dinamis, dan analitik privacy-friendly.",
    longDescription: "Platform publikasi pengetahuan berfokus pada eksplorasi machine learning, pemodelan statistik, dan tutorial teknis. Dilengkapi dengan rendering sintaks kode interaktif, kalkulator rumus LaTeX, dan integrasi analitik performa artikel tanpa melacak privasi pengguna.",
    technologies: ["Next.js", "Python", "TailwindCSS", "Plausible Analytics", "MDX", "D3.js"],
    metrics: [
      { label: "Monthly Readers", value: "10k+" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Syntax Highlighter", value: "Real-time" },
    ],
    highlights: [
      "Generator konten otomatis berbasis Markdown dan Jupyter Notebook export.",
      "Visualisasi chart interaktif menggunakan D3.js untuk simulasi data.",
      "Arsitektur SSG (Static Site Generation) untuk waktu load instan.",
    ],
    github: "https://github.com/farhanhibatullah",
    live: "https://ais-pre-dlziphk7srnyvi6vcj4fhz-485156896783.asia-southeast1.run.app",
    image: "/ds_project.png",
  },
  {
    id: "vision-ai",
    title: "Computer Vision Object Detection System",
    subtitle: "Real-Time Visual Intelligence & Edge Inference",
    category: "ai",
    description: "Sistem deteksi objek visual berbasis PyTorch & YOLOv8 dengan pemrosesan video stream berkecepatan tinggi dan akurasi tinggi.",
    longDescription: "Solusi deep learning berbasis visi komputer yang mampu mengenali dan melacak multiobjek secara bersamaan dalam format video stream real-time. Dilengkapi dengan optimasi kompresi bobot model TensorRT untuk inferensi cepat pada perangkat komputasi terbatas.",
    technologies: ["PyTorch", "YOLOv8", "OpenCV", "Python", "TensorRT", "FastAPI"],
    metrics: [
      { label: "Model mAP@50", value: "94.8%" },
      { label: "Frame Rate", value: "45 FPS" },
      { label: "Classes Detected", value: "80 Objects" },
    ],
    highlights: [
      "Pipeline inferensi multi-thread untuk meminimalkan frame drops.",
      "Bounding box tracking dengan algoritma ByteTrack / DeepSORT.",
      "Dashboard analitik kepadatan objek otomatis per frame.",
    ],
    github: "https://github.com/farhanhibatullah",
    live: "https://github.com/farhanhibatullah",
    image: "/ai_project.jpg",
  },
  {
    id: "churn-predictor",
    title: "Customer Retention & Churn AI Engine",
    subtitle: "Enterprise Predictive Modeling & Decision Support",
    category: "data",
    description: "Model prediktif XGBoost & Scikit-learn untuk mengidentifikasi risiko churn pelanggan dan menghitung rekomendasi strategi retensi otomatis.",
    longDescription: "Solusi analitika prediktif end-to-end yang mengolah histori transaksi dan pola perilaku pengguna. Menghasilkan skor risiko churn dalam probabilitas matematis lengkap dengan nilai kontribusi SHAP (SHapley Additive exPlanations) agar tim bisnis dapat mengambil tindakan preventif.",
    technologies: ["Scikit-learn", "XGBoost", "Pandas", "FastAPI", "SHAP", "PostgreSQL"],
    metrics: [
      { label: "ROC-AUC Score", value: "0.912" },
      { label: "Accuracy", value: "89.4%" },
      { label: "Inference Time", value: "12ms" },
    ],
    highlights: [
      "Interpretasi keputusan model secara transparan dengan analisis SHAP values.",
      "Automated pipeline feature engineering & data imputation.",
      "Webhook alert otomatis ke tim customer support saat risiko tinggi terdeteksi.",
    ],
    github: "https://github.com/farhanhibatullah",
    live: "https://github.com/farhanhibatullah",
    image: "/ds_project.png",
  },
  {
    id: "cloud-pipeline",
    title: "Scalable Cloud Data Pipeline & Lakehouse",
    subtitle: "Automated ETL & BigQuery Data Orchestration",
    category: "web",
    description: "Arsitektur orkestrasi pipeline data otomatis di Google Cloud Platform yang mengintegrasikan data terdistribusi ke dalam data warehouse BigQuery.",
    longDescription: "Infrastruktur rekayasa data tangguh yang mengekstrak ribuan catatan transaksi dari berbagai sumber API dan database operasional secara harian. Memanfaatkan Docker dan Prefect untuk manajemen alur kerja batch dan monitoring error otomatis.",
    technologies: ["GCP", "BigQuery", "Docker", "Prefect", "PostgreSQL", "Python", "Cloud Run"],
    metrics: [
      { label: "Data Processed", value: "1.2M Records/day" },
      { label: "Pipeline Reliability", value: "99.9%" },
      { label: "Cost Reduction", value: "35%" },
    ],
    highlights: [
      "Automated schema validation dan duplicate detection.",
      "Partitioning & clustering BigQuery untuk query ekonomis.",
      "Alerting terintegrasi ke Slack / Email untuk monitoring anomali data.",
    ],
    github: "https://github.com/farhanhibatullah",
    live: "https://github.com/farhanhibatullah",
    image: "/ai_project.jpg",
  },
];

const categories = [
  { id: "all", label: "Semua Proyek" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "data", label: "Data Science & Analitika" },
  { id: "web", label: "Full-Stack & Cloud" },
];

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-teal-400" />
            Portofolio Rekayasa & Portofolio Karya
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proyek Unggulan Terpilih
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Klik kartu proyek untuk melihat arsitektur lengkap, metrik performa, dan detail teknis di balik setiap solusi.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === c.id
                    ? "bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <Card3D key={project.id} depth={16} onClick={() => onSelectProject(project)}>
              <div className="h-full bg-slate-900/85 border border-slate-800 hover:border-teal-400/50 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl flex flex-col group cursor-pointer transition-all duration-300">
                
                {/* Project Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/80 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* View Details Hover Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300">
                    <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs shadow-lg">
                      <Eye className="w-3.5 h-3.5" /> Lihat Detail
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-teal-300/90 text-[11px] font-mono border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-400 text-[11px] font-mono">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-1" onClick={(e) => e.stopPropagation()}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-teal-300 transition"
                      >
                        <GithubIcon className="w-3.5 h-3.5" /> Source Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-semibold transition"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
