import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection tracker
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-3 bg-white/70 dark:bg-slate-950/75 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Branding */}
        <a 
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className="text-2xl font-black tracking-tight cursor-pointer"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Chalachew.
          </span>
          <span className="text-slate-800 dark:text-slate-200">A</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                  className={`text-[15px] font-medium tracking-wide transition-all duration-300 relative py-1 block cursor-pointer ${
                    activeSection === item.id
                      ? 'text-cyan-500 dark:text-cyan-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800" />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800/80 transition-all duration-300 shadow-xl overflow-hidden ${
        isOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
      }`}>
        <ul className="flex flex-col px-8 gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                className={`text-lg font-semibold tracking-wide block py-2 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 text-cyan-500 dark:text-cyan-400 font-bold border-l-4 border-cyan-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
