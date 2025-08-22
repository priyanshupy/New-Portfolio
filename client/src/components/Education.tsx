import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Star } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

const Education: React.FC<{ education: EducationItem[] }> = ({ education }) => {
  const certifications = [
    "Winner of Entrepreneurship Bootcamp - Northeastern University London",
    "Above and Beyond Certificate for Exceeding Expectation - SmartQ",
    "Menu Integration Award - SmartQ",
    "Menu Themes Appreciation Award - Compass Group UK"
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-primary-600" />
              <span>Academic Background</span>
            </h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {item.degree}
                      </h4>
                      <p className="text-lg font-semibold text-primary-600 mb-2">
                        {item.institution}
                      </p>
                    </div>
                    {item.details && (
                      <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        <Star className="w-4 h-4" />
                        <span>{item.details}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 text-gray-600 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center space-x-3">
              <Award className="w-8 h-8 text-primary-600" />
              <span>Professional Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-3 h-3 text-primary-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Current Focus
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Currently pursuing MSc in AI and Computer Science at Northeastern University London, 
                with a focus on artificial intelligence, machine learning, and advanced computing technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
