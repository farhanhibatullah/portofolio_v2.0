import React from "react";

const techs = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
];

const TechStack: React.FC = () => (
  <section id="techstack" className="flex items-center justify-center min-h-screen md:h-[100vh] w-full py-20 px-4 bg-slate-800 text-center">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-teal-300 mb-8">Tech Stack & Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {techs.map((tech) => (
          <div 
            key={tech.name} 
            className="flex flex-col items-center group bg-slate-900/50 p-4 rounded-lg border-2 border-transparent hover:border-[#2bceb9] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#2bceb9]/20 hover:scale-105"
          >
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-12 h-12 md:w-14 md:h-14 mb-2 group-hover:scale-110 transition-transform duration-300 ease-in-out" 
            />
            <span className="text-slate-200 text-sm group-hover:text-[#2bceb9] transition-colors duration-300 ease-in-out">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
