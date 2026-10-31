import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectMockup } from '../components/ProjectMockup';
import { PROJECTS } from '../data/projectsData';

const riseIn = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export const Home = () => {
  return (
    <div className="relative">
      {/* Ambient bloom — kept outside the window so it softly lifts the page. */}
      <div aria-hidden="true" className="hero-page-bloom" />

      {/* Hero Section — Iconic macOS / Browser Window */}
      <section className="min-h-[92vh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-28 pb-16">
        <motion.div
          className="hero-window relative max-w-5xl w-full mx-auto rounded-2xl border border-white/25 bg-[#09090b] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.95)] overflow-hidden"
          initial={{ opacity: 0, y: 34, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* Top Bar — Sleek macOS Window Bezel with Specular Glow */}
          <div className="relative h-11 flex items-center px-4 bg-[linear-gradient(105deg,rgba(69,70,76,.95),rgba(195,195,198,.86)_30%,rgba(111,112,118,.88)_67%,rgba(57,58,63,.93))] border-b border-white/20">
            {/* Top specular reflection edge with subtle white/silver glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/30 via-white/40 to-white/10 pointer-events-none" />
            <div className="absolute top-0 left-6 w-36 h-[2px] bg-white/40 blur-[1px] pointer-events-none" />

            {/* Ambient colored glow reflection behind the controls */}
            <div 
              aria-hidden="true" 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-28 h-7 bg-gradient-to-r from-red-500/35 via-amber-500/25 to-emerald-500/25 blur-md pointer-events-none rounded-full" 
            />

            {/* macOS traffic light controls with vivid neon glow */}
            <div className="relative flex items-center gap-2 group/dots cursor-pointer">
              <span className="window-control window-control-close w-3 h-3 rounded-full border border-black/20" title="Close" />
              <span className="window-control window-control-minimize w-3 h-3 rounded-full border border-black/20" title="Minimize" />
              <span className="window-control window-control-expand w-3 h-3 rounded-full border border-black/20" title="Expand" />
            </div>

            {/* Decorative dummy '+' control — fully non-interactive */}
            <div 
              aria-hidden="true" 
              className="ml-auto text-zinc-500/80 select-none pointer-events-none pr-1 flex items-center justify-center"
            >
              <svg 
                className="w-4 h-4 stroke-current stroke-[1.75]" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 3.5V12.5M3.5 8H12.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Content Area */}
          <div className="hero-content relative isolate px-6 sm:px-10 md:px-16 lg:px-20 py-14 sm:py-20 md:py-24 bg-gradient-to-b from-[#111114] via-[#09090b] to-[#040404]">
            {/* Layered, low-opacity lights give the type its halo without affecting readability. */}
            <div aria-hidden="true" className="hero-spotlight" />
            <div aria-hidden="true" className="hero-orb hero-orb-one" />
            <div aria-hidden="true" className="hero-orb hero-orb-two" />

            <motion.h1
              className="hero-title relative z-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.98] text-white"
              variants={riseIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.23, ease: [0.22, 1, 0.36, 1] }}
            >
              Full-Stack Developer
              <br />
              &{' '}
              <span className="hero-italic font-serif italic font-normal bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                problem solver.
              </span>
            </motion.h1>

            {/* Right-aligned authentic bio */}
            <motion.div
              className="relative z-10 mt-12 sm:mt-16 md:mt-20 text-right space-y-1"
              variants={riseIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm sm:text-base text-zinc-300 font-normal">
                Software Engineer & CSE Student at Chandigarh University.
              </p>
              <p className="text-xs sm:text-sm text-zinc-500">
                Based in Chandigarh, India.
              </p>
            </motion.div>

            {/* Centered animated down arrow scrolling to projects */}
            <motion.div
              className="relative z-10 mt-14 sm:mt-20 flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            >
              <a
                href="#work"
                aria-label="Scroll to projects"
                className="text-zinc-600 hover:text-zinc-400 transition-colors text-2xl font-light"
              >
                ↓
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Selected Projects / Work Section */}
      <section id="work" className="px-4 sm:px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="flex items-center justify-between mb-12 md:mb-16"
            variants={riseIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="text-xs sm:text-sm text-zinc-500 uppercase tracking-widest font-mono">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white mt-1">
                Featured Projects
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={PROJECTS[0]?.live || 'https://careerpilot-ai-psi-eight.vercel.app'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 font-mono font-medium"
              >
                <span>Live App</span>
                <span>↗</span>
              </a>
              <Link
                to="/projects"
                className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors group flex items-center gap-1 font-mono"
              >
                <span>View details</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          {PROJECTS.slice(0, 1).map((project) => (
            <motion.div
              key={project.title}
              variants={riseIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
            <Link to="/projects" className="glass-surface project-card-interactive group block overflow-hidden rounded-2xl p-3 sm:p-5 shadow-[0_24px_70px_rgba(0,0,0,.35)] cursor-pointer">
              <div className="relative overflow-hidden rounded-xl px-5 pt-6 sm:px-8 sm:pt-9 bg-[radial-gradient(ellipse_at_65%_0%,rgba(129,140,248,.30),transparent_52%),linear-gradient(135deg,#151720,#101115)]">
                {/* Background aurora bloom on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 bg-[radial-gradient(ellipse_at_70%_0%,rgba(196,181,253,.22),transparent_55%)] pointer-events-none" />
                
                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                      <span className="font-medium text-zinc-200">{project.year}</span> — {project.description}
                    </p>
                  </div>
                  <span className="mt-0.5 text-3xl sm:text-4xl font-light text-zinc-300 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:-translate-y-0.5 group-hover:text-white inline-block">
                    →
                  </span>
                </div>
                
                <div className="relative mt-7 sm:mt-10 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <ProjectMockup type={project.mockup} />
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Contact CTA */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-24 md:py-32 text-center border-t border-zinc-900">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
            Have a project or idea?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed">
            I'm always interested in building scalable software, learning new tools, and collaborating on meaningful ideas.
          </p>
          <a
            href="mailto:mrgameryt9050@gmail.com"
            className="inline-block mt-8 px-8 py-3.5 rounded-full border border-zinc-700 bg-zinc-900/60 text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all duration-300 shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
