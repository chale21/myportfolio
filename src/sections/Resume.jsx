import React from 'react';
import { Download, FileText, Calendar, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

export default function Resume() {
  const education = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Bahir Dar University",
      period: "2022 - Present",
      grade: "Top of Class (3.8+ GPA)",
      highlights: [
        "Advanced course studies in Algorithm Analysis, Database Normalization, Software Quality Assurance, and System Architecture.",
        "Team Lead for student academic projects; organized Git workflows and led frontend/backend integration sprints.",
        "Consistently recognized on the Dean's List for exceptional academic accomplishments."
      ]
    }
  ];

  const coreProjects = [
  {
    role: "Full-Stack Developer",
    project: "Hospital Management System",
    period: "2024 - 2025",
    description: "Developed a complete hospital management system for managing patients, doctors, and hospital operations.",
    bullets: [
      "Implemented patient and doctor management system with authentication and role-based access.",
      "Designed efficient data structures for storing and managing hospital records.",
      "Built search, sorting, and appointment management features."
    ]
  },
  {
    role: "Full-Stack Developer",
    project: "Staff Transport Management System",
    period: "2025",
    description: "Built a system to manage staff transportation scheduling, drivers, and routes.",
    bullets: [
      "Created employee transport allocation and scheduling system.",
      "Implemented driver and vehicle management modules.",
      "Designed admin dashboard for managing trips and attendance."
    ]
  },
  {
    role: "Full-Stack Developer",
    project: "Local Service Management System",
    period: "2025",
    description: "Developed a platform to connect users with local service providers efficiently.",
    bullets: [
      "Built service provider registration and request handling system.",
      "Implemented user-friendly interface for service management.",
      "Designed database structure for service tracking."
    ]
  },
  {
    role: "Frontend / System Developer",
    project: "Sound Alert System",
    period: "2025",
    description: "Created a system that generates automated alerts based on specific conditions.",
    bullets: [
      "Developed real-time alert triggering system.",
      "Implemented event-based notification logic.",
      "Built simple and responsive UI for monitoring alerts."
    ]
  },
  {
    role: "Frontend Developer",
    project: "Aviation Weather Monitoring System",
    period: "2025",
    description: "Built a weather monitoring system for aviation safety including wind and cloud tracking.",
    bullets: [
      "Displayed real-time weather and wind direction data.",
      "Designed UI for aviation safety indicators.",
      "Improved usability for quick decision-making."
    ]
  }
];

  const handleDownloadCV = () => {
    window.open('/Cv.pdf', '_blank');
  };
  return (
    <section id="resume" className="py-24 px-6 md:px-12 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            An overview of my academic credentials, research focuses, and key development milestones.
          </p>
        </div>

        {/* Action Download Block */}
        <a
          href="/Cv.pdf"
          download
          className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold"
        >
          <Download className="w-5 h-5" />
          Download CV
        </a>

        {/* Interactive CV Paper Layout (Print Optimized) */}
        <div className="max-w-4xl mx-auto p-6 md:p-12 rounded-3xl glass border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-left shadow-2xl space-y-10 print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">

          {/* Resume Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 dark:border-slate-800/80 pb-6 gap-4 print:border-slate-300">
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white print:text-black">
                Chalachew Akilew
              </h3>
              <span className="text-cyan-500 dark:text-cyan-400 font-bold uppercase tracking-wider text-sm print:text-cyan-600">
                Software Engineering Student & Full-Stack Developer
              </span>
            </div>
            <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 space-y-1 font-medium print:text-slate-700">
              <p>Bahir Dar, Ethiopia</p>
              <p>chalachewakilew@gmail.com</p>
              <p> github.com/chalachewakilew</p>
            </div>
          </div>

          {/* Resume Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar Column */}
            <div className="space-y-8">
              {/* Education Block */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 print:text-black print:border-slate-200">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-extrabold uppercase text-sm tracking-wider">Education</h4>
                </div>
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-2">
                    <h5 className="font-bold text-slate-800 dark:text-slate-200 text-[15px] print:text-slate-900">
                      {edu.degree}
                    </h5>
                    <p className="text-xs font-semibold text-cyan-500 dark:text-cyan-400 print:text-cyan-600">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </div>
                    <span className="inline-block text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {edu.grade}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Skill Matrix */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 print:text-black print:border-slate-200">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-extrabold uppercase text-sm tracking-wider">Expertise</h4>
                </div>
                <div className="space-y-2.5">
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">Languages</span>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 print:text-slate-800">
                      JavaScript, Python, C++, Java, HTML5, CSS3, SQL
                    </p>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">Libraries & Frameworks</span>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 print:text-slate-800">
                      React.js, Node.js, Express, Mongoose, Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">Tools & Cloud</span>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 print:text-slate-800">
                      Git, GitHub, Docker, MongoDB Atlas, RESTful API
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Body Content Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Experience timeline */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 print:text-black print:border-slate-200">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-extrabold uppercase text-sm tracking-wider">Engineering Focus & Projects</h4>
                </div>

                <div className="space-y-6">
                  {coreProjects.map((proj, idx) => (
                    <div key={idx} className="space-y-2.5">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <h5 className="font-extrabold text-slate-800 dark:text-slate-100 text-base print:text-slate-950">
                          {proj.project}
                        </h5>
                        <span className="text-xs font-semibold text-cyan-500 dark:text-cyan-400 print:text-cyan-600">
                          {proj.period}
                        </span>
                      </div>
                      <span className="block text-xs font-black text-slate-400 uppercase tracking-wider">
                        {proj.role}
                      </span>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 italic">
                        {proj.description}
                      </p>
                      <ul className="space-y-1.5 pl-2">
                        {proj.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-normal print:text-slate-800">
                            <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Detailed bullets */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 print:text-black print:border-slate-200">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-extrabold uppercase text-sm tracking-wider">Academic Accomplishments</h4>
                </div>
                <ul className="space-y-2 pl-2">
                  {education[0].highlights.map((hl, idx) => (
                    <li key={idx} className="flex gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed print:text-slate-800">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
