import React from 'react';
import { motion } from 'motion/react';
import { 
  User, Code2, Heart, Cpu, Compass, Milestone, ArrowUpRight,
  Code, Palette, Atom, Layers, Brush, Wind, MessageSquare, Users, Lightbulb, RefreshCw, Braces
} from 'lucide-react';
import { HERO_DATA, SKILLS } from '../data';

export default function AboutAndSkills() {
  // Helper to map skill names to specialized Lucide icons
  const getSkillIcon = (name: string, category: string) => {
    const normName = name.toLowerCase();
    
    if (normName.includes('html')) return <Code className="w-4 h-4 text-brand-red transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('css') && !normName.includes('tailwind')) return <Palette className="w-4 h-4 text-blue-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('javascript')) return <Braces className="w-4 h-4 text-amber-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('react')) return <Atom className="w-4 h-4 text-cyan-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('figma')) return <Layers className="w-4 h-4 text-purple-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('adobe')) return <Brush className="w-4 h-4 text-pink-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('typescript')) return <Code2 className="w-4 h-4 text-indigo-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('tailwind')) return <Wind className="w-4 h-4 text-sky-500 transition-transform group-hover:scale-110 duration-300" />;
    
    // Soft skills
    if (normName.includes('communication')) return <MessageSquare className="w-4 h-4 text-teal-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('teamwork')) return <Users className="w-4 h-4 text-emerald-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('problem')) return <Lightbulb className="w-4 h-4 text-orange-500 transition-transform group-hover:scale-110 duration-300" />;
    if (normName.includes('adaptability')) return <RefreshCw className="w-4 h-4 text-violet-500 transition-transform group-hover:scale-110 duration-300" />;
    
    // Fallback
    return category === 'tech' ? <Cpu className="w-4 h-4 text-gray-400" /> : <Compass className="w-4 h-4 text-gray-400" />;
  };

  const techSkills = SKILLS.filter(s => s.category === 'tech');
  const softSkills = SKILLS.filter(s => s.category === 'soft');

  // Multiplied to ensure seamless looping without any gaps inside the marquees
  const techMarqueeList = [...techSkills, ...techSkills, ...techSkills, ...techSkills, ...techSkills, ...techSkills];
  const softMarqueeList = [...softSkills, ...softSkills, ...softSkills, ...softSkills, ...softSkills, ...softSkills];

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Absolute Ambient Soft Glow Orbs - No heavy borders, pure color depth */}
      <div 
        className="absolute top-1/4 right-[-10%] w-[550px] h-[550px] bg-pastel-yellow/30 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div 
        className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] bg-pastel-pink/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Modern Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Narrative with subtle premium details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Minimalist Soft Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-pink-700 text-xs font-bold uppercase tracking-wider mb-6 w-fit shadow-3xs border border-white/20">
              <User className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>Personal Essence</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-dark mb-6 leading-tight">
              About my <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-action-orange">
                Creative Spirit.
              </span>
            </h2>

            {/* Narrative Content Block */}
            <div className="min-h-[220px]">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-6 text-gray-600 leading-relaxed text-base"
              >
                <p className="text-xl text-neutral-dark font-medium font-display leading-normal">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p>
                  {HERO_DATA.bio}
                </p>
                <p>
                  I approach digital spaces as canvases for living interactions. By pairing smooth React infrastructures with custom vector aesthetics, I strive to eliminate friction and spark joy in every scroll, hover, and click.
                </p>
              </motion.div>
            </div>

            {/* Highlight stats indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200/40">
              <div>
                <h4 className="font-display text-2xl font-extrabold text-neutral-dark">3+ Years</h4>
                <p className="text-xs text-gray-400 font-mono mt-1 uppercase font-semibold">Engineering</p>
              </div>
              <div>
                <h4 className="font-display text-2xl font-extrabold text-neutral-dark">20+ Done</h4>
                <p className="text-xs text-gray-400 font-mono mt-1 uppercase font-semibold">Portfolios</p>
              </div>
              <div>
                <h4 className="font-display text-2xl font-extrabold text-neutral-dark">Remote</h4>
                <p className="text-xs text-gray-400 font-mono mt-1 uppercase font-semibold">Worldwide</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Interactive News Tickers Section */}
          <div id="skills" className="lg:col-span-6 flex flex-col justify-center scroll-mt-28">
            <div className="bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-xs space-y-10 relative overflow-hidden">
              
              {/* Subtle background glow highlights */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-pastel-pink/15 blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-pastel-blue/15 blur-2xl pointer-events-none"></div>

              {/* Title Header */}
              <div>
                <h3 className="font-display text-2xl font-extrabold text-neutral-dark mb-2">
                  My Expertise Ticker
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                  Continuous horizontal stream showcasing technologies, design systems, and professional philosophies that drive my process.
                </p>
              </div>

              {/* NEWS TICKER 1: TECH STACK (Scrolling Left) */}
              <div className="space-y-3.5 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-brand-red uppercase">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Tech Stack Stream</span>
                  </div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Left Flow</span>
                </div>
                
                {/* Scroll track with extremely subtle visual boundary */}
                <div className="w-full overflow-hidden py-3 bg-gradient-to-r from-warm-white/0 via-white/80 to-warm-white/0 rounded-2xl relative select-none">
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="animate-marquee flex gap-3">
                    {techMarqueeList.map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-5 py-3 rounded-2xl bg-white text-xs font-bold font-sans tracking-wide shadow-3xs hover:shadow-sm border border-neutral-dark/[0.03] transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap group hover:scale-103 hover:border-brand-red"
                      >
                        {getSkillIcon(skill.name, 'tech')}
                        <span className="text-neutral-dark group-hover:text-brand-red transition-colors">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* NEWS TICKER 2: SOFT SKILLS (Scrolling Right - Reverse) */}
              <div className="space-y-3.5 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-vibrant-blue uppercase">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Professional Strengths</span>
                  </div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Right Flow</span>
                </div>
                
                {/* Scroll track */}
                <div className="w-full overflow-hidden py-3 bg-gradient-to-r from-warm-white/0 via-white/80 to-warm-white/0 rounded-2xl relative select-none">
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="animate-marquee-reverse flex gap-3">
                    {softMarqueeList.map((skill, idx) => (
                      <div
                        key={idx}
                        className="px-5 py-3 rounded-2xl bg-white text-xs font-bold font-sans tracking-wide shadow-3xs hover:shadow-sm border border-neutral-dark/[0.03] transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap group hover:scale-103 hover:border-vibrant-blue"
                      >
                        {getSkillIcon(skill.name, 'soft')}
                        <span className="text-neutral-dark group-hover:text-vibrant-blue transition-colors">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mini call-out message showing your core goal */}
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-5 border border-white flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pastel-pink/60 flex items-center justify-center text-pink-600 border border-white shadow-3xs shrink-0 font-bold">
                  ⚡
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-dark mb-1">Philosophy Integration</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">
                    Every technology I choose and soft skill I apply is centered around building responsive interfaces that drive engagement and business value.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
