import React, { useState } from "react";
import { User, Briefcase, CheckCircle, Code2, Server, Globe2, FileText } from "lucide-react";
import Card3D from "./Card3D";

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<"highlights" | "timeline">("highlights");

  const timelineItems = [
    {
      period: "2021 — Sekarang",
      role: "Lead AI & Data Science Consultant",
      org: "Freelance & Technology Projects",
      desc: "Merancang arsitektur model AI untuk prediksi churn, automasi computer vision, dan pipeline data analitik di cloud.",
    },
    {
      period: "2018 — 2021",
      role: "Software & Data Engineer",
      org: "Digital Solutions",
      desc: "Mengembangkan API backend berkecepatan tinggi, integrasi database relasional dan NoSQL, serta dashboard analitik bisnis.",
    },
    {
      period: "2016 — 2018",
      role: "Junior Software Developer",
      org: "Tech Innovations",
      desc: "Membangun sistem informasi berbasis web, otomasi skrip data Python, dan visualisasi data interaktif.",
    },
    {
      period: "Pendidikan",
      role: "Sarjana Teknik (S.T.)",
      org: "Fakultas Teknik",
      desc: "Lulus dengan fokus rekayasa sistem terdistribusi, pemodelan matematika, dan pengolahan sinyal/data.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
            <User className="w-3.5 h-3.5 text-teal-400" />
            Tentang Saya & Filosofi Rekayasa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Menghubungkan <span className="text-teal-400">Data Cerdas</span> dengan <span className="text-cyan-400">Dampak Nyata</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Seorang Data Scientist, AI Engineer, dan Cloud Specialist dengan komitmen menciptakan sistem berbasis data yang skalabel, transparan, dan berorientasi pada efisiensi bisnis.
          </p>

          {/* Toggle View */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("highlights")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === "highlights"
                  ? "bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60"
              }`}
            >
              Sorotan Utama & Nilai Unggul
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === "timeline"
                  ? "bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60"
              }`}
            >
              Jejak Karir & Pendidikan
            </button>
          </div>
        </div>

        {/* Tab 1: Bento Grid Highlights */}
        {activeTab === "highlights" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Card 1: Experience & Proven Track Record */}
            <Card3D depth={18} className="md:col-span-2">
              <div className="h-full bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-7 backdrop-blur-xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700">
                      Rekam Jejak Terbukti
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    8+ Tahun Mengembangkan Solusi Produksi
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Mulai dari riset analitik hingga deployment cloud production. Saya menguasai seluruh daur hidup sistem kecerdasan buatan: pembersihan dataset berskala besar, pemilihan arsitektur model, evaluasi metrik akurasi, dan penyajian via microservices API yang stabil.
                  </p>
                </div>

                {/* Micro Stats inside Card */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-slate-800/80">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">8+</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Tahun Pengalaman</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">20+</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Proyek Selesai</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">5+</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Sertifikasi Resmi</div>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Bento Card 2: End-to-End Pipeline */}
            <Card3D depth={18}>
              <div className="h-full bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-7 backdrop-blur-xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 w-fit mb-4">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Arsitektur End-to-End</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Menghubungkan database relasional, pipeline pembersihan data otomatis, containerization Docker, dan integrasi cloud Google Cloud Platform.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Python & FastAPI Microservices</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>PostgreSQL & BigQuery Warehouse</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Docker & Cloud Run Orchestration</span>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Bento Card 3: Interactive Modern Frontends */}
            <Card3D depth={18}>
              <div className="h-full bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-7 backdrop-blur-xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit mb-4">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Frontend & Visualisasi Data</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Data berbobot tinggi tidak akan berguna tanpa visualisasi yang intuitif. Membangun dashboard berbasis React, TypeScript, dan Tailwind CSS.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-teal-300">React • Next.js • TailwindCSS</span>
                </div>
              </div>
            </Card3D>

            {/* Bento Card 4: Action & CV Modal */}
            <Card3D depth={18} className="md:col-span-2">
              <div className="h-full bg-gradient-to-r from-slate-900 via-slate-900/90 to-teal-950/40 border border-teal-500/30 rounded-2xl p-7 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ingin Melihat Profil Lengkap?</h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    Unduh atau baca resume detail yang mencakup seluruh keahlian teknis, riwayat kontribusi, dan sertifikasi.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={onOpenResume}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition hover:scale-105"
                  >
                    <FileText className="w-4 h-4" />
                    Buka Resume Lengkap
                  </button>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white font-semibold text-xs border border-teal-500/30 transition"
                  >
                    <Globe2 className="w-4 h-4" />
                    Profil LinkedIn
                  </a>
                </div>
              </div>
            </Card3D>

          </div>
        )}

        {/* Tab 2: Timeline Experience & Education */}
        {activeTab === "timeline" && (
          <div className="max-w-4xl mx-auto space-y-6">
            {timelineItems.map((item, index) => (
              <Card3D key={index} depth={10}>
                <div className="bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-6 backdrop-blur-xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-semibold text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold text-white pt-1">{item.role}</h4>
                    <p className="text-xs font-medium text-slate-400">{item.org}</p>
                    <p className="text-xs text-slate-300 pt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="sm:self-center shrink-0">
                    <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 border border-slate-700">
                      <CheckCircle className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default About;
