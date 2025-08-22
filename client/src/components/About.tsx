import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Linkedin, Award, Target, Users } from 'lucide-react';

interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
}

const About: React.FC<{ personal: PersonalInfo }> = ({ personal }) => {
  const highlights = [
    {
      icon: Award,
      title: "Entrepreneurship Winner",
      description: "Winner of Northeastern University London Entrepreneurship Bootcamp"
    },
    {
      icon: Target,
      title: "AI & ML Focus",
      description: "Passionate about AI advancements and delivering impactful solutions"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience mentoring junior engineers and leading cross-functional teams"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{personal.name}</h3>
                  <p className="text-gray-600">{personal.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin size={20} />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail size={20} />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone size={20} />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Linkedin size={20} />
                  <a 
                    href={`https://${personal.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    {personal.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Summary & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {personal.summary}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Highlights
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
