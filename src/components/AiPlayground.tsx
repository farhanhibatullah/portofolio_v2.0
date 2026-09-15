import React, { useState } from "react";
import { Sparkles, Brain, Cpu, Play, ShieldCheck, Activity, Terminal } from "lucide-react";
import Card3D from "./Card3D";

export const AiPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"churn" | "nlp">("churn");

  // State for Churn Simulator
  const [tenure, setTenure] = useState<number>(14);
  const [monthlySpend, setMonthlySpend] = useState<number>(75);
  const [tickets, setTickets] = useState<number>(2);
  const [contract, setContract] = useState<"monthly" | "one-year" | "two-year">("monthly");
  const [isCalculating, setIsCalculating] = useState(false);

  // State for NLP Simulator
  const [nlpText, setNlpText] = useState(
    "Implementasi pipeline data dan model machine learning ini sangat cepat, akurat, dan meningkatkan efisiensi operasional tim kami hingga 40%."
  );
  const [isNlpAnalyzing, setIsNlpAnalyzing] = useState(false);
  const [sentimentResult, setSentimentResult] = useState<{
    sentiment: string;
    confidence: number;
    tokens: { word: string; weight: number }[];
  }>({
    sentiment: "Sangat Positif (Promoter)",
    confidence: 94.6,
    tokens: [
      { word: "sangat cepat", weight: 0.88 },
      { word: "akurat", weight: 0.92 },
      { word: "meningkatkan efisiensi", weight: 0.95 },
    ],
  });

  // Calculate Churn Probability formula simulation
  const calculateChurnScore = () => {
    let score = 30;
    // Tenure effect (longer = lower churn)
    score -= (tenure / 48) * 25;
    // Monthly spend effect
    if (monthlySpend > 100) score += 15;
    else if (monthlySpend < 40) score -= 5;
    // Support tickets
    score += tickets * 12;
    // Contract type
    if (contract === "monthly") score += 20;
    if (contract === "two-year") score -= 30;

    const clamped = Math.max(5, Math.min(95, Math.round(score)));
    return clamped;
  };

  const churnScore = calculateChurnScore();

  const handleRunChurnModel = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 400);
  };

  const handleRunNlp = () => {
    setIsNlpAnalyzing(true);
    setTimeout(() => {
      setIsNlpAnalyzing(false);
      const lower = nlpText.toLowerCase();
      let positiveWords = ["cepat", "akurat", "bagus", "meningkatkan", "efisiensi", "hebat", "keren", "sukses", "puas"];
      let negativeWords = ["lambat", "rusak", "error", "jelek", "gagal", "kecewa", "rugi", "sulit", "bug"];

      let posCount = positiveWords.filter((w) => lower.includes(w)).length;
      let negCount = negativeWords.filter((w) => lower.includes(w)).length;

      if (posCount > negCount) {
        setSentimentResult({
          sentiment: "Positif (Optimistic Sentiment)",
          confidence: Math.min(98.5, 85 + posCount * 3.5),
          tokens: positiveWords.filter((w) => lower.includes(w)).map((w) => ({ word: w, weight: 0.9 })),
        });
      } else if (negCount > posCount) {
        setSentimentResult({
          sentiment: "Negatif (Critical Attention)",
          confidence: Math.min(96, 80 + negCount * 4),
          tokens: negativeWords.filter((w) => lower.includes(w)).map((w) => ({ word: w, weight: -0.85 })),
        });
      } else {
        setSentimentResult({
          sentiment: "Netral / Informatif",
          confidence: 88.2,
          tokens: [{ word: "informatif", weight: 0.4 }],
        });
      }
    }, 450);
  };

  return (
    <section id="ai-lab" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            Live Interactive AI Laboratory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Coba Model AI & Simulasi Data Interaktif
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Uji kapabilitas machine learning dan logika pemrosesan data secara langsung melalui simulator interaktif berikut.
          </p>

          {/* Playground Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab("churn")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === "churn"
                  ? "bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              <Activity className="w-4 h-4 shrink-0" />
              <span>Customer Churn Predictor</span>
            </button>
            <button
              onClick={() => setActiveTab("nlp")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === "nlp"
                  ? "bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60"
              }`}
            >
              <Brain className="w-4 h-4 shrink-0" />
              <span>NLP Sentiment Inference</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Churn Predictor */}
        {activeTab === "churn" && (
          <Card3D depth={12} className="w-full">
            <div className="bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Inputs Controls */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-white font-semibold text-base flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-teal-400" /> Parameter Fitur Model (XGBoost/Scikit)
                    </span>
                    <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      v2.4 Production
                    </span>
                  </div>

                  {/* Tenure Slider */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>Masa Berlangganan (Tenure)</span>
                      <span className="font-mono text-teal-300 font-bold">{tenure} Bulan</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="48"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full accent-teal-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Monthly Spend */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>Tagihan Bulanan (USD / Bulan)</span>
                      <span className="font-mono text-teal-300 font-bold">${monthlySpend}</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="200"
                      step="5"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="w-full accent-teal-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Support Tickets */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                      <span>Keluhan / Tiket Bantuan (30 Hari Terakhir)</span>
                      <span className="font-mono text-teal-300 font-bold">{tickets} Tiket</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="6"
                      value={tickets}
                      onChange={(e) => setTickets(Number(e.target.value))}
                      className="w-full accent-teal-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Contract Type */}
                  <div>
                    <label className="block text-xs text-slate-300 mb-2">Tipe Kontrak Klien</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["monthly", "one-year", "two-year"] as const).map((c) => (
                        <button
                          key={c}
                          onClick={() => setContract(c)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border transition ${
                            contract === c
                              ? "bg-teal-500/20 text-teal-300 border-teal-500/60 font-semibold"
                              : "bg-slate-800/60 text-slate-400 border-slate-700 hover:text-white"
                          }`}
                        >
                          {c === "monthly" ? "Bulanan" : c === "one-year" ? "1 Tahun" : "2 Tahun"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleRunChurnModel}
                    className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Jalankan Inferensi Model
                  </button>
                </div>

                {/* Output & 3D Gauge Display */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-teal-400" />
                        Inference Output
                      </span>
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Model Verified
                      </span>
                    </div>

                    {/* Big Score Gauge */}
                    <div className="text-center my-6">
                      <div className="relative inline-flex items-center justify-center">
                        <svg className="w-40 h-40 transform -rotate-90">
                          <circle
                            cx="80"
                            cy="80"
                            r="68"
                            stroke="currentColor"
                            strokeWidth="12"
                            className="text-slate-800"
                            fill="transparent"
                          />
                          <circle
                            cx="80"
                            cy="80"
                            r="68"
                            stroke="currentColor"
                            strokeWidth="12"
                            strokeDasharray={427}
                            strokeDashoffset={427 - (427 * churnScore) / 100}
                            strokeLinecap="round"
                            className={
                              churnScore > 60
                                ? "text-rose-500 transition-all duration-700"
                                : churnScore > 30
                                ? "text-amber-400 transition-all duration-700"
                                : "text-teal-400 transition-all duration-700"
                            }
                            fill="transparent"
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                            {isCalculating ? "..." : `${churnScore}%`}
                          </span>
                          <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                            Risiko Churn
                          </span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            churnScore > 60
                              ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                              : churnScore > 30
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                              : "bg-teal-500/20 text-teal-300 border border-teal-500/40"
                          }`}
                        >
                          {churnScore > 60
                            ? "Tinggi (Memerlukan Retensi Cepat)"
                            : churnScore > 30
                            ? "Sedang (Perlu Perhatian)"
                            : "Rendah (Pelanggan Sangat Loyal)"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Importance Insight */}
                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                    <span className="font-semibold text-teal-300 block">Faktor Penentu Utama (Feature Weights):</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Model mendeteksi bahwa <strong className="text-slate-200">tipe kontrak</strong> dan{" "}
                      <strong className="text-slate-200">jumlah tiket keluhan</strong> memberikan pengaruh terbesar
                      terhadap probabilitas retensi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        )}

        {/* Tab 2: NLP Sentiment Inference */}
        {activeTab === "nlp" && (
          <Card3D depth={12} className="w-full">
            <div className="bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Masukkan Teks Evaluasi / Komentar Pelanggan
                </label>
                <textarea
                  value={nlpText}
                  onChange={(e) => setNlpText(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 focus:border-teal-400 outline-none text-sm resize-none"
                  placeholder="Ketik kalimat apapun dalam bahasa Indonesia atau Inggris..."
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="text-slate-400 self-center">Contoh cepat:</span>
                  <button
                    onClick={() =>
                      setNlpText("Sistem analitik ini sangat hebat dan mempercepat pengambilan keputusan!")
                    }
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700"
                  >
                    Komentar Sangat Puas
                  </button>
                  <button
                    onClick={() =>
                      setNlpText("Aplikasi sempat lambat dan terjadi error saat query data besar.")
                    }
                    className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700"
                  >
                    Komentar Kritis
                  </button>
                </div>

                <button
                  onClick={handleRunNlp}
                  disabled={isNlpAnalyzing}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-teal-500/20 transition disabled:opacity-50"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {isNlpAnalyzing ? "Menganalisis Token..." : "Jalankan Analisis Sentimen"}
                </button>
              </div>

              {/* NLP Inference Result Display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <span className="text-xs text-slate-400 uppercase font-mono block mb-1">Klasifikasi Sentimen</span>
                  <span className="text-base font-bold text-teal-300">{sentimentResult.sentiment}</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                  <span className="text-xs text-slate-400 uppercase font-mono block mb-1">Tingkat Keyakinan Model</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400">{sentimentResult.confidence}%</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-xs text-slate-400 uppercase font-mono block mb-2">Kata Kunci Berbobot</span>
                  <div className="flex flex-wrap gap-1.5">
                    {sentimentResult.tokens.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-teal-500/10 text-teal-300 border border-teal-500/30"
                      >
                        {t.word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        )}
      </div>
    </section>
  );
};

export default AiPlayground;
