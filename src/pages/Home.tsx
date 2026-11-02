import React from 'react';
import { motion } from 'framer-motion';
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

      {/* Hero Section — Dual-Layer Window Architecture (Perry Wang 2023) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 pt-28 pb-10">
        <motion.div
          className="container-hero-image relative max-w-[1240px] w-full mx-auto"
          initial={{ opacity: 0, y: 34, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Specular hairline top glare */}
          <div className="glare-item-top outer-edge" />

          {/* Outer Window Frame */}
          <div className="window-outline">
            <div className="glare-item-top inner-edge" />
            
            {/* Inner Window Main */}
            <div className="window-main">
              {/* Window Bar Header */}
              <div className="window-bar">
                <div className="relative flex items-center gap-2.5 group/dots cursor-pointer">
                  <span className="window-control window-control-close w-3.5 h-3.5 rounded-full border border-black/20" title="Close" />
                  <span className="window-control window-control-minimize w-3.5 h-3.5 rounded-full border border-black/20" title="Minimize" />
                  <span className="window-control window-control-expand w-3.5 h-3.5 rounded-full border border-black/20" title="Expand" />
                </div>
                <div className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-default pr-1 flex items-center justify-center select-none">
                  <svg className="w-4 h-4 stroke-current stroke-[1.75]" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.5V12.5M3.5 8H12.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Window Content — Expansive height and grand typography */}
              <div className="window-content relative isolate px-8 sm:px-14 md:px-20 lg:px-24 py-20 sm:py-28 md:py-36 min-h-[560px] sm:min-h-[620px] md:min-h-[680px] flex flex-col justify-between bg-[#101010b3]">
                <div aria-hidden="true" className="hero-spotlight" />
                <div aria-hidden="true" className="hero-orb hero-orb-one" />
                <div aria-hidden="true" className="hero-orb hero-orb-two" />

                <motion.h1
                  className="text-hero relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] font-display font-medium tracking-tight leading-[0.92]"
                  variants={riseIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8, delay: 0.23, ease: [0.22, 1, 0.36, 1] }}
                >
                  I craft software,
                  <br />
                  systems &amp;{' '}
                  <span className="text-hero-serif">
                    stories.
                  </span>
                </motion.h1>

                {/* Perry Wang two-column about grid */}
                <div className="hero-about-grid relative z-10 grid grid-cols-1 sm:grid-cols-2 items-end mt-20 sm:mt-28 md:mt-36">
                  <div className="hidden sm:block" />
                  <div className="text-right space-y-1.5">
                    <p className="text-base sm:text-lg md:text-xl text-[#f2f2f2] font-medium leading-relaxed font-sans">
                      Software Engineer &amp; CSE Student at Chandigarh University.
                    </p>
                    <p className="text-xs sm:text-sm text-[#f2f2f280] font-normal font-sans">
                      Based in Chandigarh, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Centered animated down arrow outside the window scrolling to projects */}
        <motion.div
          className="relative z-10 mt-12 sm:mt-16 flex justify-center"
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

                {/* Top Header matching Perry Wang Stadia Bluetooth card */}
                <div className="relative z-10 flex items-start justify-between gap-4 mb-6 sm:mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#f2f2f2] tracking-tight">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-[#f2f2f280] font-sans max-w-3xl leading-relaxed">
                      <span className="text-[#f2f2f2cc] font-medium">
                        {project.category || 'Web App'}, '{project.year ? project.year.slice(2) : '26'}
                      </span>{' '}
                      — {project.subtitle || project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                        aria-label={`Source code for ${project.title}`}
                        title="View Source Code"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
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
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
