import React from "react";
import { X, Download, Printer, Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const markdownContent = `# Farhan Hibatullah, S.T.
Data Scientist | AI Engineer | Cloud Specialist
Email: farhanhibatullah433@gmail.com
LinkedIn: https://linkedin.com
GitHub: https://github.com/farhanhibatullah

## Ringkasan Profesional
Data Scientist & Software Engineer dengan pengalaman lebih dari 8 tahun dalam merancang dan mengimplementasikan sistem AI, pipeline analitik data berskala besar, serta arsitektur cloud end-to-end. Berdedikasi menggabungkan data intelijen dengan aplikasi web modern untuk menghasilkan nilai bisnis yang terukur.

## Keahlian Utama
- AI & Machine Learning: PyTorch, TensorFlow, Scikit-learn, LLMs, Computer Vision, NLP
- Data Engineering & Cloud: Python, FastAPI, Docker, GCP, BigQuery, SQL, Prefect
- Frontend Modern: React.js, TypeScript, Next.js, Tailwind CSS
- Praktik: MLOps, CI/CD, Containerization, Microservices

## Sertifikasi
- Google Data Analytics Professional Certificate (Coursera)
- Deep Learning Specialization (DeepLearning.AI)
- Pacmann Data Science Bootcamp

Dibuat via Portfolio Interaktif Farhan Hibatullah.
`;

    const blob = new Blob([markdownContent], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "CV_Farhan_Hibatullah.md");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-teal-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10">
          <div className="flex items-center gap-2.5 truncate mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
            <h3 className="text-base sm:text-xl font-bold text-white tracking-tight truncate">
              Curriculum Vitae <span className="hidden sm:inline">— Farhan Hibatullah, S.T.</span>
            </h3>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handlePrint}
              title="Print / Save PDF"
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-teal-300 transition"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadMarkdown}
              title="Download CV Markdown"
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 text-xs font-semibold border border-teal-500/40 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition ml-1"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 text-slate-300 text-sm leading-relaxed">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div>
              <h1 className="text-2xl font-bold text-white">Farhan Hibatullah, S.T.</h1>
              <p className="text-teal-400 font-medium">Data Scientist | AI Engineer | Cloud Specialist</p>
              <p className="text-slate-400 text-xs mt-1">farhanhibatullah433@gmail.com • Indonesia</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                Available for Projects
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-base font-bold text-teal-300 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Ringkasan Eksekutif
            </h4>
            <p className="text-slate-300 leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-800">
              Praktisi Data Science & Software Engineering dengan dedikasi lebih dari 8 tahun dalam rekayasa solusi berbasis data, model machine learning siap produksi, dan platform web full-stack. Menguasai siklus lengkap dari pemodelan analitik, pembangunan API performa tinggi, hingga deployment terotomatisasi di Google Cloud Platform.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-base font-bold text-teal-300 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Kompetensi Kunci
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                <span className="text-white font-semibold block mb-1">AI & Machine Learning</span>
                <span className="text-xs text-slate-400">Deep Learning, Computer Vision (YOLO/OpenCV), NLP, PyTorch, TensorFlow, Scikit-learn, Feature Engineering</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                <span className="text-white font-semibold block mb-1">Data Engineering & Cloud</span>
                <span className="text-xs text-slate-400">Python, FastAPI, SQL/PostgreSQL, Google Cloud Platform, Docker Containerization, ETL Pipelines</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                <span className="text-white font-semibold block mb-1">Full-Stack Development</span>
                <span className="text-xs text-slate-400">React.js, TypeScript, Next.js, Tailwind CSS, Responsive Web Design, RESTful Architecture</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                <span className="text-white font-semibold block mb-1">Analitika & Metrik Bisnis</span>
                <span className="text-xs text-slate-400">Exploratory Data Analysis, Churn Modeling, Dashboarding, A/B Testing, Strategic Problem Solving</span>
              </div>
            </div>
          </div>

          {/* Professional Experience Highlight */}
          <div>
            <h4 className="text-base font-bold text-teal-300 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Riwayat Proyek & Pengalaman
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-white">Lead AI Engineer & Data Scientist</h5>
                    <p className="text-xs text-teal-400">Freelance & Independent Solutions • 2021 - Sekarang</p>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">Produksi</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1">
                  <li>Mengembangkan arsitektur AI terintegrasi untuk prediksi dan analisis otomatisasi bisnis.</li>
                  <li>Membangun backend microservices menggunakan FastAPI dan Docker dengan latensi rendah.</li>
                  <li>Merancang dashboard analitik berbasis web untuk memvisualisasikan metrik data secara real-time.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-white">Software Engineer & Data Analyst</h5>
                    <p className="text-xs text-teal-400">Tech Projects • 2018 - 2021</p>
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">Full-Stack</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 mt-2 space-y-1">
                  <li>Membangun puluhan aplikasi web modern dengan integrasi database relational dan NoSQL.</li>
                  <li>Memproses dan membersihkan dataset komposit untuk kebutuhan business intelligence.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h4 className="text-base font-bold text-teal-300 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Pendidikan & Sertifikasi
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <p className="font-semibold text-white">Sarjana Teknik (S.T.)</p>
                <p className="text-slate-400">Teknik • Penekanan pada Sistem Analitik & Rekayasa</p>
              </div>
              <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800">
                <p className="font-semibold text-white">Google Data Analytics Professional</p>
                <p className="text-slate-400">Coursera Official Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/95 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition"
          >
            Tutup
          </button>
          <a
            href="#contact"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
