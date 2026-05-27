import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ id, isDarkMode }) => {
  const projects = [
    {
      title: 'Calculator App',
      description: 'A clean calculator interface with support for basic arithmetic operations and instant results. Built with HTML, CSS, and JavaScript for fast browser usage.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
      image: '/images/calculatorimage.png'
    },
    {
      title: 'Weather App',
      description: 'A weather dashboard showing current conditions and forecasts. Built using HTML, CSS, and JavaScript for a lightweight web experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-purple-500 to-pink-500',
      image: '/images/weatherimage.png'
    },
    {
      title: 'To-Do App',
      description: 'A productive task management application with features like task categorization, reminders, and progress tracking. Helps users stay organized and focused on their goals.',
      technologies: ['React', 'CSS', 'JavaScript'],
      color: 'from-green-500 to-emerald-500',
      image: '/images/todo.svg'
    },
  ];

  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-4 max-w-2xl mx-auto`}>
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`rounded-2xl overflow-hidden shadow-xl border h-full card-hover group ${isDarkMode ? 'bg-card border-gray-800' : 'bg-lightCard border-gray-200'}`}>
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center p-4`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>{project.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 gradient-bg rounded-lg text-white font-medium hover:opacity-90 transition-opacity duration-300">
                      <ExternalLink size={16} />
                      View
                    </button>
                    <button className={`flex items-center gap-2 px-4 py-2 border rounded-lg font-medium transition-colors duration-300 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-lightText hover:bg-gray-100'}`}>
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
