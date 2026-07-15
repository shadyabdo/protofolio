import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github, FolderGit, Sparkles } from 'lucide-react';
import Swal from 'sweetalert2';
import { PROJECTS } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');
  const { scrollY } = useScroll();

  // Subtle background drift for premium parallax layout
  const projectShiftY = useTransform(scrollY, [1200, 3200], [0, -90]);

  const categories = ['All', 'Web Development', 'Mobile App Design', 'UI/UX Design', 'Branding'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  // High aesthetic pastel tags rotating
  const getTagStyleClass = (idx: number) => {
    const styles = [
      'text-pink-600 bg-pastel-pink/20',
      'text-vibrant-blue bg-pastel-blue/20',
      'text-amber-700 bg-pastel-yellow/25',
      'text-emerald-700 bg-pastel-green/20'
    ];
    return styles[idx % styles.length];
  };

  const handleExploreWork = (project: typeof PROJECTS[0]) => {
    Swal.fire({
      title: `<div class="font-display text-2xl font-black text-neutral-dark tracking-tight">${project.title}</div>`,
      html: `
        <div class="font-sans text-left space-y-4 pt-1">
          <div class="relative aspect-video rounded-2xl overflow-hidden bg-warm-white border border-gray-100/80">
            <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div class="inline-block px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest text-pink-600 bg-pastel-pink/25 rounded-full">
            ${project.category}
          </div>
          <p class="text-gray-500 text-sm leading-relaxed">
            ${project.description}
          </p>
          <div class="flex flex-wrap gap-1.5 pt-2">
            ${project.tags.map(tag => `
              <span class="text-[9px] font-bold tracking-wider px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 rounded-lg">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: `<span class="flex items-center justify-center gap-2"><svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> View Demo</span>`,
      showCloseButton: true,
      closeButtonHtml: '<span class="text-neutral-dark font-sans font-normal text-xl">&times;</span>',
      customClass: {
        popup: 'rounded-[32px] border border-white/80 shadow-2xl p-6 bg-white max-w-lg',
        confirmButton: 'px-11 py-3 bg-neutral-dark hover:bg-zinc-800 text-white rounded-xl font-bold transition-all duration-300 text-xs uppercase tracking-widest shadow-md focus:outline-none focus:ring-0 flex items-center justify-center gap-2 cursor-pointer',
        actions: 'w-full mt-6 flex justify-center',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(project.demoUrl, '_blank');
      }
    });
  };

  const handleGithubClick = (project: typeof PROJECTS[0]) => {
    Swal.fire({
      title: `<div class="font-display text-xl font-black text-neutral-dark tracking-tight">GitHub Repository</div>`,
      html: `
        <div class="font-sans text-left space-y-5 pt-2">
          <p class="text-gray-400 text-xs leading-relaxed">Access the source code, check commits, or star the project on GitHub.</p>
          
          <!-- Link Display Box -->
          <div class="flex items-center gap-2.5 bg-gray-50 border border-gray-100 p-3.5 rounded-2xl w-full">
            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span class="text-xs font-mono text-gray-600 truncate select-all flex-1" id="swal-repo-link">${project.githubUrl}</span>
          </div>

          <!-- Action Row -->
          <div class="grid grid-cols-3 gap-3 pt-1">
            <!-- Copy Button -->
            <button id="swal-btn-copy" class="flex flex-col items-center justify-center gap-2 p-3.5 bg-pastel-blue/20 hover:bg-pastel-blue/40 border border-pastel-blue/30 rounded-2xl text-vibrant-blue transition-all duration-300 cursor-pointer group">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span class="text-[9px] font-bold uppercase tracking-wider">Copy</span>
            </button>

            <!-- Share Button -->
            <button id="swal-btn-share" class="flex flex-col items-center justify-center gap-2 p-3.5 bg-pastel-pink/20 hover:bg-pastel-pink/40 border border-pastel-pink/30 rounded-2xl text-pink-700 transition-all duration-300 cursor-pointer group">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 10.742l4.316-2.43M8.684 13.258l4.316 2.43M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-[9px] font-bold uppercase tracking-wider">Share</span>
            </button>

            <!-- Open Button -->
            <button id="swal-btn-open" class="flex flex-col items-center justify-center gap-2 p-3.5 bg-pastel-green/20 hover:bg-pastel-green/40 border border-pastel-green/30 rounded-2xl text-emerald-800 transition-all duration-300 cursor-pointer group">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span class="text-[9px] font-bold uppercase tracking-wider">Open</span>
            </button>
          </div>
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
      closeButtonHtml: '<span class="text-neutral-dark font-sans font-normal text-xl">&times;</span>',
      customClass: {
        popup: 'rounded-[32px] border border-white/80 shadow-2xl p-6 bg-white max-w-sm',
      },
      didOpen: () => {
        // Bind click handler for Copy Button
        const copyBtn = document.getElementById('swal-btn-copy');
        if (copyBtn) {
          copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(project.githubUrl).then(() => {
              const label = copyBtn.querySelector('span');
              if (label) label.innerText = 'Copied!';
              setTimeout(() => {
                if (label) label.innerText = 'Copy';
              }, 2000);
            });
          });
        }

        // Bind click handler for Share Button
        const shareBtn = document.getElementById('swal-btn-share');
        if (shareBtn) {
          shareBtn.addEventListener('click', () => {
            if (navigator.share) {
              navigator.share({
                title: project.title,
                text: project.description,
                url: project.githubUrl,
              }).catch(err => console.log(err));
            } else {
              // Fallback: Copy link and show toast
              navigator.clipboard.writeText(project.githubUrl).then(() => {
                const label = shareBtn.querySelector('span');
                if (label) label.innerText = 'Copied!';
                setTimeout(() => {
                  if (label) label.innerText = 'Share';
                }, 2000);
              });
            }
          });
        }

        // Bind click handler for Open Button
        const openBtn = document.getElementById('swal-btn-open');
        if (openBtn) {
          openBtn.addEventListener('click', () => {
            window.open(project.githubUrl, '_blank');
            Swal.close();
          });
        }
      }
    });
  };

  return (
    <section id="projects" className="py-28 bg-white relative overflow-hidden">
      {/* Background soft glowing lights, no direct boundaries */}
      <motion.div 
        style={{ y: projectShiftY }}
        className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-pastel-pink/15 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div 
        style={{ y: projectShiftY }}
        className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-pastel-blue/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with split modern typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-pink-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-3xs border border-white/25">
              <FolderGit className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
              <span>Creative Showcase</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-dark leading-none">
              Selected Works.
            </h2>
          </div>

          {/* Minimalist Filter Pill Tabs - No harsh outlines, pure organic overlays */}
          <div className="flex flex-wrap items-center gap-1.5 bg-gradient-to-r from-warm-white to-warm-peach/30 p-2 rounded-2xl border border-white/40 shadow-3xs w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-350 cursor-pointer ${
                  filter === cat
                    ? 'bg-neutral-dark text-white shadow-md'
                    : 'text-gray-500 hover:text-neutral-dark hover:bg-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45 }}
                key={project.id}
                className="group flex flex-col h-full bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-md rounded-[32px] border border-white/40 p-4.5 hover:shadow-xl hover:border-white/80 transition-all duration-300"
              >
                {/* Visual Image Framing with slow-glide zoom */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-6 bg-warm-white">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                  />
                  {/* Faint elegant overlay categorization badge */}
                  <span className="absolute top-3.5 left-3.5 bg-white/80 backdrop-blur-md text-neutral-dark font-sans text-[9px] font-bold tracking-widest uppercase px-3.5 py-2 rounded-full border border-white/30 shadow-3xs">
                    {project.category}
                  </span>
                </div>

                {/* Information Content Block */}
                <div className="flex flex-col flex-1 px-1.5">
                  <div className="flex items-center gap-1.5 text-[9px] text-gray-400 font-mono font-bold tracking-widest uppercase mb-2">
                    <span>CASE WORK</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>

                  <h3 className="font-display text-xl font-extrabold text-neutral-dark group-hover:text-brand-red transition-colors duration-300 mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Elegant borderless custom colored tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tag}
                        className={`font-sans text-[9px] font-bold tracking-wider px-3 py-1 rounded-lg border border-transparent select-none ${getTagStyleClass(tagIdx)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Premium Action trigger bar */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100/50">
                    <button
                      onClick={() => handleExploreWork(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-neutral-dark hover:text-brand-red transition-colors duration-200 uppercase tracking-widest cursor-pointer"
                    >
                      <span>Explore work</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleGithubClick(project)}
                      className="ml-auto text-gray-400 hover:text-neutral-dark transition-colors duration-200 cursor-pointer"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state container */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="font-mono text-sm">No selected works found in this section.</p>
          </div>
        )}

      </div>
    </section>
  );
}
