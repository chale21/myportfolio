import React from 'react';
import { GraduationCap, Award, Briefcase, BookOpen, Compass, Code } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      title: "Education",
      desc: "Software Engineering Major",
      detail: "Deep focus on design patterns, backend engineering, algorithms, and modular UI."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      title: "Experience",
      desc: "Projects & Freelance",
      detail: "Translating customer requirements into functional Web & MERN solutions."
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "Interests",
      desc: "Cloud & Automation",
      detail: "Passionate about cloud integrations, system infrastructure, and automation scripts."
    }
  ];

  const timeline = [
    {
      year: "2023 - Present",
      title: "Software Engineering Program",
      institution: "Academic Education",
      description: "Rigorous coursework focusing on system architectures, database normalization (SQL & NoSQL), object-oriented methodologies, and software testing practices."
    },
    {
      year: "2024",
      title: "Full-Stack Development Focus",
      institution: "Self-Directed Specialty",
      description: "Mastered the MERN (MongoDB, Express, React, Node.js) tech stack. Developed and deployed multi-tier applications featuring responsive user dashboards and WebSocket controllers."
    },
    {
      year: "2025",
      title: "Cloud Infrastructure & Toolings",
      institution: "Professional Upskilling",
      description: "Obtained certifications in cloud architectures, containerized applications using Docker, and automated integration/deployment strategies."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Learn more about my academic foundation, my career goals, and what drives my development approach.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Visual Avatar / Graphic Box */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass border-2 border-slate-200/50 dark:border-slate-800/80 shadow-2xl p-3 animate-float group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
                <Code className="w-20 h-20 text-slate-400 dark:text-slate-600 animate-pulse" />
                <span className="absolute bottom-6 text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                  Chalachew Akilew
                </span>
                
                {/* Visual decoration */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-cyan-400/50">{"const dev = {"}</div>
                <div className="absolute top-6 left-6 text-[10px] font-mono text-emerald-400/50">{"name: 'Chalachew',"}</div>
                <div className="absolute top-10 left-6 text-[10px] font-mono text-cyan-400/50">{"major: 'SoftwareEng'"}</div>
                <div className="absolute top-14 left-2 text-[10px] font-mono text-cyan-400/50">{"};"}</div>
              </div>
            </div>
          </div>

          {/* Description Content */}
          <div className="lg:col-span-3 space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              Engineering Scalable & Clean Real-World Web Solutions
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-[15px] md:text-base">
              I am a Software Engineering student driven by a deep technical curiosity and a desire to build software systems that solve human problems. My education has equipped me with strong analytical habits, allowing me to understand system lifecycles, write reusable algorithms, and structuralize database networks properly.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-[15px] md:text-base">
              Whether optimizing database querying limits or refining micro-layouts for ideal mobile experiences, I focus on coding with modular structures. I enjoy bridging the technical backend with the interactive frontend, and I am always looking forward to collaborating on state-of-the-art products.
            </p>

            {/* Quick Stat Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {cards.map((card, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl glass border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform duration-300 flex flex-col text-left space-y-2 hover:border-cyan-400/50"
                >
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {card.title}
                  </h4>
                  <span className="text-xs font-semibold text-cyan-500 dark:text-cyan-400">
                    {card.desc}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    {card.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic & Professional Timeline */}
        <div className="pt-12 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
              Education & Milestones
            </h3>
            <p className="text-xs uppercase tracking-widest text-slate-400">My Path So Far</p>
          </div>

          <div className="max-w-4xl mx-auto relative border-l border-slate-200 dark:border-slate-800 pl-6 md:pl-10 space-y-12 text-left">
            {timeline.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute left-[-31px] md:left-[-47px] top-1.5 p-1 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 transition-all duration-300 group-hover:border-cyan-400">
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-slate-800 group-hover:bg-cyan-400 transition-colors" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                    {step.year}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h4>
                  <span className="block text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    {step.institution}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 font-light text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
