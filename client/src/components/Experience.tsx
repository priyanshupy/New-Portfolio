import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const Experience: React.FC<{ experience: ExperienceItem[] }> = ({ experience }) => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg transform lg:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 lg:ml-0 lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}>
                  <div className="card p-6 lg:p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Briefcase className="w-5 h-5 text-primary-600" />
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <span className="font-semibold text-primary-600">
                          {item.company}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
