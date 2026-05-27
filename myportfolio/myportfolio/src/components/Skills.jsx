import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ id, isDarkMode }) => {
  const skills = [
    { name: 'HTML', level: 70, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 65, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 60, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', level: 55, color: 'from-cyan-500 to-blue-500' },
    { name: 'Java', level: 50, color: 'from-red-500 to-orange-500' },
    { name: 'C++', level: 45, color: 'from-blue-600 to-purple-600' },
    { name: 'Git', level: 60, color: 'from-orange-600 to-red-600' },
    { name: 'GitHub', level: 55, color: 'from-gray-600 to-gray-800' },
  ];

  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-darker' : 'bg-light'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Skills</h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-4 max-w-2xl mx-auto`}>
            Technologies and tools I've been working with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className={`rounded-xl p-6 shadow-lg border h-full card-hover ${isDarkMode ? 'bg-card border-gray-800' : 'bg-lightCard border-gray-200'}`}>
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-white">{skill.name[0]}</span>
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>{skill.name}</h3>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full rounded-full h-2`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-2 block`}>{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
