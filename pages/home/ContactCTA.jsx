import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon.jsx';
import Button from '../../components/ui/Button.jsx';

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const contactMethods = [
    {
      title: 'Email',
      description: 'For professional inquiries and collaborations',
      icon: 'Mail',
      action: 'Send Email',
      color: 'from-blue-600 to-blue-500',
      href: 'mailto:paige.leclair@example.com'
    },
    {
      title: 'LinkedIn',
      description: 'Connect for networking and opportunities',
      icon: 'Linkedin',
      action: 'Connect',
      color: 'from-blue-700 to-blue-600',
      href: 'https://linkedin.com/in/paige-leclair'
    },
    {
      title: 'Schedule Meeting',
      description: 'Book a time for detailed discussions',
      icon: 'Calendar',
      action: 'Book Time',
      color: 'from-green-600 to-green-500',
      href: '#'
    }
  ];

  const opportunities = [
    {
      title: 'Full-Stack Developer Roles',
      description: 'Ready for junior to mid-level positions',
      icon: 'Code',
      color: 'text-blue-400'
    },
    {
      title: 'Research Collaborations',
      description: 'ML security and HCI research projects',
      icon: 'BookOpen',
      color: 'text-green-400'
    },
    {
      title: 'Speaking Engagements',
      description: 'Diversity in tech and inclusive education',
      icon: 'Mic',
      color: 'text-purple-400'
    },
    {
      title: 'Mentorship Programs',
      description: 'Supporting underrepresented groups in STEM',
      icon: 'Users',
      color: 'text-pink-400'
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
              Let's <span className="text-green-400">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on meaningful technology solutions that put humans first
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl p-8 lg:p-12 border border-slate-700 text-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white font-heading">
                    Building Technology with Empathy
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm actively seeking opportunities to contribute my unique blend of technical skills and psychological insights to teams that value human-centered innovation. Whether you're 
                    looking for a developer, researcher, or advocate for inclusive technology, let's explore 
                    how we can create meaningful impact together.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Available', value: 'Now', icon: 'CheckCircle' },
                    { label: 'Response Time', value: '24h', icon: 'Clock' },
                    { label: 'Location', value: 'Remote/US', icon: 'MapPin' },
                    { label: 'Timezone', value: 'EST', icon: 'Globe' }
                  ]?.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                    >
                      <Icon name={stat?.icon} size={24} className="text-green-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white font-heading">
                        {stat?.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat?.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button
                      variant="default"
                      size="lg"
                      iconName="Mail"
                      iconPosition="left"
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Download"
                    iconPosition="left"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-heading">
              How to Reach Me
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods?.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${method?.color} mb-4`}>
                    <Icon name={method?.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 font-heading">
                    {method?.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {method?.description}
                  </p>
                  <a
                    href={method?.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <span>{method?.action}</span>
                    <Icon name="ArrowRight" size={16} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-heading">
              Open to Opportunities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities?.map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 text-center hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-lg mb-4">
                    <Icon name={opportunity?.icon} size={24} className={opportunity?.color} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 font-heading">
                    {opportunity?.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {opportunity?.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

