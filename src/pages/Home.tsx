import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

      {/* Hero Section — Dual-Layer Window Architecture (Perry Wang 2023) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 pt-28 pb-12">
        <motion.div
          className="container-hero-image relative max-w-[1180px] xl:max-w-[1240px] w-full mx-auto"
          initial={{ opacity: 0, y: 34, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Specular hairline top glare */}
          <div className="glare-item-top outer-edge" />

          {/* Outer Window Frame with double-layer border */}
          <div className="window-outline">
            <div className="glare-item-top inner-edge" />
            
            {/* Inner Window Main */}
            <div className="window-main">
              {/* Window Bar Header / Toolbar */}
              <div className="window-bar">
                {/* Three circular window controls on left */}
                <div className="relative flex items-center gap-2 sm:gap-2.5 group/dots cursor-pointer">
                  <span className="window-control window-control-close w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-black/20" title="Close" />
                  <span className="window-control window-control-minimize w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-black/20" title="Minimize" />
                  <span className="window-control window-control-expand w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-black/20" title="Expand" />
                </div>

                {/* Subtle plus (+) icon on the right */}
                <div className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-default pr-1 flex items-center justify-center select-none" title="New Tab">
                  <svg className="w-4 h-4 stroke-current stroke-[1.75]" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.5V12.5M3.5 8H12.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Window Content */}
              <div className="window-content relative isolate px-8 sm:px-14 md:px-20 lg:px-24 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 min-h-[560px] sm:min-h-[620px] md:min-h-[660px] flex flex-col justify-between bg-[#101010]">
                {/* Soft ambient radial lighting behind heading */}
                <div aria-hidden="true" className="hero-spotlight" />
                <div aria-hidden="true" className="hero-orb hero-orb-one" />
                <div aria-hidden="true" className="hero-orb hero-orb-two" />

                {/* Hero Typography — large lightweight modern sans-serif */}
                <motion.h1
                  className="text-hero-heading relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem] font-sans font-normal tracking-[-0.035em] leading-[0.92] text-[#f2f2f2]"
                  variants={riseIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8, delay: 0.23, ease: [0.22, 1, 0.36, 1] }}
                >
                  I craft products,
                  <br />
                  interactions &amp;{' '}
                  <span className="hero-serif-italic">
                    stories.
                  </span>
                </motion.h1>

                {/* Supporting Information — lower-right */}
                <div className="hero-about-grid relative z-10 grid grid-cols-1 sm:grid-cols-2 items-end mt-16 sm:mt-24 md:mt-32">
                  <div className="hidden sm:block" />
                  <div className="text-right space-y-1">
                    <p className="text-base sm:text-lg md:text-xl text-[#f2f2f2] font-medium leading-relaxed font-sans">
                      Software Engineer &amp; CSE Student at Chandigarh University.
                    </p>
                    <p className="text-xs sm:text-sm text-[#f2f2f280] font-normal font-sans">
                      Based in Chandigarh, India.
                    </p>
                  </div>
                </div>

                {/* Minimal downward arrow near bottom-center of the browser window */}
                <motion.div
                  className="absolute bottom-5 sm:bottom-6 md:bottom-7 left-1/2 -translate-x-1/2 z-10 flex justify-center"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                >
                  <a
                    href="#work"
                    aria-label="Scroll to projects"
                    className="text-zinc-600 hover:text-zinc-400 transition-colors text-xl sm:text-2xl font-light select-none cursor-pointer"
                  >
                    ↓
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section — directly flowing underneath down arrow with Perry Wang dual-card */}
      <section id="work" className="px-4 sm:px-6 md:px-10 lg:px-12 pt-4 pb-24 md:pb-32">
        <div className="max-w-[1240px] w-full mx-auto space-y-16 sm:space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              variants={riseIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="project-card-outline group"
            >
              <div className="glare-item-top outer-edge" />
              <div className="project-card">
                <div className="glare-item-top inner-edge" />
                <div className={`project-card-colour ${index === 0 ? 'blue' : 'purple'}`} />

                {/* Top Header */}
                <div className="relative z-10 flex items-start justify-between gap-4 mb-6 sm:mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#f2f2f2] tracking-tight">
                      {project.title}
                    </h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#f2f2f280] font-sans max-w-2xl leading-relaxed">
                      <span className="text-[#f2f2f2cc] font-medium">
                        {project.category || 'Web App'}, '{project.year ? project.year.slice(2) : '26'}
                      </span>{' '}
                      — {project.subtitle || project.description}
                    </p>
                  </div>
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl font-light text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 inline-block p-1"
                    aria-label={`Open ${project.title}`}
                    title={project.live ? "Open Live App" : "View Code"}
                  >
                    →
                  </a>
                </div>

                {/* Browser Mockup interface */}
                <div className="relative z-10">
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <ProjectMockup type={project.mockup} />
                  </a>
                </div>

                {/* Architectural Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="relative z-10 mt-8 pt-6 border-t border-zinc-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                      Key Engineering Highlights
                    </span>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-zinc-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5">
                          <span className="text-indigo-400 text-xs mt-0.5">✦</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Bottom details: tech stack & quick links */}
                <div className="relative z-10 mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 text-xs font-mono">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 font-medium"
                      >
                        <span>Live Preview</span>
                        <span>↗</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>Source Code</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
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
