import React from "react";

const Hero: React.FC = () => (
  <section id="hero" className="flex flex-col items-center justify-center h-screen md:h-[100vh] w-full py-20 px-4 text-center bg-gradient-to-br from-slate-900 to-slate-800">
    <div className="container mx-auto flex flex-col items-center justify-center">
      <img
        src="/Foto.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-teal-400 shadow-lg mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">Farhan Hibatullah, S.T.</h1>
      <h2 className="text-xl md:text-2xl font-medium text-teal-300 mb-4">Data Scientist | AI Engineer | Cloud Specialist</h2>
      <p className="max-w-xl text-slate-200 mb-6">
        Saya membangun solusi data dan aplikasi web modern dengan pendekatan end-to-end, mulai dari backend API, database, hingga frontend interaktif dan deployment cloud.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="#projects" className="px-6 py-2 bg-teal-500 hover:bg-teal-400 rounded shadow font-semibold transition">Lihat Proyek</a>
        <a href="#contact" className="px-6 py-2 border border-teal-400 hover:bg-teal-700 rounded shadow font-semibold transition">Kontak</a>
      </div>
      <div className="flex gap-4 justify-center mt-8">
        {/* Tech stack icons */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-8 h-8" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="w-8 h-8" />
      </div>
    </div>
  </section>
);

export default Hero;
