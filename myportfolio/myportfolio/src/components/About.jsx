import React from 'react';
import { motion } from 'framer-motion';
import { Code, Target, Heart } from 'lucide-react';

const About = ({ id, isDarkMode }) => {
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
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`rounded-2xl p-8 shadow-xl border ${isDarkMode ? 'bg-card border-gray-800' : 'bg-lightCard border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>Who I Am</h3>
              <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a 3rd year Software Engineering student with a deep passion for technology and innovation. 
                My journey in software development began with curiosity about how things work digitally, 
                and has evolved into a dedicated pursuit of building meaningful software solutions.
              </p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I believe in continuous learning and staying updated with the latest technologies. 
                Whether it's front-end development, back-end systems, or everything in between, 
                I'm always eager to expand my knowledge and tackle new challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className={`rounded-xl p-6 shadow-lg border card-hover ${isDarkMode ? 'bg-card border-gray-800' : 'bg-lightCard border-gray-200'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>Career Goals</h4>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    To become a full-stack software engineer who creates innovative solutions 
                    that make a positive impact on people's lives and businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-xl p-6 shadow-lg border card-hover ${isDarkMode ? 'bg-card border-gray-800' : 'bg-lightCard border-gray-200'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Code className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>Technical Focus</h4>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Specializing in modern web technologies with a strong foundation in 
                    software engineering principles and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className={`rounded-xl p-6 shadow-lg border card-hover ${isDarkMode ? 'bg-card border-gray-800' : 'bg-lightCard border-gray-200'}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>Passion</h4>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    I love turning complex problems into simple, beautiful, and intuitive 
                    solutions. Code is my creative outlet.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
