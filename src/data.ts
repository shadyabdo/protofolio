import { Project, Service, Skill, Certificate } from './types';

export const HERO_DATA = {
  name: 'Hassan Elsaid',
  title: 'Hassan Elsaid',
  role: 'UI/UX Designer & Front-End Developer',
  tagline: 'crafting digital experiences.',
  bio: 'Hassan Elsaid is a passionate developer and designer expert in creating modern, elegant, and highly performant digital applications. With deep knowledge in both code and visual aesthetics, he bridges the gap between design requirements and software engineering. He loves translating complex concepts into delightful user experiences.',
  avatarUrl: '/src/assets/images/hassan_avatar_1784120839322.jpg',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '15+' }
  ],
  socials: {
    linkedin: '#',
    github: '#',
    twitter: '#',
    instagram: '#'
  }
};

export const SKILLS: Skill[] = [
  // Tech Stack
  { name: 'HTML', category: 'tech', colorClass: 'bg-rose-100 text-rose-700 border-rose-200' },
  { name: 'CSS', category: 'tech', colorClass: 'bg-blue-100 text-blue-700 border-blue-200' },
  { name: 'JavaScript', category: 'tech', colorClass: 'bg-amber-100 text-amber-700 border-amber-200' },
  { name: 'React', category: 'tech', colorClass: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
  { name: 'Figma', category: 'tech', colorClass: 'bg-purple-100 text-purple-700 border-purple-200' },
  { name: 'Adobe XD', category: 'tech', colorClass: 'bg-pink-100 text-pink-700 border-pink-200' },
  { name: 'TypeScript', category: 'tech', colorClass: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { name: 'Tailwind CSS', category: 'tech', colorClass: 'bg-sky-100 text-sky-700 border-sky-200' },
  
  // Soft Skills
  { name: 'Communication', category: 'soft', colorClass: 'bg-teal-100 text-teal-700 border-teal-200' },
  { name: 'Teamwork', category: 'soft', colorClass: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { name: 'Problem Solving', category: 'soft', colorClass: 'bg-orange-100 text-orange-700 border-orange-200' },
  { name: 'Adaptability', category: 'soft', colorClass: 'bg-violet-100 text-violet-700 border-violet-200' }
];

export const SERVICES: Service[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Design comprehensive, highly user-centered interface mockups and layouts built upon core ergonomic principles.',
    iconName: 'Layout',
    bgColorClass: 'bg-pink-50 hover:bg-pink-100/70 border-pink-100 text-pink-600',
    iconColorClass: 'text-pink-500'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Developing highly interactive web interfaces and websites with clean, structured, responsive code structures.',
    iconName: 'Code',
    bgColorClass: 'bg-blue-50 hover:bg-blue-100/70 border-blue-100 text-blue-600',
    iconColorClass: 'text-blue-500'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Design',
    description: 'Crafting user-friendly mobile application designs customized to deliver an optimal experience on smart devices.',
    iconName: 'Smartphone',
    bgColorClass: 'bg-emerald-50 hover:bg-emerald-100/70 border-emerald-100 text-emerald-600',
    iconColorClass: 'text-emerald-500'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Forming modern corporate identities and creative visual assets tailored to establish premium brands.',
    iconName: 'Lightbulb',
    bgColorClass: 'bg-amber-50 hover:bg-amber-100/70 border-amber-100 text-amber-600',
    iconColorClass: 'text-amber-500'
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    description: 'Building interactive and clickable app workflows to thoroughly test visual structures and layouts.',
    iconName: 'Layers',
    bgColorClass: 'bg-violet-50 hover:bg-violet-100/70 border-violet-100 text-violet-600',
    iconColorClass: 'text-violet-500'
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Providing professional advice regarding digital user experiences and software product design structures.',
    iconName: 'MessageSquare',
    bgColorClass: 'bg-teal-50 hover:bg-teal-100/70 border-teal-100 text-teal-600',
    iconColorClass: 'text-teal-500'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Creative Portfolio',
    category: 'Web Development',
    description: 'A fully responsive and highly interactive creative developer workspace built with React, Tailwind CSS, and Motion, featuring beautiful pastel tones and glassmorphism cards.',
    imageUrl: '/src/assets/images/hassan_avatar_1784120839322.jpg',
    tags: ['React', 'Tailwind', 'Motion', 'Vite'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-2',
    title: 'PayPastel Budgeting App',
    category: 'Mobile App Design',
    description: 'An elegant personal budgeting and digital wallet app interface designed with soft pastel elements and fluid transitions to help users manage assets effortlessly.',
    imageUrl: '/src/assets/images/hassan_avatar_1784120839322.jpg',
    tags: ['Figma', 'UI/UX Design', 'Mobile', 'Prototyping'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-3',
    title: 'Premium Brand Experience',
    category: 'Branding',
    description: 'A complete modern corporate brand identity overhaul including visual patterns, custom vector iconography, and typography guides designed for an eco-friendly tech client.',
    imageUrl: '/src/assets/images/hassan_avatar_1784120839322.jpg',
    tags: ['Illustrator', 'Adobe XD', 'Creative Direction'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-4',
    title: 'TypeSync Code Editor',
    category: 'Web Development',
    description: 'A web-based collaborative code editing interface with live compilation preview, real-time sync capabilities, and developer-centric syntax styling themes.',
    imageUrl: '/src/assets/images/hassan_avatar_1784120839322.jpg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Monaco'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-5',
    title: 'Nebula SaaS Analytics Dashboard',
    category: 'UI/UX Design',
    description: 'An advanced data dashboard utilizing elegant visual charts and interactive maps to offer deep insights into user metrics, subscription sales, and server loads.',
    imageUrl: '/src/assets/images/hassan_avatar_1784120839322.jpg',
    tags: ['React', 'Recharts', 'Tailwind', 'UX Design'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'proj-6',
    title: 'VibeCheck Social Planner',
    category: 'Mobile App Design',
    description: 'A comprehensive mobile planning tool featuring drag-and-drop editorial calendars, performance statistics, and AI caption writing assistants for social media managers.',
    imageUrl: '/src/assets/images/hassan_avatar_1784120839322.jpg',
    tags: ['Figma', 'Mobile Design', 'UI/UX'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Advanced React Developer Certificate',
    issuer: 'Meta Developer Academies',
    date: 'Dec 2025',
    imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'cert-2',
    title: 'UI/UX Design Masterclass Certificate',
    issuer: 'Interaction Design Foundation',
    date: 'Aug 2025',
    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'cert-3',
    title: 'Frontend Specialist Certification',
    issuer: 'Google Career Certifications',
    date: 'May 2025',
    imageUrl: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=400&auto=format&fit=crop'
  }
];
