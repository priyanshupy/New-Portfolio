import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:priyanshupareta@gmail.com',
      color: 'hover:text-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/priyanshu-pareta',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/priyanshupareta',
      color: 'hover:text-gray-700'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">Priyanshu Pareta</span>
            </div>
            <p className="text-gray-400 text-lg">
              Software Engineer & AI Enthusiast
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-400 transition-colors duration-200 ${link.color}`}
                aria-label={link.name}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Contact'].map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 mb-8"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center space-x-2">
              <span>© {currentYear} Priyanshu Pareta. All rights reserved.</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in London</span>
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
