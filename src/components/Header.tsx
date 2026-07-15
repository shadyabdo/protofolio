import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollTo, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      id="header-nav"
      className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-500 ease-out"
    >
      {/* 
        The outer header container uses pointer-events-none so users can click on cards/links behind empty header margins.
        The inner navigation block has pointer-events-auto to receive clicks and interaction events.
      */}
      <div className="w-full flex justify-center py-4 md:py-6 px-4 sm:px-6 transition-all duration-300 ease-out">
        <div
          className={`w-full pointer-events-auto border flex items-center justify-between px-6 py-3 transition-all duration-300 ease-out ${
            scrolled 
              ? 'w-[90%] max-w-[1024px] translate-y-2 rounded-3xl bg-white/75 backdrop-blur-md border-white/60 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.03),0_10px_10px_-5px_rgba(0,0,0,0.01),inset_0_1px_1px_rgba(255,255,255,0.6)]' 
              : 'w-full max-w-[1280px] translate-y-0 rounded-none bg-transparent border-transparent backdrop-blur-none'
          }`}
        >
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="font-display text-sm md:text-base font-extrabold tracking-tight text-neutral-dark cursor-pointer group flex items-center gap-3.5"
          >
            <div className="relative flex items-center justify-center">
              {/* Animated gradient accent ring behind the logo icon */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pastel-pink via-[#43acff] to-[#89d4fe] opacity-0 group-hover:opacity-100 group-hover:rotate-180 duration-700 -m-1 blur-3xs transition-all" />
              <span className="relative w-9 h-9 rounded-full bg-neutral-dark text-white flex items-center justify-center text-[11px] font-mono tracking-tighter font-black shadow-md border border-neutral-dark/15">
                HE
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-neutral-dark text-xs md:text-sm tracking-tight group-hover:text-[#43acff] transition-colors duration-300">
                Hassan Elsaid
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 font-semibold leading-none mt-0.5">
                Creative Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Nav with Snappy and Lightweight Active background */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-dark/5 p-1 rounded-2xl border border-neutral-dark/5 shadow-2xs relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-[10px] font-bold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer uppercase tracking-wider ${
                    isActive 
                      ? 'bg-neutral-dark text-white shadow-xs' 
                      : 'text-gray-500 hover:text-neutral-dark hover:bg-neutral-dark/5'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Premium Call to Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="group relative flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider bg-neutral-dark text-white px-5 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-neutral-dark/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#43acff]/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#89d4fe]" />
              </span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-dark hover:bg-neutral-dark/5 transition-colors cursor-pointer border border-neutral-dark/10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Sliding Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-lg border border-neutral-dark/15 rounded-3xl overflow-hidden shadow-xl pointer-events-auto z-50"
          >
            <div className="p-5 flex flex-col gap-2 font-sans">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-neutral-dark text-white'
                        : 'text-gray-500 hover:bg-neutral-dark/5 hover:text-neutral-dark'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#43acff]" />}
                  </motion.button>
                );
              })}
              
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.04 }}
                onClick={() => handleNavClick('contact')}
                className="mt-2 w-full flex items-center justify-center gap-2 font-bold uppercase tracking-wider bg-neutral-dark text-white py-3.5 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer text-xs shadow-sm"
              >
                <span>Hire Me</span>
                <Send className="w-3.5 h-3.5 text-pastel-pink" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
