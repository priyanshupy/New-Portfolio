import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Globe, Settings } from 'lucide-react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.filter(skill => 
        ['Python', 'JavaScript', 'C', 'C++'].includes(skill)
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frameworks & Libraries",
      icon: Settings,
      skills: skills.filter(skill => 
        ['Flask', 'Django', 'Pandas', 'NumPy', 'React'].includes(skill)
      ),
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: skills.filter(skill => 
        ['GCP', 'Cloud Functions', 'App Engine', 'BigQuery', 'Kubernetes'].includes(skill)
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: skills.filter(skill => 
        ['SQL', 'NoSQL', 'Data Analysis', 'Data Visualization', 'Machine Learning'].includes(skill)
      ),
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: skills.filter(skill => 
        ['Machine Learning', 'AI', 'Data Science'].includes(skill)
      ),
      color: "from-red-500 to-red-600"
    },
    {
      title: "Tools & Methodologies",
      icon: Globe,
      skills: skills.filter(skill => 
        ['Git', 'Agile Methodologies', 'API Development', 'Web Scraping', 'System Design'].includes(skill)
      ),
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            All Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
