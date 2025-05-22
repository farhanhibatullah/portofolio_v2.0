import React from "react";

const projects = [
  {
    title: "AI Portfolio Website",
    description: "A modern, full-stack portfolio with FastAPI backend, React frontend, and SQLite DB. Features authentication, project showcase, and contact form.",
    technologies: ["React.js", "TypeScript", "TailwindCSS", "FastAPI", "SQLite"],
    github: "https://github.com/yourusername/ai-portfolio",
    live: "https://your-portfolio.vercel.app/",
    image: "/ai_project.jpg",
  },
  {
    title: "Data Science Blog",
    description: "A blog platform for sharing data science projects and tutorials, with markdown support and analytics integration.",
    technologies: ["Next.js", "TailwindCSS", "Plausible Analytics"],
    github: "https://github.com/yourusername/ds-blog",
    live: "https://ds-blog.vercel.app/",
    image: "/ds_project.png",
  },
  // Tambahkan project lain di sini
];

const Projects: React.FC = () => (
  <section id="projects" className="flex items-center justify-center min-h-screen md:h-[100vh] w-full py-20 px-4 bg-slate-900">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-teal-300 mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg shadow-md p-4 border border-slate-700 hover:border-teal-400 transition flex flex-col w-full">
            <img src={project.image} alt={project.title} className="rounded-md mb-3 h-48 w-full object-cover" />
            <h3 className="text-xl font-semibold mb-1 text-teal-200">{project.title}</h3>
            <p className="mb-2 text-slate-300 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-slate-700 text-xs px-2 py-0.5 rounded text-teal-300 font-mono">{tech}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 underline text-xs">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 underline text-xs">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
