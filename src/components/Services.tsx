import React from 'react';
import * as Icons from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SERVICES } from '../data';

export default function Services() {
  const { scrollY } = useScroll();

  // Micro parallax adjustments for background atmospheric elements
  const bgShiftY = useTransform(scrollY, [600, 2200], [0, -50]);

  const getIcon = (name: string, className: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.HelpCircle className={`${className}`} />;
    return <IconComponent className={`${className}`} />;
  };

  // Maps service IDs to gorgeous glowing states using the custom colors
  const getServiceStyles = (id: string) => {
    switch (id) {
      case 'ui-ux':
        return {
          cardBg: 'from-pastel-pink/15 to-white/40 hover:bg-white/80',
          glowHover: 'hover:shadow-[0_25px_50px_-20px_rgba(251,207,232,0.5)] hover:border-pink-300/40',
          iconBg: 'bg-pastel-pink text-pink-700',
          tagBg: 'bg-pastel-pink text-pink-700',
          iconColor: 'text-pink-600'
        };
      case 'web-dev':
        return {
          cardBg: 'from-pastel-blue/15 to-white/40 hover:bg-white/80',
          glowHover: 'hover:shadow-[0_25px_50px_-20px_rgba(186,230,253,0.5)] hover:border-sky-300/40',
          iconBg: 'bg-pastel-blue text-vibrant-blue',
          tagBg: 'bg-pastel-blue text-vibrant-blue',
          iconColor: 'text-vibrant-blue'
        };
      case 'mobile-app':
        return {
          cardBg: 'from-pastel-green/15 to-white/40 hover:bg-white/80',
          glowHover: 'hover:shadow-[0_25px_50px_-20px_rgba(220,252,231,0.5)] hover:border-emerald-300/40',
          iconBg: 'bg-pastel-green text-emerald-800',
          tagBg: 'bg-pastel-green text-emerald-800',
          iconColor: 'text-emerald-700'
        };
      case 'branding':
        return {
          cardBg: 'from-pastel-yellow/15 to-white/40 hover:bg-white/80',
          glowHover: 'hover:shadow-[0_25px_50px_-20px_rgba(254,249,195,0.5)] hover:border-yellow-300/40',
          iconBg: 'bg-pastel-yellow text-amber-800',
          tagBg: 'bg-pastel-yellow text-amber-800',
          iconColor: 'text-amber-700'
        };
      case 'prototyping':
        return {
          cardBg: 'from-pastel-pink/15 to-white/40 hover:bg-white/80',
          glowHover: 'hover:shadow-[0_25px_50px_-20px_rgba(251,207,232,0.5)] hover:border-pink-300/40',
          iconBg: 'bg-pastel-pink text-pink-700',
          tagBg: 'bg-pastel-pink text-pink-700',
          iconColor: 'text-pink-600'
        };
      default:
        return {
          cardBg: 'from-pastel-blue/15 to-white/40 hover:bg-white/80',
          glowHover: 'hover:shadow-[0_25px_50px_-20px_rgba(186,230,253,0.5)] hover:border-sky-300/40',
          iconBg: 'bg-pastel-blue text-vibrant-blue',
          tagBg: 'bg-pastel-blue text-vibrant-blue',
          iconColor: 'text-vibrant-blue'
        };
    }
  };

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-warm-white via-white to-warm-white relative overflow-hidden">
      {/* Dynamic background lights */}
      <motion.div 
        style={{ y: bgShiftY }}
        className="absolute top-12 left-[-10%] w-[400px] h-[400px] bg-pastel-blue/15 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div 
        style={{ y: bgShiftY }}
        className="absolute bottom-12 right-[-10%] w-[450px] h-[450px] bg-pastel-pink/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-vibrant-blue text-xs font-bold uppercase tracking-wider mb-4 shadow-3xs border border-white/25">
            <Icons.Layers className="w-3.5 h-3.5 text-vibrant-blue animate-pulse" />
            <span>Offerings</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-dark mb-4 leading-tight">
            Specialized Capabilities.
          </h2>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-sans max-w-lg">
            I offer tailored visual and technological workflows that bridge complex logic with intuitive designs, with absolutely no visual friction.
          </p>
        </div>

        {/* Bento Card Grid (3-columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const styles = getServiceStyles(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`rounded-3xl p-8 border border-white/45 bg-gradient-to-br ${styles.cardBg} shadow-3xs hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between group cursor-pointer ${styles.glowHover}`}
              >
                <div>
                  {/* Glowing custom light wrapper */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-white shadow-3xs mb-8 group-hover:scale-105 transition-all duration-300`}>
                    {getIcon(service.iconName, `w-6 h-6 ${styles.iconColor}`)}
                  </div>

                  <h3 className="font-display text-xl font-extrabold text-neutral-dark mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Micro interaction link line */}
                <div className="flex items-center gap-2 text-[10px] font-bold font-sans uppercase tracking-widest group-hover:gap-3 transition-all duration-300 w-fit text-neutral-dark pt-4">
                  <span>Explore detail</span>
                  <Icons.ArrowRight className={`w-4 h-4 ${styles.iconColor} transition-transform group-hover:translate-x-0.5`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Capsule Bar showing categories at high aesthetic value */}
        <div className="mt-20 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl py-4.5 px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3.5 shadow-3xs max-w-4xl mx-auto">
          <span className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">Aesthetic Frameworks:</span>
          {SERVICES.map((service) => (
            <div key={service.id} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-dark/30"></span>
              <span className="text-xs font-bold text-gray-600">{service.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
