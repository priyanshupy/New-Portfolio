import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle, Tag } from 'lucide-react';

interface ProjectItem {
  title: string;
  subtitle: string;
  year: string;
  description: string[];
  github?: string;
  demo?: string;
  tags: string[];
}

const Projects: React.FC<{ projects: ProjectItem[] }> = ({ projects }) => {
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Applied AI Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Hands-on AI engineering projects — from MSc research to production-ready applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                  <span className="flex-shrink-0 text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-primary-600 font-semibold text-base">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <ul className="space-y-3 mb-6 flex-1">
                {project.description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed text-sm">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-100">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
                  >
                    <Github size={18} />
                    <span>View on GitHub</span>
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
