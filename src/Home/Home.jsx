import React from 'react';
import background from '../assets/Banner/banner-1.jpg';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';
import { Outlet } from 'react-router-dom';
import SkillsSection from '../Components/SkillsSection';
import ProjectsSection from '../Components/ProjectsSection';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div >
            <div className='overflow-hidden' style={{
                backgroundImage: `
                    linear-gradient(to right, 
                        rgba(0, 0, 0, 0.8) 0%, 
                        rgba(0, 0, 0, 0.6) 50%, 
                        rgba(0, 0, 0, 0.8) 100%),
                    url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                width: '100%'
            }}>
                <Navbar></Navbar>
           
                <HeroSection></HeroSection>
              
            </div>
            <AboutMe></AboutMe>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;