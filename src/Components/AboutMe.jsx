import React, { useState } from 'react';
import { 
  FaUser, 
  FaBullseye, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaLaptopCode,
  FaPalette,
  FaVolleyballBall
} from 'react-icons/fa';
import myPhoto from '../assets/My-Photo/image(15).png'
const AboutMe = () => {
  const [activeView, setActiveView] = useState('profile');

  const ProfileContent = () => (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <FaUser className="text-pink-600 mr-3" />
        <h3 className="text-2xl text-pink-600 font-bold">Who Am I</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">
      Hi! I'm Atikur Rahman, a passionate Full Stack Developer with a strong background in building scalable and efficient web applications.
        My journey into programming started with a deep curiosity about how websites function, leading me to explore front-end and back-end technologies.
        I specialize in JavaScript frameworks like React and Node.js, crafting dynamic and user-friendly applications.
      </p>
      <p className="text-gray-300 leading-relaxed">
      I love working on innovative web solutions, especially projects that challenge me to think critically and solve real-world problems.
      Beyond coding, I enjoy photography, playing chess, and exploring new tech trends.
      </p>
       
      <div className="flex space-x-4 mt-6">
        <a href="#" className="text-pink-600 hover:text-pink-400 transition-colors">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="text-pink-600 hover:text-pink-400 transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="#" className="text-pink-600 hover:text-pink-400 transition-colors">
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );

  const InterestsContent = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <FaBullseye className="text-pink-600 mr-3" />
        <h3 className="text-2xl text-pink-600 font-bold">Passions & Interests</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <FaLaptopCode className="text-pink-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-xl text-gray-200 mb-2">Programming</h4>
            <p className="text-gray-300">Specializing in full-stack JavaScript development, with a focus on building scalable web applications and exploring new technologies in the React ecosystem.</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaVolleyballBall className="text-pink-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-xl text-gray-200 mb-2">Sports</h4>
            <p className="text-gray-300">Active volleyball player in local leagues, believing that team sports enhance collaboration skills that translate well to software development teams.</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaPalette className="text-pink-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-xl text-gray-200 mb-2">Art & Creativity</h4>
            <p className="text-gray-300">Passionate about digital art and watercolor painting, using these creative outlets to maintain a balanced perspective in problem-solving.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-[#0c0c1e] rounded-3xl overflow-hidden grid md:grid-cols-[40%_60%] shadow-2xl">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={myPhoto}
            alt="Atikur Rahman"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="p-10 bg-[#1a1a33] text-white">
          <h2 className="text-4xl font-bold text-pink-600 mb-2">
          Atikur Rahman
          </h2>
          <h3 className="text-2xl text-gray-300 mb-6">
            Full Stack Developer
          </h3>
          <div className="flex mb-6 border-b border-gray-800">
            {['profile', 'interests'].map(section => (
              <button
                key={section}
                onClick={() => setActiveView(section)}
                className={`px-4 py-2 ${
                  activeView === section 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="min-h-[300px]">
            {activeView === 'profile' && <ProfileContent />}
            {activeView === 'interests' && <InterestsContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;