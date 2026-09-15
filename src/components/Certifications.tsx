import React, { useState } from "react";
import { Award, ExternalLink, ShieldCheck, X } from "lucide-react";
import Card3D from "./Card3D";

interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: number;
  credentialId: string;
  skills: string[];
  link: string;
  description: string;
}

const certList: CertificationItem[] = [
  {
    id: "g-data-analytics",
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    year: 2023,
    credentialId: "GDA-7892341-CERT",
    skills: ["SQL Data Cleaning", "R Programming", "Tableau", "Exploratory Analysis", "Spreadsheets"],
    link: "https://www.coursera.org/professional-certificates/google-data-analytics",
    description: "Sertifikasi resmi Google mencakup pemrosesan data end-to-end, analisis statistik, visualisasi data, dan pemecahan masalah berbasis metrik bisnis.",
  },
  {
    id: "deep-learning-ai",
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    year: 2022,
    credentialId: "DLAI-AndrewNg-4412",
    skills: ["Convolutional Neural Networks", "RNNs & LSTMs", "Hyperparameter Tuning", "TensorFlow", "Backpropagation"],
    link: "https://www.coursera.org/specializations/deep-learning",
    description: "Program spesialisasi dari Andrew Ng yang berfokus pada perancangan arsitektur deep learning, optimasi gradien, dan implementasi computer vision & NLP.",
  },
  {
    id: "gcp-cloud-engineer",
    name: "Google Cloud Platform Specialist & Data Engineer",
    issuer: "Google Cloud Training",
    year: 2023,
    credentialId: "GCP-CLD-99812",
    skills: ["BigQuery", "Cloud Storage", "Cloud Run", "IAM Security", "Docker Deployment"],
    link: "https://cloud.google.com/certification",
    description: "Kompetensi mendalam dalam manajemen arsitektur cloud, skalabilitas container, dan orkestrasi pipeline data menggunakan Google Cloud.",
  },
  {
    id: "pacmann-bootcamp",
    name: "Pacmann Data Science Intensive Bootcamp",
    issuer: "Pacmann AI",
    year: 2021,
    credentialId: "PAC-DS-2021-901",
    skills: ["Machine Learning Modeling", "Business Metrics", "Probability & Statistics", "Python", "Scikit-Learn"],
    link: "https://pacmann.io",
    description: "Program intensif kurikulum standar industri yang mengasah kemampuan matematika statistik, rekayasa fitur data, dan penerapan algoritma supervised/unsupervised.",
  },
  {
    id: "mlops-pipeline",
    name: "Machine Learning Engineering for Production (MLOps)",
    issuer: "DeepLearning.AI",
    year: 2022,
    credentialId: "MLOPS-PRD-8120",
    skills: ["Model Monitoring", "Data Pipelines", "CI/CD for ML", "Concept Drift", "Feature Stores"],
    link: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
    description: "Pelatihan khusus standarisasi arsitektur MLOps, otomatisasi pipeline pelatihan model, pengujian regresi, dan pemantauan performa model di lingkungan produksi.",
  },
];

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            Kredensial & Pencapaian Resmi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Sertifikasi Profesional Terverifikasi
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Bukti kompetensi terakreditasi dari lembaga teknologi global terkemuka untuk menjamin standar rekayasa data & AI berkualitas tinggi.
          </p>
        </div>

        {/* 3D Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certList.map((cert) => (
            <Card3D key={cert.id} depth={15} onClick={() => setSelectedCert(cert)}>
              <div className="h-full bg-slate-900/85 border border-slate-800 hover:border-teal-400/50 rounded-2xl p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between group cursor-pointer transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-teal-500/10 text-teal-300 border border-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-teal-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1">
                    Penerbit: <span className="text-slate-300 font-semibold">{cert.issuer}</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-teal-400">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" /> ID Terverifikasi
                    </span>
                    <span className="text-teal-400 group-hover:underline flex items-center gap-1 font-semibold text-[11px]">
                      Lihat Kredensial <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            </Card3D>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative w-full max-w-lg bg-slate-900 border border-teal-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/30">
                  <Award className="w-8 h-8" />
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                  Sertifikat Resmi • {selectedCert.year}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedCert.name}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Diterbitkan oleh: <strong className="text-slate-200">{selectedCert.issuer}</strong>
                </p>
                <div className="mt-2 text-xs font-mono text-slate-400 bg-slate-800/80 p-2 rounded-lg border border-slate-700">
                  Credential Verification ID: <span className="text-teal-300 font-bold">{selectedCert.credentialId}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-800">
                {selectedCert.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
                  Kompetensi Terakreditasi
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-teal-300 text-xs font-mono border border-teal-500/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Tutup
                </button>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition hover:scale-105"
                >
                  Buka Link Resmi <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
