import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Frontend', 'Backend', 'DevOps/Tools', 'Core'];

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/skills');
        if (!response.ok) throw new Error('API fetch failed');
        const data = await response.json();
        setSkills(data);
      } catch (err) {
        console.warn('Could not fetch skills from API, using robust static fallback:', err.message);
        // High fidelity fallback list
        setSkills([
          { _id: "s1", name: "React.js", level: 95, category: "Frontend", icon: "Code" },
          { _id: "s2", name: "JavaScript (ES6+)", level: 98, category: "Frontend", icon: "Braces" },
          { _id: "s3", name: "Tailwind CSS", level: 90, category: "Frontend", icon: "Palette" },
          { _id: "s4", name: "HTML5 & CSS3", level: 95, category: "Frontend", icon: "Layers" },
          { _id: "s5", name: "Node.js / Express", level: 92, category: "Backend", icon: "Server" },
          { _id: "s6", name: "MongoDB / Mongoose", level: 88, category: "Backend", icon: "Database" },
          { _id: "s7", name: "RESTful APIs", level: 95, category: "Backend", icon: "Cpu" },
          { _id: "s8", name: "Git & GitHub", level: 90, category: "DevOps/Tools", icon: "GitBranch" },
          { _id: "s9", name: "Docker", level: 80, category: "DevOps/Tools", icon: "Container" },
          { _id: "s10", name: "Data Structures & Algorithms", level: 90, category: "Core", icon: "Compass" },
          { _id: "s11", name: "Software Engineering Principles", level: 94, category: "Core", icon: "GraduationCap" }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const filteredSkills = category === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === category);

  // Dynamic Lucide Icon Resolver
  const SkillIcon = ({ iconName }) => {
    const Icon = Icons[iconName] || Icons.Terminal;
    return <Icon className="w-5 h-5 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300" />;
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[90px] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 z-10 relative">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            A comprehensive breakdown of my engineering tools, technologies, and academic core competencies.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer ${
                category === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:opacity-90 hover:scale-105 active:scale-95'
                  : 'glass text-slate-600 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-cyan-500 animate-spin" />
            <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Loading Skill Matrix...</span>
          </div>
        ) : (
          /* Skills Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredSkills.map((skill) => (
              <div 
                key={skill._id}
                className="p-6 rounded-2xl glass border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 transition-all duration-300 shadow-md flex flex-col justify-between group"
              >
                {/* Header Information */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-cyan-500/10 transition-colors">
                        <SkillIcon iconName={skill.icon} />
                      </div>
                      <span className="font-extrabold text-slate-900 dark:text-white text-[17px]">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-black text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-400/10 px-2.5 py-1 rounded-lg">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Category Tag */}
                  <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded">
                    {skill.category}
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div className="mt-6 space-y-1.5">
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
