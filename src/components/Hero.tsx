import React from 'react';
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  Award, 
  FolderGit, 
  Users, 
  ArrowDown, 
  User, 
  MoveRight,
  Code2,
  Cpu,
  FileText
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HERO_DATA } from '../data';
import Swal from 'sweetalert2';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const { scrollY } = useScroll();

  // Parallax effects for a sense of layered three-dimensional depth
  const blob1Y = useTransform(scrollY, [0, 1000], [0, -120]);
  const blob2Y = useTransform(scrollY, [0, 1000], [0, 100]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 40]);
  const avatarY = useTransform(scrollY, [0, 1000], [0, -60]);

  const handleDownloadCV = () => {
    const cvText = `# Hassan Elsaid - Curriculum Vitae
UI/UX Designer & Front-End Developer

Contact: shadyabdowd2020@gmail.com
LinkedIn: https://linkedin.com/in/hassan-elsaid
GitHub: https://github.com/hassan-elsaid

=========================================

PROFESSIONAL SUMMARY:
Hassan Elsaid is a passionate developer and designer expert in creating modern, elegant, and highly performant digital applications. With deep knowledge in both code and visual aesthetics, he bridges the gap between design requirements and software engineering. He loves translating complex concepts into delightful user experiences.

CORE SKILLS:
- Frontend: HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS
- Design Tools: Figma, Adobe XD
- Core Competencies: UI/UX Design, Front-End Development, Prototyping, Branding
- Soft Skills: Communication, Teamwork, Problem Solving, Adaptability

PROJECTS & ACCOMPLISHMENTS:
1. Creative Portfolio
   - A fully responsive and highly interactive creative developer workspace built with React, Tailwind CSS, and Motion.
2. PayPastel Budgeting App
   - An elegant personal budgeting and digital wallet app interface designed with soft pastel elements and fluid transitions.
3. Nebula SaaS Analytics Dashboard
   - An advanced data dashboard utilizing elegant visual charts and interactive maps.

CERTIFICATIONS:
- Advanced React Developer Certificate (Meta)
- UI/UX Design Masterclass Certificate (Interaction Design Foundation)
- Google Specialist Certification (Google Career Certifications)
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hassan_Elsaid_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShowCV = () => {
    Swal.fire({
      title: '<div class="font-display text-2xl font-black text-neutral-dark tracking-tight">Curriculum Vitae</div>',
      html: `
        <div class="font-sans text-left space-y-4 pt-1">
          <div class="flex items-center gap-3.5 bg-amber-50/25 p-4 rounded-2xl border border-amber-100/30">
            <div class="w-12 h-12 rounded-xl bg-pastel-yellow/30 flex items-center justify-center text-amber-800 shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-sm text-neutral-dark">Hassan_Elsaid_CV.txt</h4>
              <p class="text-xs text-gray-400">Professional Resume Profile</p>
            </div>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed">
            Review Hassan's full professional background, technical competencies, creative projects, and certifications.
          </p>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: '<span class="flex items-center justify-center gap-2"><svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Download CV</span>',
      showCloseButton: true,
      closeButtonHtml: '<span class="text-neutral-dark font-sans font-normal text-xl">&times;</span>',
      customClass: {
        popup: 'rounded-[32px] border border-white/80 shadow-2xl p-6 bg-white max-w-sm',
        confirmButton: 'px-11 py-3 bg-neutral-dark hover:bg-zinc-800 text-white rounded-xl font-bold transition-all duration-300 text-xs uppercase tracking-widest shadow-md focus:outline-none focus:ring-0 flex items-center justify-center gap-2 cursor-pointer',
        actions: 'w-full mt-6 flex justify-center',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDownloadCV();
      }
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 15 } }
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: HERO_DATA.socials.github, label: 'GitHub', hoverBg: 'hover:bg-neutral-dark hover:text-white' },
    { icon: <Linkedin className="w-5 h-5" />, href: HERO_DATA.socials.linkedin, label: 'LinkedIn', hoverBg: 'hover:bg-[#0077b5] hover:text-white' },
    { icon: <Twitter className="w-5 h-5" />, href: HERO_DATA.socials.twitter, label: 'Twitter', hoverBg: 'hover:bg-[#1da1f2] hover:text-white' },
    { icon: <Instagram className="w-5 h-5" />, href: HERO_DATA.socials.instagram, label: 'Instagram', hoverBg: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white' }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-warm-white via-warm-peach/20 to-warm-sand/15"
    >
      {/* Dynamic Background Gradients */}
      <motion.div 
        style={{ y: blob1Y }}
        className="absolute top-12 left-[5%] w-[450px] h-[450px] bg-pastel-pink/25 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div 
        style={{ y: blob2Y }}
        className="absolute bottom-20 right-[5%] w-[500px] h-[500px] bg-pastel-blue/25 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-pastel-yellow/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content Side */}
        <motion.div 
          style={{ y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          {/* Professional Status Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-neutral-dark/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-dark/10 shadow-3xs"
          >
            <User className="w-3.5 h-3.5 text-[#43acff] animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-neutral-dark/80 uppercase">
              UI/UX Designer & Front-End Developer
            </span>
          </motion.div>

          {/* Premium Editorial Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-dark leading-[1.05] mb-1"
          >
            Creating modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-dark via-[#43acff] to-[#89d4fe] font-black">
              digital products.
            </span>
          </motion.h1>

          {/* Bio Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-500/90 max-w-xl font-normal leading-relaxed"
          >
            Hi, I’m <span className="font-bold text-neutral-dark">{HERO_DATA.name}</span>. I design intuitive visual interfaces and build robust, pixel-perfect web systems with clean, interactive frontend engineering.
          </motion.p>

          {/* Premium Social Media Icons bar */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2.5 mt-1"
          >
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/60 backdrop-blur-md text-neutral-dark/70 border border-neutral-dark/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sm hover:border-neutral-dark/20 ${link.hoverBg}`}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* Primary Call-to-Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <button
              onClick={() => onScrollTo('projects')}
              className="group px-6 py-3.5 bg-neutral-dark text-white rounded-xl font-bold hover:bg-neutral-dark/90 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center gap-2 text-xs uppercase tracking-wider shadow-sm"
            >
              <span>Explore My Work</span>
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onScrollTo('contact')}
              className="px-6 py-3.5 bg-white/50 backdrop-blur-md border border-neutral-dark/10 text-neutral-dark/80 rounded-xl font-bold hover:bg-white hover:-translate-y-0.5 hover:text-neutral-dark hover:border-neutral-dark/20 transition-all duration-300 cursor-pointer text-xs uppercase tracking-wider"
            >
              Let's Talk
            </button>
            <button
              onClick={handleShowCV}
              className="px-6 py-3.5 bg-white/50 backdrop-blur-md border border-neutral-dark/10 text-neutral-dark/80 rounded-xl font-bold hover:bg-white hover:-translate-y-0.5 hover:text-neutral-dark hover:border-neutral-dark/20 transition-all duration-300 cursor-pointer text-xs uppercase tracking-wider flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>CV</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Photo Column: Styled High-Fidelity Bento Block */}
        <motion.div 
          style={{ y: avatarY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Aesthetic background halo glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pastel-pink/40 via-pastel-yellow/30 to-pastel-blue/40 rounded-[44px] blur-2xl opacity-50 pointer-events-none transform scale-105"></div>

          {/* Asymmetric Framed Container */}
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 rounded-[40px] p-3.5 bg-white/60 backdrop-blur-md shadow-xl border border-white/80 flex items-center justify-center group overflow-hidden">
            
            {/* Absolute Badges Inside Photo Container */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold text-neutral-dark border border-neutral-dark/5 shadow-xs flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#43acff]" />
              <span className="font-mono uppercase tracking-wider">React & Next.js</span>
            </div>

            <div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold text-neutral-dark border border-neutral-dark/5 shadow-xs flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#f8b2d7]" />
              <span className="font-mono uppercase tracking-wider">UI/UX Craft</span>
            </div>

            {/* Perfect circular inner image mask */}
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-warm-white flex items-center justify-center shadow-inner">
              <img
                src={HERO_DATA.avatarUrl}
                alt={HERO_DATA.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[28px] transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bento Style Key Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HERO_DATA.stats.map((stat, idx) => {
            const glowStyles = [
              'hover:shadow-[0_15px_30px_-10px_rgba(248,178,215,0.4)] hover:border-pink-300/30 hover:bg-pink-50/10',
              'hover:shadow-[0_15px_30px_-10px_rgba(67,172,255,0.4)] hover:border-sky-300/30 hover:bg-sky-50/10',
              'hover:shadow-[0_15px_30px_-10px_rgba(137,212,254,0.4)] hover:border-blue-300/30 hover:bg-blue-50/10'
            ];
            const iconStyles = [
              'bg-pastel-pink text-pink-700',
              'bg-pastel-blue text-[#1894ff]',
              'bg-pastel-yellow text-amber-800'
            ];
            const icons = [
              <Award className="w-5 h-5" />,
              <FolderGit className="w-5 h-5" />,
              <Users className="w-5 h-5" />
            ];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className={`bg-white/50 backdrop-blur-xl rounded-2xl p-6 flex items-center justify-between border border-white/50 shadow-3xs transition-all duration-300 cursor-default ${glowStyles[idx]}`}
              >
                <div>
                  <h3 className="font-display text-4xl font-extrabold tracking-tight text-neutral-dark mb-0.5">
                    {stat.value}
                  </h3>
                  <p className="font-mono text-[10px] text-gray-400 tracking-widest uppercase font-semibold">
                    {stat.label}
                  </p>
                </div>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border border-white/40 shadow-3xs shrink-0 ${iconStyles[idx]}`}>
                  {icons[idx]}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Animated Wave Divider at the bottom - High Fidelity & Ultra Professional */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[90px]"
          style={{ minWidth: '100%' }}
        >
          <style>{`
            @keyframes gentle-wave-1 {
              0% { transform: translate3d(-400px, 0, 0); }
              100% { transform: translate3d(0, 0, 0); }
            }
            @keyframes gentle-wave-2 {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-300px, 0, 0); }
            }
            @keyframes gentle-wave-3 {
              0% { transform: translate3d(-500px, 0, 0); }
              100% { transform: translate3d(0, 0, 0); }
            }
            .smooth-wave-1 {
              animation: gentle-wave-1 22s linear infinite;
              will-change: transform;
            }
            .smooth-wave-2 {
              animation: gentle-wave-2 18s linear infinite;
              will-change: transform;
            }
            .smooth-wave-3 {
              animation: gentle-wave-3 14s linear infinite;
              will-change: transform;
            }
          `}</style>
          
          {/* Back Wave (Lowest Opacity - highly translucent, beautiful overlap) */}
          <path 
            className="smooth-wave-1 fill-[#ffffff]"
            opacity="0.30"
            d="M -800 60 Q -700 30, -600 60 T -400 60 T 0 60 T 400 60 T 800 60 T 1200 60 T 1600 60 L 1600 120 L -800 120 Z"
          />

          {/* Middle Wave (Medium Opacity) */}
          <path 
            className="smooth-wave-2 fill-[#ffffff]"
            opacity="0.65"
            d="M -900 75 Q -825 55, -750 75 T -600 75 T -300 75 T 0 75 T 300 75 T 600 75 T 900 75 T 1200 75 T 1500 75 T 1800 75 L 1800 120 L -900 120 Z"
          />
          
          {/* Front Wave (Solid, matching next section bg color #ffffff perfectly) */}
          <path 
            className="smooth-wave-3 fill-[#ffffff]"
            d="M -1000 85 Q -875 60, -750 85 T -500 85 T 0 85 T 500 85 T 1000 85 T 1500 85 T 2000 85 L 2000 120 L -1000 120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
