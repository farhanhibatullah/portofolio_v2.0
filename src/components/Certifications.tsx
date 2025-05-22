import React from "react";

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    year: 2023,
    link: "#",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    year: 2022,
    link: "#",
  },
  {
    name: "Pacmann Data Science Bootcamp",
    issuer: "Pacmann",
    year: 2021,
    link: "#",
  },
];

const Certifications: React.FC = () => (
  <section id="certifications" className="py-20 px-4 bg-slate-800 text-center">
    <h2 className="text-3xl font-bold text-teal-300 mb-8">Certifications & Achievements</h2>
    <div className="flex flex-row flex-wrap justify-center gap-10 max-w-6xl mx-auto">
      {certifications.map((cert, idx) => (
        <a
          key={idx}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 rounded-2xl shadow-xl p-10 border border-slate-700 hover:border-teal-400 transition w-96 min-h-[180px] text-left flex flex-col gap-4 items-start justify-center"
        >
          <div className="text-xl font-semibold text-teal-200">{cert.name}</div>
          <div className="text-slate-400 text-base">{cert.issuer}</div>
          <div className="text-slate-500 text-sm">{cert.year}</div>
        </a>
      ))}
    </div>
  </section>
);

export default Certifications;
