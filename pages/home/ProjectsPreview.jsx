import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon.jsx';
import Image from '../../components/AppImage.jsx';
import Button from '../../components/ui/Button.jsx';

const ProjectsPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const featuredProjects = [
    {
      id: 1,
      title: 'Adversarial ML Security Framework',
      category: 'Research Project',
      description: 'NSF-funded research on developing robust defense mechanisms against adversarial attacks in machine learning systems, with focus on human behavior pattern analysis.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Jupyter'],
      status: 'Completed',
      impact: 'NSF Recognition',
      color: 'from-purple-600 to-purple-500'
    },
    {
      id: 2,
      title: 'EmpathyCode Learning Platform',
      category: 'Full-Stack Application',
      description: 'Interactive coding education platform designed with psychological principles to improve learning outcomes for underrepresented groups in STEM.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      status: 'Completed',
      impact: '50+ Students',
      color: 'from-blue-600 to-blue-500'
    },
    {
      id: 3,
      title: 'Inclusive STEM Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Real-time analytics dashboard tracking diversity metrics and engagement patterns in STEM education programs with actionable insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      technologies: ['React', 'D3.js', 'Python', 'MongoDB'],
      status: 'Completed',
      impact: 'Program Impact',
      color: 'from-green-600 to-green-500'
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
    <section ref={sectionRef} className="py-20 bg-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing the intersection of technical excellence and human-centered design
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects?.map((project) => (
              <motion.div
                key={project?.id}
                variants={itemVariants}
                className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project?.status === 'Completed' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                    }`}>
                      {project?.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-gray-300 backdrop-blur-sm">
                      {project?.impact}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Folder" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400 uppercase tracking-wider">
                      {project?.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-heading">
                    {project?.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-800 text-gray-300 rounded text-xs font-medium border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 text-xs"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Github"
                      className="text-gray-400 hover:text-white hover:bg-slate-800"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '10+', label: 'Projects Completed', icon: 'CheckCircle' },
                { number: '5', label: 'Technologies Mastered', icon: 'Code' },
                { number: '1', label: 'NSF Research Project', icon: 'Award' },
                { number: '100%', label: 'Human-Centered Focus', icon: 'Heart' }
              ]?.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                    <Icon name={stat?.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 font-heading">
                    {stat?.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat?.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-2xl p-8 border border-slate-700">
              <div className="text-center space-y-4">
                <Icon name="Lightbulb" size={48} className="text-yellow-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white font-heading">Development Philosophy</h3>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  "Every project I build starts with understanding the human need it serves. 
                  Technology should amplify human potential, not complicate human experience."
                </p>
                <div className="flex justify-center space-x-6 pt-4">
                  {[
                    { label: 'User-Centered', icon: 'Users' },
                    { label: 'Research-Driven', icon: 'Search' },
                    { label: 'Inclusive Design', icon: 'Heart' }
                  ]?.map((principle, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <Icon name={principle?.icon} size={16} className="text-blue-400" />
                      <span className="text-sm font-medium">{principle?.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link to="/projects">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore All Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;

