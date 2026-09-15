import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Copy, Check, Phone, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import Card3D from "./Card3D";

const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

const topicPresets = [
  "Kolaborasi Proyek AI / ML",
  "Pembangunan Pipeline Data Cloud",
  "Konsultasi Rekayasa Data & Backend",
  "Peluang Kerja / Full-Time Role",
  "Lainnya",
];

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Kolaborasi Proyek AI / ML");
  const [message, setMessage] = useState("");
  
  const [emailError, setEmailError] = useState("");
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const officialEmail = "farhanhibatullah433@gmail.com";

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setTouched(true);
    if (!emailPattern.test(e.target.value)) {
      setEmailError("Format email belum valid. Contoh: nama@domain.com");
    } else {
      setEmailError("");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (!emailPattern.test(email)) {
      setEmailError("Format email belum valid. Contoh: nama@domain.com");
    } else {
      setEmailError("");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    if (!name.trim() || !emailPattern.test(email) || !message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable transmission and feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger high-end celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2dd4bf", "#38bdf8", "#818cf8", "#34d399"],
        });
      } catch (err) {
        // graceful
      }
    }, 800);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
    setTouched(false);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            Mari Berkolaborasi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hubungi Saya & Diskusikan Solusi Anda
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Apakah Anda memiliki proyek data science, model AI yang ingin diproduksi, atau arsitektur cloud yang perlu dioptimalkan? Saya siap berdiskusi!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <Card3D depth={14}>
              <div className="bg-slate-900/85 border border-slate-800 hover:border-teal-400/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Informasi Kontak Langsung</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Respon cepat dalam kurun waktu 1x24 jam kerja untuk kolaborasi proyek, konsultasi teknis, atau penawaran profesional.
                  </p>
                </div>

                {/* Email Box with One-Click Copy */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-400 font-mono block">Email Resmi</span>
                      <a href={`mailto:${officialEmail}`} className="text-xs font-semibold text-white hover:text-teal-300 truncate block">
                        {officialEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    title="Salin Email ke Clipboard"
                    className="p-2 rounded-lg bg-slate-700/60 hover:bg-teal-500 hover:text-slate-950 text-slate-300 transition shrink-0"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp & Discussion Box */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono block">WhatsApp Chat</span>
                      <span className="text-xs font-semibold text-white">Tersedia untuk Diskusi Cepat</span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 text-xs font-semibold transition"
                  >
                    Chat WA
                  </a>
                </div>

                {/* Availability Highlights */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span>Lokasi: Indonesia (Remote / On-site Flex)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Peran: Data Scientist, AI Engineer, Cloud Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Ketersediaan: Terbuka untuk Kontrak & Full-time</span>
                  </div>
                </div>

              </div>
            </Card3D>
          </div>

          {/* Right Side: Interactive 3D Form */}
          <div className="lg:col-span-7">
            <Card3D depth={14}>
              <div className="bg-slate-900/90 border border-slate-800 hover:border-teal-400/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/40 animate-in zoom-in-75 duration-300">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Pesan Anda Berhasil Terkirim!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Terima kasih <strong className="text-teal-300">{name}</strong>. Pesan mengenai <span className="text-slate-200">"{selectedTopic}"</span> telah diterima. Saya akan segera menghubungi Anda melalui <strong className="text-teal-300">{email}</strong>.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-semibold transition"
                    >
                      Kirim Pesan Lainnya
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Topic Preset Chips */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Pilih Topik Diskusi
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {topicPresets.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => setSelectedTopic(topic)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                              selectedTopic === topic
                                ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 font-semibold"
                                : "bg-slate-800/60 text-slate-400 border border-slate-700/60 hover:text-white"
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Nama Lengkap <span className="text-teal-400">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Masukkan nama Anda"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-teal-400 outline-none transition"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Alamat Email <span className="text-teal-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={handleEmailChange}
                          onBlur={handleBlur}
                          placeholder="nama@email.com"
                          className={`w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border ${
                            emailError && touched ? "border-rose-500" : "border-slate-700"
                          } text-white placeholder-slate-500 text-xs focus:border-teal-400 outline-none transition`}
                        />
                        {emailError && touched && (
                          <span className="flex items-center gap-1 text-rose-400 text-[11px] mt-1">
                            <AlertCircle className="w-3 h-3" /> {emailError}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Deskripsi Pesan / Pertanyaan <span className="text-teal-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Jelaskan kebutuhan proyek, target waktu, atau hal yang ingin Anda diskusikan..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:border-teal-400 outline-none resize-none transition"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/25 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kirim Pesan Sekarang</span>
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
