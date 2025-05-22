import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-30 bg-slate-900/80 backdrop-blur border-b border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="text-2xl font-bold text-teal-400 tracking-tight">Portofolio</a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-200 hover:text-teal-400 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden flex items-center text-slate-200 hover:text-teal-400 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-3 border-b border-slate-800/50 backdrop-blur-xl bg-gradient-to-b from-slate-900/90 to-slate-900/70">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-200 hover:text-teal-400 font-medium py-3 px-4 rounded-lg transition-all duration-300 text-center
                hover:bg-slate-800/50 hover:shadow-lg hover:shadow-teal-400/10
                border border-transparent hover:border-teal-400/30
                backdrop-blur-sm bg-slate-800/30
                transform hover:scale-105 hover:-translate-y-0.5
                active:scale-95"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
