import React, { useState } from 'react';
import { FaGithub, FaGlobe, FaTimesCircle } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import project1 from '../assets/projectPhoto/project1.png'
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "TechVerse - E-commerce Platform",
      image: 'https://i.ibb.co.com/Kp4XkXRH/project1.png',
      shortDesc: "A full-stack e-commerce platform for tech products",
      fullDesc: "TechVerse is a comprehensive e-commerce solution built with modern technologies. It features real-time inventory management, secure payment processing, and a responsive design that works seamlessly across all devices.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      liveLink: "https://jolly-phoenix-7432d6.netlify.app/",
      github: "https://github.com/yourusername/techverse",
      challenges: [
        "Implementing real-time inventory tracking across multiple servers",
        "Optimizing database queries for large product catalogs",
        "Building a secure payment processing system"
      ],
      futureGoals: [
        "Add AI-powered product recommendations",
        "Implement AR product visualization",
        "Develop a mobile app version"
      ]
    },
    {
      id: 2,
      name: "TaskMaster Pro",
      image: "https://i.ibb.co.com/DHGhR5Z0/project2.png",
      shortDesc: "AI-powered project management tool",
      fullDesc: "TaskMaster Pro revolutionizes project management by incorporating AI to help prioritize tasks, predict project timelines, and suggest resource allocation. It's designed for teams of all sizes.",
      tech: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "TensorFlow"],
      liveLink: "https://verdant-bonbon-417997.netlify.app/",
      github: "https://github.com/yourusername/taskmaster",
      challenges: [
        "Developing accurate AI prediction models",
        "Implementing real-time collaboration features",
        "Optimizing performance for large projects"
      ],
      futureGoals: [
        "Enhance AI capabilities",
        "Add Gantt chart visualization",
        "Implement resource forecasting"
      ]
    },
    {
      id: 3,
      name: "HealthHub",
      image: "https://i.ibb.co.com/fYq3rt7W/project3.png",
      shortDesc: "Telemedicine and health tracking platform",
      fullDesc: "HealthHub connects patients with healthcare providers through secure video consultations while tracking vital health metrics. It includes features for appointment scheduling, prescription management, and health analytics.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC", "Chart.js"],
      liveLink: "https://vocal-cuchufli-88c3e4.netlify.app/",
      github: "https://github.com/yourusername/healthhub",
      challenges: [
        "Ensuring HIPAA compliance and data security",
        "Implementing stable video conferencing",
        "Building an intuitive user interface for all age groups"
      ],
      futureGoals: [
        "Add IoT device integration",
        "Implement AI-powered health insights",
        "Develop emergency alert system"
      ]
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-purple-900/40 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.shortDesc}</p>
        <button
          onClick={() => setSelectedProject(project)}
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          View Details
          <BiChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-purple-950/90 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-purple-950/90 p-6 border-b border-purple-800 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white">{project.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimesCircle size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-64 object-cover rounded-xl"
          />
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-pink-500">Description</h3>
            <p className="text-gray-300">{project.fullDesc}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-pink-500">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-purple-900/50 text-white px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FaGlobe /> Live Demo
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-800 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-pink-500">Challenges Faced</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-pink-500">Future Plans</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.futureGoals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent work that showcases my skills in full-stack development,
            problem-solving, and creating user-centered applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;