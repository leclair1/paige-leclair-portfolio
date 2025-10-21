import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon.jsx';
import Button from '../../components/ui/Button.jsx';

const SkillsPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'Monitor',
      color: 'from-blue-600 to-blue-500',
      skills: [
        { name: 'React', level: 90, icon: 'Code' },
        { name: 'JavaScript', level: 85, icon: 'FileCode' },
        { name: 'TypeScript', level: 80, icon: 'FileCode2' },
        { name: 'CSS/Tailwind', level: 88, icon: 'Palette' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: 'Server',
      color: 'from-green-600 to-green-500',
      skills: [
        { name: 'Node.js', level: 82, icon: 'Zap' },
        { name: 'Python', level: 85, icon: 'Code2' },
        { name: 'PostgreSQL', level: 78, icon: 'Database' },
        { name: 'MongoDB', level: 75, icon: 'HardDrive' }
      ]
    },
    {
      title: 'Research & ML',
      icon: 'Brain',
      color: 'from-purple-600 to-purple-500',
      skills: [
        { name: 'Machine Learning', level: 80, icon: 'Bot' },
        { name: 'Data Analysis', level: 85, icon: 'BarChart3' },
        { name: 'Research Methods', level: 90, icon: 'Search' },
        { name: 'Statistical Analysis', level: 82, icon: 'TrendingUp' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'Users',
      color: 'from-pink-600 to-pink-500',
      skills: [
        { name: 'Leadership', level: 88, icon: 'Crown' },
        { name: 'Teaching', level: 92, icon: 'GraduationCap' },
        { name: 'Communication', level: 90, icon: 'MessageCircle' },
        { name: 'Problem Solving', level: 85, icon: 'Lightbulb' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
              Skills & <span className="text-green-400">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive blend of technical proficiency and human-centered skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skillCategories?.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category?.color}`}>
                    <Icon name={category?.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-heading">
                    {category?.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category?.skills?.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.5 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name={skill?.icon} size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-300 font-medium">
                            {skill?.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">{skill?.level}%</span>
                      </div>

                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill?.level}%` } : { width: 0 }}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                            duration: 0.8,
                            ease: 'easeOut'
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category?.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-heading">
              Key Strengths
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Interdisciplinary Approach',
                  description: 'Combining CS and Psychology for human-centered solutions',
                  icon: 'Layers',
                  color: 'text-blue-400'
                },
                {
                  title: 'Research Excellence',
                  description: 'NSF internship and cutting-edge ML security research',
                  icon: 'Award',
                  color: 'text-green-400'
                },
                {
                  title: 'Educational Impact',
                  description: 'Passionate about inclusive STEM education and mentoring',
                  icon: 'Heart',
                  color: 'text-pink-400'
                }
              ]?.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-700 mb-4`}>
                    <Icon name={strength?.icon} size={24} className={strength?.color} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 font-heading">
                    {strength?.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {strength?.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link to="/skills">
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                View Complete Skills Matrix
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPreview;

