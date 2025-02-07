import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Front-End');
  
  const skills = {
    'Front-End': [
      { name: 'JavaScript', icon: 'JS', color: '#F7DF1E', proficiency: 90 },
      { name: 'React.js', icon: 'React', color: '#61DAFB', proficiency: 85 },
      { name: 'Vite', icon: '⚡', color: '#646CFF', proficiency: 85 },
      { name: 'Next.js', icon: 'Next', color: '#000000', proficiency: 88 },
      { name: 'Tailwind CSS', icon: 'TW', color: '#38B2AC', proficiency: 90 },
      { name: 'CSS', icon: 'CSS', color: '#264DE4', proficiency: 85 },
      { name: 'Swiper.js', icon: 'SW', color: '#6332F6', proficiency: 80 },
      { name: 'Framer Motion', icon: 'FM', color: '#FF69B4', proficiency: 85 }
    ],
    'Backend': [
      { name: 'Node.js', icon: 'Node', color: '#339933', proficiency: 85 },
      { name: 'Express.js', icon: 'Ex', color: '#000000', proficiency: 85 },
      { name: 'MongoDB', icon: 'DB', color: '#47A248', proficiency: 80 }
    ]
  };

  const categories = Object.keys(skills);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="space-y-2 w-full max-w-xs">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`w-full text-center px-6 py-4 rounded-lg flex items-center justify-center gap-2 ${
                    activeCategory === category
                      ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
                  } transition-all duration-300`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category)}
                >
                  <span className="font-medium">{category}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeCategory === category ? 'rotate-90' : ''
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="md:w-3/4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills[activeCategory].map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500/30 rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500/30 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500/30 rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500/30 rounded-br-xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-700/50">
                        <span className="text-lg font-bold" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                          {skill.name}
                        </h3>
                        <div className="w-full bg-gray-700/50 h-1.5 rounded-full mt-2 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-pink-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                        <div className="mt-1 text-xs text-gray-400 text-right">
                          {skill.proficiency}%
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;