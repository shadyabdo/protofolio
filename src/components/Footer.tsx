import React from 'react';
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Mail, 
  Link2, 
  User, 
  Phone, 
  Code, 
  ArrowUp, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { HERO_DATA } from '../data';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8b2d7] text-neutral-dark pt-24 pb-8 relative font-sans border-t border-white/10 mt-16">
      {/* Wave shape divider at the very top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[98%] pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-full h-[80px] text-[#f8b2d7] fill-current">
          <path d="M0,96 C180,128 360,160 540,144 C720,128 900,64 1080,48 C1260,32 1440,64 1440,64 L1440,320 L0,320 Z"></path>
        </svg>
      </div>

      {/* Subtle Grid overlay background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-25"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid Row (matching bootstrap layout columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-dark/10">
          
          {/* Col 1: Company / Name Info */}
          <div className="md:col-span-3 space-y-4">
            <button 
              onClick={() => onScrollTo('home')}
              className="font-display text-2xl font-extrabold tracking-widest text-neutral-dark hover:text-neutral-dark/85 transition-colors cursor-pointer uppercase text-left"
            >
              IAMHASSAN
            </button>
            <p className="text-neutral-dark/80 text-sm leading-relaxed font-medium max-w-xs">
              Frontend Developer passionate about building smart, beautiful web experiences that make a difference. Consistency and continuous learning create real expertise.
            </p>
          </div>

          {/* Col 2: Navigation Products/Links */}
          <div className="md:col-span-2 space-y-4 md:pl-4">
            <h6 className="text-xs font-bold text-neutral-dark/60 uppercase tracking-wider font-mono">
              Products
            </h6>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'UI/UX Design', id: 'services' },
                { label: 'Web Applications', id: 'projects' },
                { label: 'Branding Systems', id: 'services' },
                { label: 'Responsive Sites', id: 'projects' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onScrollTo(item.id)}
                  className="text-sm text-neutral-dark/75 hover:text-neutral-dark font-semibold transition-colors cursor-pointer text-left hover:translate-x-0.5 transform duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h6 className="text-xs font-bold text-neutral-dark/60 uppercase tracking-wider font-mono">
              Quick Links
            </h6>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Certificates', id: 'certificates' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onScrollTo(item.id)}
                  className="text-sm text-neutral-dark/75 hover:text-neutral-dark font-semibold transition-colors cursor-pointer text-left hover:translate-x-0.5 transform duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Contact details */}
          <div className="md:col-span-3 space-y-4">
            <h6 className="text-xs font-bold text-neutral-dark/60 uppercase tracking-wider font-mono">
              Contact
            </h6>
            <div className="space-y-2 text-sm text-neutral-dark/80 font-medium">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43acff]"></span>
                <span>Distxcoe, Graon</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43acff]"></span>
                <a href="#" className="hover:underline font-semibold text-neutral-dark">
                  za9hl00l@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43acff]"></span>
                <a href="#" className="hover:underline font-semibold text-neutral-dark">
                  +201210378575
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43acff]"></span>
                <a href="#" className="hover:underline font-semibold text-neutral-dark">
                  linkedin / hassan-elsaid
                </a>
              </p>
            </div>
          </div>

          {/* Col 5: Follow Us */}
          <div className="md:col-span-2 space-y-4">
            <h6 className="text-xs font-bold text-neutral-dark/60 uppercase tracking-wider font-mono">
              Follow Us
            </h6>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
                { icon: <Twitter className="w-4 h-4" />, href: HERO_DATA.socials.twitter, label: 'Twitter' },
                { icon: <Instagram className="w-4 h-4" />, href: HERO_DATA.socials.instagram, label: 'Instagram' },
                { icon: <Linkedin className="w-4 h-4" />, href: HERO_DATA.socials.linkedin, label: 'LinkedIn' },
                { icon: <Github className="w-4 h-4" />, href: HERO_DATA.socials.github, label: 'GitHub' },
                { icon: <MessageCircle className="w-4 h-4" />, href: '#', label: 'WhatsApp' }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="w-9 h-9 rounded-full bg-[#89d4fe] hover:bg-neutral-dark hover:text-white text-neutral-dark flex items-center justify-center transition-all duration-300 shadow-3xs hover:-translate-y-0.5"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Center Quote Section */}
        <div className="relative py-8 flex flex-col items-center justify-center text-center">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-dark/10 z-0"></div>
          
          <div className="relative z-10 w-9 h-9 rounded-full bg-neutral-dark text-white flex items-center justify-center shadow-md border-2 border-[#f8b2d7]">
            <Code className="w-3.5 h-3.5" />
          </div>

          <div className="relative z-10 mt-5 max-w-xl px-4">
            <blockquote className="text-lg md:text-xl font-bold tracking-tight text-neutral-dark leading-snug">
              Consistency and continuous learning create <span className="text-[#43acff]">real expertise.</span>
            </blockquote>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 mt-2 border-t border-neutral-dark/10 relative flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-neutral-dark/70 font-mono text-center">
            &copy; {currentYear} Hassan Elsaid. All rights reserved.
          </p>

          <button
            onClick={() => onScrollTo('home')}
            className="sm:absolute sm:right-0 w-10 h-10 rounded-full bg-[#43acff] hover:bg-[#1894ff] text-white flex items-center justify-center transition-all duration-350 cursor-pointer shadow-3xs hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

