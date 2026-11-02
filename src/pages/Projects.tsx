import React from 'react';
import { motion } from 'framer-motion';
import { ProjectMockup } from '../components/ProjectMockup';
import { PROJECTS } from '../data/projectsData';

export const Projects = () => {
  return (
    <div className="min-h-screen text-white">
      <section className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-28">
        <motion.span
          className="text-xs text-zinc-500 uppercase tracking-widest font-mono"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Portfolio
        </motion.span>
        <motion.h1
          className="mt-1 text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="mt-4 max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}
        >
          A selection of products I’m building at the intersection of thoughtful interfaces and dependable engineering.
        </motion.p>

        <div className="mt-14 space-y-10 sm:space-y-14">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative rounded-2xl sm:rounded-3xl md:rounded-[28px] border border-zinc-800 bg-[#161619] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top Header matching reference image */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl leading-relaxed">
                    <span className="text-zinc-300 font-medium">{project.category || 'Web App'}</span>, '{project.year ? project.year.slice(2) : '26'} — {project.subtitle || project.description}
                  </p>
                </div>
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl font-light text-zinc-400 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 inline-block"
                  aria-label={`View ${project.title}`}
                  title={project.live ? "Open Live Preview" : "View Source"}
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

              {/* Architectural Highlights */}
              <div className="mt-8 pt-6 border-t border-zinc-800/80">
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

              {/* Bottom bar: Tech badges and actions */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-mono text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5 text-xs font-mono">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                    >
                      <span>Live Preview</span>
                      <span>↗</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    <span>Source Code</span>
                    <span>↗</span>
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

export default Projects;
