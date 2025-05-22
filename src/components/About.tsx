import React from "react";

const About: React.FC = () => (
  <section id="about" className="flex items-center justify-center h-screen md:h-[100vh] w-full py-20 px-6 md:px-24 bg-slate-900 text-center">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-teal-300 mb-6">About Me</h2>
      <p className="max-w-2xl mx-auto text-slate-200 mb-6">
        Saya adalah seorang Data Scientist & Software Engineer dengan pengalaman membangun solusi data, AI, dan aplikasi web modern. Passion saya adalah menghubungkan data, teknologi, dan bisnis untuk menciptakan dampak nyata.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
        <div className="bg-slate-800 rounded-xl p-6 shadow w-full md:w-1/3">
          <div className="text-4xl font-bold text-teal-400 mb-2">8+</div>
          <div className="text-slate-300">Tahun Pengalaman</div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 shadow w-full md:w-1/3">
          <div className="text-4xl font-bold text-teal-400 mb-2">20+</div>
          <div className="text-slate-300">Proyek Selesai</div>
        </div>
        <div className="bg-slate-800 rounded-xl p-6 shadow w-full md:w-1/3">
          <div className="text-4xl font-bold text-teal-400 mb-2">5</div>
          <div className="text-slate-300">Sertifikasi Profesional</div>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <a href="/contact" className="px-5 py-2 bg-teal-500 hover:bg-teal-400 rounded font-semibold transition">Download CV</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-teal-400 hover:bg-teal-700 rounded font-semibold transition text-teal-300">LinkedIn</a>
      </div>
    </div>
  </section>
);

export default About;
