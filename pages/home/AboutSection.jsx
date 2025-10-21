import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../components/AppIcon.jsx';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const tabs = [
    {
      id: 'journey',
      label: 'Personal Journey',
      icon: 'User',
      content: {
        title: 'From Psychology to Code',
        description: `My path to technology wasn't traditional, but it's been transformative. Starting with a deep fascination for human behavior and psychology, I discovered that the most impactful technology solutions come from understanding people first.\n\nThis unique perspective drives my approach to development - every line of code I write considers the human on the other side of the screen.`,
        highlights: [
          'Dual degree pursuit in Computer Science & Psychology',
          'NSF Research Internship in Adversarial ML',
          'Passion for inclusive STEM education',
          'Girls-in-tech leadership and mentoring'
        ]
      }
    },
    {
      id: 'academic',
      label: 'Academic Path',
      icon: 'GraduationCap',
      content: {
        title: 'Rigorous Academic Foundation',
        description: `Currently pursuing a dual degree that bridges technical excellence with human understanding. My academic journey combines rigorous computer science coursework with psychological research methodologies.\n\nThis interdisciplinary approach has equipped me with unique problem-solving skills that consider both technical constraints and human factors.`,
        highlights: [
          'Computer Science Engineering focus',
          'Psychology minor with research emphasis',
          'NSF internship recognition',
          'Academic research in ML security'
        ]
      }
    },
    {
      id: 'research',
      label: 'Research Passion',
      icon: 'BookOpen',
      content: {
        title: 'Advancing ML Security & HCI',
        description: `My research focuses on the intersection of machine learning security and human-computer interaction. Through my NSF internship, I'm exploring how adversarial attacks can be mitigated through better understanding of human behavior patterns.\n\nThis work represents the future of secure, human-centered AI systems.`,
        highlights: [
          'NSF Research Internship recipient','Adversarial ML security research','Human-Computer Interaction studies','Publication-ready research outcomes'
        ]
      }
    },
    {
      id: 'teaching',label: 'Teaching Philosophy',icon: 'Users',
      content: {
        title: 'Empowering Through Education',description: `Teaching isn't just about transferring knowledge - it's about inspiring curiosity and building confidence. My experience as a coding instructor has taught me that the best learning happens when students feel supported and understood.\n\nI believe in making technology accessible to everyone, especially underrepresented groups in STEM.`,
        highlights: [
          'Coding instructor experience','Inclusive education advocate','Peer mentoring programs','Community workshop leadership'
        ]
      }
    }
  ];

  const currentTab = tabs?.find(tab => tab?.id === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
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
              About <span className="text-blue-400">Paige</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A multi-layered story of passion, purpose, and the pursuit of human-centered technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeTab === tab?.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={tab?.icon} 
                        size={20} 
                        className={activeTab === tab?.id ? 'text-white' : 'text-gray-400'}
                      />
                      <span className="font-medium">{tab?.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Icon name={currentTab?.icon} size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white font-heading">
                      {currentTab?.content?.title}
                    </h3>
                  </div>

                  <div className="prose prose-lg prose-invert max-w-none">
                    {currentTab?.content?.description?.split('\n\n')?.map((paragraph, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Key Highlights:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentTab?.content?.highlights?.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg border border-slate-600"
                        >
                          <Icon name="CheckCircle" size={16} className="text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

