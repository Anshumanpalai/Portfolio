import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectMockup } from '../components/ProjectMockup';
import { PROJECTS } from '../data/projectsData';

const riseIn = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = 'mrgameryt9050@gmail.com';

  const handleContact = () => {
    // 1. Copy email to clipboard reliably
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    // 2. Open Gmail compose directly in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank', 'noopener,noreferrer');
  };

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
              <Link
                to="/projects"
                className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors group flex items-center gap-1 font-mono"
              >
                <span>View all details</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          <div className="space-y-10 sm:space-y-14">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                variants={riseIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group relative rounded-2xl sm:rounded-3xl md:rounded-[28px] border border-zinc-800 bg-[#161619] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
                  {/* Top Header matching reference image */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-sans">
                        <span className="text-zinc-300 font-medium">{project.category || 'Web App'}</span>, '{project.year ? project.year.slice(2) : '26'} — {project.subtitle || project.description}
                      </p>
                    </div>
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl sm:text-3xl font-light text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 inline-block"
                      aria-label={`Open ${project.title}`}
                      title={project.live ? "Open Live App" : "View Code"}
                    >
                      →
                    </a>
                  </div>

                  {/* Browser Mockup interface */}
                  <div className="mt-6 sm:mt-8">
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                    >
                      <ProjectMockup type={project.mockup} />
                    </a>
                  </div>

                  {/* Bottom details: tech stack & quick links */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 font-medium"
                        >
                          <span>Live App</span>
                          <span>↗</span>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          <div className="flex flex-col items-center">
            <button
              type="button"
              onClick={handleContact}
              className={`relative inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full border text-sm font-medium transition-all duration-300 shadow-xl cursor-pointer ${
                copied
                  ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                  : 'border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white'
              }`}
            >
              {copied ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <span>Get in Touch</span>
                  <span className="text-zinc-500 font-mono text-xs">↗</span>
                </>
              )}
            </button>

            {/* Direct fallback links for seamless accessibility */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500">
              <a
                href={`mailto:${email}`}
                className="font-mono text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
              >
                {email}
              </a>
              <span>•</span>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300 transition-colors"
              >
                Open in Gmail ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
