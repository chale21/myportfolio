import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = ({ id, isDarkMode }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'silitu534@gmail.com',
      href: 'mailto:silitu534@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0920350721',
      href: 'tel:0920350721',
      color: 'text-green-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      //href: 'https://linkedin.com',
      color: 'text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com/Silitu-Agalu',
      color: 'text-gray-400'
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Initialize EmailJS (do this once per app ideally)
    emailjs.init('YOUR_PUBLIC_KEY_HERE');

    emailjs
      .sendForm('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', formRef.current)
      .then(
        (result) => {
          setMessage('Message sent successfully!');
          formRef.current.reset();
          setLoading(false);
          setTimeout(() => setMessage(''), 3000);
        },
        (error) => {
          setMessage('Failed to send message. Please try again.');
          setLoading(false);
          setTimeout(() => setMessage(''), 3000);
        }
      );
  };

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
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Contact Me</h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-4 max-w-2xl mx-auto`}>
            Feel free to reach out. I'm always open to discussing new projects, ideas, or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`rounded-2xl p-8 shadow-xl border ${isDarkMode ? 'bg-card border-gray-800' : 'bg-lightCard border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>Get In Touch</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 leading-relaxed`}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                    rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-colors duration-300 group ${isDarkMode ? 'bg-dark/50 hover:bg-dark' : 'bg-white/80 hover:bg-gray-100'}`}
                  >
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                      <item.icon className={item.color} size={24} />
                    </div>
                    <div>
                      <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'} text-sm`}>{item.label}</p>
                      <p className={`${isDarkMode ? 'text-white' : 'text-lightText'} font-medium`}>{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`rounded-2xl p-8 shadow-xl border h-full ${isDarkMode ? 'bg-card border-gray-800' : 'bg-lightCard border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-lightText'}`}>Send a Message</h3>
              
              {message && (
                <div className={`mb-4 p-4 rounded-lg text-center ${
                  message.includes('successfully')
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {message}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 ${isDarkMode ? 'bg-dark border border-gray-700 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-lightText placeholder-gray-500'}`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 ${isDarkMode ? 'bg-dark border border-gray-700 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-lightText placeholder-gray-500'}`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none ${isDarkMode ? 'bg-dark border border-gray-700 text-white placeholder-gray-500' : 'bg-white border border-gray-300 text-lightText placeholder-gray-500'}`}
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gradient-bg px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-primary/30 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
