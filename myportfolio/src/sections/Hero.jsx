import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Send, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import NeuralBackground from '../components/NeuralBackground';

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Software Engineer", "Full-Stack Developer", "Problem Solver", "MERN Stack Specialist"];
  const typingSpeed = 180;
  const deletingSpeed = 120;
  const delayBetweenRoles = 3000;

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 pb-16 overflow-hidden"
    >
      {/* Premium background mesh gradients + neural network canvas (only on home) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <NeuralBackground />
        <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[80px] md:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[80px] md:blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 space-y-8 md:space-y-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs md:text-sm font-semibold tracking-wide animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">Chalachew Akilew</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 min-h-[40px] md:min-h-[60px] flex justify-center items-center gap-2">
            <Terminal className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            <span>I build solutions as a </span>
            <span className="text-cyan-500 dark:text-cyan-400 relative">
              {text}
              <span className="w-[3px] h-[80%] bg-cyan-500 dark:bg-cyan-400 absolute right-[-6px] top-[10%] animate-pulse" />
            </span>
          </h2>
        </div>

        {/* Intro */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
         Full-Stack Developer focused on creating scalable web applications, powerful backend systems, and responsive user experiences. Passionate about solving real-world problems through modern software engineering and intelligent system design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20 cursor-pointer group"
          >
            Explore Projects
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 font-semibold cursor-pointer glass"
          >
            Let's Collaborate
          </button>
        </div>

        {/* Social Integrations */}
        <div className="pt-8 md:pt-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
            Connect With Me
          </span>
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://github.com/chalachewakilew"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="w-5.5 h-5.5" />
            </a>
            
            <a
              href="https://linkedin.com/in/chalachewakilew"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5.5 h-5.5" />
            </a>
            
            <a
              href="https://t.me/chalachewakilew"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Telegram Account"
            >
              <Send className="w-5.5 h-5.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-slate-50/50 dark:fill-slate-900/40"></path>
        </svg>
      </div>
    </section>
  );
}
