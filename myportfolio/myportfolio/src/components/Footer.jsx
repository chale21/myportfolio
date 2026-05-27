import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${isDarkMode ? 'bg-dark border-t border-gray-800 text-white' : 'bg-light border-t border-gray-200 text-lightText'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Silitu</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Software Engineering Student passionate about building innovative solutions.
            </p>
          </div>

          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className={`${isDarkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'} transition-colors duration-300`}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={`${isDarkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'} transition-colors duration-300`}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className={`${isDarkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'} transition-colors duration-300`}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className={`${isDarkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'} transition-colors duration-300`}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className={`${isDarkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'} transition-colors duration-300`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:silitu534@gmail.com"
                className={`${isDarkMode ? 'bg-card text-gray-400 hover:text-primary hover:bg-gray-800' : 'bg-white text-gray-600 hover:text-primary hover:bg-gray-100'} p-3 rounded-lg transition-all duration-300`}
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/Silitu-Agalu"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'bg-card text-gray-400 hover:text-primary hover:bg-gray-800' : 'bg-white text-gray-600 hover:text-primary hover:bg-gray-100'} p-3 rounded-lg transition-all duration-300`}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'bg-card text-gray-400 hover:text-primary hover:bg-gray-800' : 'bg-white text-gray-600 hover:text-primary hover:bg-gray-100'} p-3 rounded-lg transition-all duration-300`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={`pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${isDarkMode ? 'border-t border-gray-800' : 'border-t border-gray-200'}`}>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
            © {new Date().getFullYear()} Silitu. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 transition-colors duration-300 text-sm ${isDarkMode ? 'text-gray-400 hover:text-primary' : 'text-gray-600 hover:text-primary'}`}
          >
            Back to top
          </button>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm flex items-center gap-2`}>
            Made with <Heart className="text-red-500" size={16} /> by Silitu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
