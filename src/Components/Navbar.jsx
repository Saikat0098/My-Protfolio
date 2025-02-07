import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/', isDropdown: true },
    { title: 'About', path: '/AboutMe' },
    { title: 'Skills', path: '/services', isDropdown: true },
    { title: 'Project', path: '/project', isDropdown: true },
    { title: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, url: '#' },
    { icon: <Linkedin size={20} />, url: '#' },
    { icon: <Twitter size={20} />, url: '#' },
    { icon: <Facebook size={20} />, url: '#' }
  ];

  const contactInfo = [
    { icon: <Phone size={20} />, text: '+1 234 567 890', label: 'Phone' },
    { icon: <Mail size={20} />, text: 'contact@reeni.com', label: 'Email' },
    { icon: <MapPin size={20} />, text: '123 Business Street, NY 10001', label: 'Address' }
  ];

  return (
    <div className='   '>
       <div className="relative  ">
      {/* Main Content Wrapper */}
      <div className={`transition-all duration-300 ${isDrawerOpen && 'blur-sm'  }`}>
        <nav className="  text-white py-4 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex">
                <svg className="w-8 h-8 text-pink-600" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                </svg>
                <span className="ml-2 text-xl font-bold">Saikat</span>
              </div>

              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex flex-grow justify-center">
                <div className="flex space-x-8">
                  {menuItems.map((item) => (
                    <div key={item.title} className="relative group">
                      <a
                        href={item.path}
                        className={`hover:text-pink-600 ${
                          item.title === 'Home' ? 'text-pink-600' : ''
                        }`}
                      >
                        {item.title}
                        {item.isDropdown && (
                          <span className="ml-1 inline-block"></span>
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links and Hamburger - End aligned */}
              <div className="hidden lg:flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
                <button
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  className="ml-4 p-2 hover:text-pink-600 transition-colors"
                >
                  <Menu size={24} />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-4">
                {/* Social Links - Visible on medium screens */}
                <div className="hidden md:flex items-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="hover:text-pink-600 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-pink-600"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div 
              className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}
            >
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="block py-2 hover:text-pink-600"
                >
                  {item.title}
                </a>
              ))}
              
              {/* Social Links - Visible on small screens */}
              <div className="md:hidden flex items-center space-x-4 py-4 border-t border-gray-700 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Contact Info Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-blue transform transition-transform duration-300 ease-in-out z-50 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-pink-600"
          >
            <X size={24} />
          </button>
          
          <div className="mt-12 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center text-gray-300 hover:text-pink-600 transition-colors">
                <span className="mr-4">{info.icon}</span>
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-white">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
    </div>
  );
};

export default Navbar;