import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import { Github, Linkedin, Send, ArrowUp, Mail, MapPin } from 'lucide-react';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 flex flex-col font-sans">
      {/* Floating Sticky Header */}
      <Navbar />

      {/* Main Content Layout Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Certifications />
        <Contact />
      </main>

      {/* Premium Design Footer */}
      <footer className="bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80 py-12 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Chalachew Akilew
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
              Software Engineering Student & MERN Full-Stack Developer
            </p>
          </div>

          {/* Social Anchors */}
          <div className="flex items-center gap-5 justify-center">
            <a
              href="https://github.com/chalachewakilew"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/chalachewakilew"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/chalachewakilew"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full glass border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 cursor-pointer shadow-sm"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright segment */}
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/60 text-center text-xs text-slate-400 font-semibold tracking-wider uppercase">
          © {new Date().getFullYear()} Chalachew Akilew. All Rights Reserved. Built with React & Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

export default App;
