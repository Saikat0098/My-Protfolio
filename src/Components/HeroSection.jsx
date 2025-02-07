import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { Github, Linkedin, Twitter, Facebook, Mail, Download } from 'lucide-react';
import myPhoto from '../assets/My-Photo/my-photo.png'

const PortfolioLanding = () => {
  const typedRef = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: ['Full Stack Developer', 'MERN Specialist', 'UI/UX Designer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  const socialLinks = [
    { Icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { Icon: Facebook, href: "https://facebook.com/yourusername", label: "Facebook" }
  ];

  // Function to handle email click
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'sakatislam7960@gmail.com';
    const subject = encodeURIComponent('Portfolio Contact Request');
    const body = encodeURIComponent('Hello, I am reaching out regarding...');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 lg:py-16">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-purple-500/10 rounded-full text-purple-300 text-sm font-medium"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Welcome to my portfolio
            </motion.div>
            
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                I'm Atikur Rahman
              </motion.h1>
              
              <motion.div
                className="text-xl sm:text-2xl lg:text-3xl text-purple-400 font-medium min-h-[40px]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span ref={typedRef}></span>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Crafting digital experiences through clean code and innovative solutions. 
              Specialized in building scalable web applications with modern technologies.
            </motion.p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.a 
                href="/https://drive.google.com/file/d/1rvGQqyifIFgKyQTORQoW5G1zA-ILUCPo/view?usp=drive_link"
                download="Atikur-Rahman-Resume.pdf"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 shadow-lg shadow-purple-500/20 transition-all cursor-pointer z-10 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
                <Download className="w-4 h-4" />
              </motion.a>

              <motion.button 
                onClick={handleEmailClick}
                className="border border-purple-500/30 hover:border-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-all cursor-pointer z-10 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </motion.button>
            </div>
            
            {/* Rest of the component remains the same */}
            <div className="flex items-center gap-1">
              <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 w-full"></div>
              <span className="text-gray-400 px-4 whitespace-nowrap text-sm sm:text-base">Connect</span>
              <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 w-full"></div>
            </div>

            <motion.div 
              className="flex justify-center lg:justify-start gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-purple-400 transition-colors z-10"
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative h-[24rem] sm:h-[28rem] lg:h-[32rem] mt-8 lg:mt-0">
            {/* Stats */}
            <motion.div
              className="absolute top-8 left-0 bg-purple-950/80 p-3 sm:p-4 rounded-xl backdrop-blur-sm border border-purple-500/10 z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.p 
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                100+
              </motion.p>
              <p className="text-gray-400 text-xs sm:text-sm">Satisfied Clients</p>
            </motion.div>
            
            <motion.div
              className="absolute bottom-0 left-8 sm:left-12 bg-purple-950/80 p-3 sm:p-4 rounded-xl backdrop-blur-sm border border-purple-500/10 z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.p 
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                5+
              </motion.p>
              <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
            </motion.div>

            <motion.div
              className="absolute top-24 sm:top-32 right-0 bg-purple-950/80 p-3 sm:p-4 rounded-xl backdrop-blur-sm border border-purple-500/10 z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.p 
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                50+
              </motion.p>
              <p className="text-gray-400 text-xs sm:text-sm">Projects Completed</p>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl"></div>
                <img
                  src={myPhoto}
                  alt="Profile"
                  className="relative z-0 w-full h-full rounded-full object-cover border-4 border-purple-500/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLanding;