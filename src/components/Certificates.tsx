import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, Award, ShieldCheck, Calendar } from 'lucide-react';
import { CERTIFICATES } from '../data';

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll();

  // Fine-tuned background translation
  const certShiftY = useTransform(scrollY, [2000, 4200], [0, -60]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CERTIFICATES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === CERTIFICATES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certificates" className="py-28 bg-gradient-to-b from-white via-warm-peach/15 to-white relative overflow-hidden">
      {/* Background ambient color space */}
      <motion.div 
        style={{ y: certShiftY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-pastel-pink/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-pink-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-3xs border border-white/25">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
            <span>Validations</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-dark mb-4 leading-tight">
            Accreditations.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-sans max-w-lg">
            Verifiable digital milestones demonstrating a continuous devotion to modern web tech stack optimizations and advanced visual design architectures.
          </p>
        </div>

        {/* Carousel Slider Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Navigation Controls (Desktop) - Sleek, border-faded glass spheres */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16 z-10 hidden md:block">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-gray-600 hover:bg-white hover:text-neutral-dark hover:scale-105 transition-all duration-350 cursor-pointer shadow-3xs"
              aria-label="Previous certificate"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 z-10 hidden md:block">
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-gray-600 hover:bg-white hover:text-neutral-dark hover:scale-105 transition-all duration-350 cursor-pointer shadow-3xs"
              aria-label="Next certificate"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Core Slider Frame (High transparency glass container) */}
          <div className="bg-white/40 backdrop-blur-xl rounded-[36px] border border-white/45 p-6 md:p-11 shadow-lg overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Certificate Frame */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xs border border-white/50 bg-gradient-to-tr from-pastel-pink/10 to-pastel-blue/10 p-2.5">
                    <img
                      src={CERTIFICATES[currentIndex].imageUrl}
                      alt={CERTIFICATES[currentIndex].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    {/* Floating watermarked icon */}
                    <div className="absolute inset-0 bg-neutral-dark/2 flex items-center justify-center pointer-events-none">
                      <Award className="w-12 h-12 opacity-5 text-neutral-dark animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Meta details */}
                <div className="md:col-span-7 flex flex-col items-start">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pastel-yellow/60 text-amber-800 text-[9px] font-sans font-bold tracking-wider uppercase mb-4 border border-yellow-200/20 shadow-3xs">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>Verified Credential</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-neutral-dark leading-snug mb-4">
                    {CERTIFICATES[currentIndex].title}
                  </h3>

                  <div className="space-y-3.5 mb-6 font-sans">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="font-bold text-neutral-dark">Academic Issuer:</span>
                      <span>{CERTIFICATES[currentIndex].issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                      <Calendar className="w-4 h-4 text-gray-300" />
                      <span>Release Date: {CERTIFICATES[currentIndex].date}</span>
                    </div>
                  </div>

                  {/* Faded Verification block */}
                  <div className="w-full bg-white/50 backdrop-blur-md rounded-2xl p-4.5 border border-white/30 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 absolute"></span>
                    <span className="text-[11px] font-mono font-bold text-gray-400">STATUS ID: HASSAN-AUTH-2026-{CERTIFICATES[currentIndex].id.toUpperCase()}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (Mobile) */}
          <div className="flex items-center justify-between mt-6 md:hidden">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-gray-600 cursor-pointer shadow-3xs"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Pagination dots indicators */}
            <div className="flex items-center gap-1.5">
              {CERTIFICATES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-5 bg-neutral-dark' : 'w-1.5 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-gray-600 cursor-pointer shadow-3xs"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pagination dots (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-2 mt-8">
            {CERTIFICATES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-neutral-dark' : 'w-2 bg-gray-300 hover:bg-gray-450'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
