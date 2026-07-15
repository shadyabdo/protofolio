import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Find height of the header for perfect offset alignment
      const header = document.getElementById('header-nav');
      const offset = header ? header.offsetHeight : 70;
      
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'certificates', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for trigger timing

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-warm-white selection:bg-pastel-pink selection:text-neutral-dark scroll-smooth">
      {/* Slim Scroll Progress Bar using Framer Motion */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-neutral-dark origin-[0%] z-[9999]"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Header onScrollTo={scrollToSection} activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onScrollTo={scrollToSection} />
        <AboutAndSkills />
        <Services />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer Branding & Links */}
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}
