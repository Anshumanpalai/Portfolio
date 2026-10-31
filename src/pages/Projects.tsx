import React from 'react';
import { motion } from 'framer-motion';
import { ProjectMockup } from '../components/ProjectMockup';
import { PROJECTS } from '../data/projectsData';

export const Projects = () => {
  return (
    <div className="min-h-screen text-white">
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-28">
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

        <div className="mt-14 grid gap-6">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-surface project-card-interactive group overflow-hidden rounded-2xl p-3 sm:p-5 shadow-[0_24px_70px_rgba(0,0,0,.35)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-xl px-5 pt-6 sm:px-8 sm:pt-9 bg-[radial-gradient(ellipse_at_65%_0%,rgba(129,140,248,.30),transparent_52%),linear-gradient(135deg,#151720,#101115)]">
                <div>
                  <div className="flex items-start justify-between gap-5">
                    <div><h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white">{project.title}</h2><p className="mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400"><span className="font-medium text-zinc-200">{project.year}</span> — {project.description}</p></div>
                    <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live application`} className="text-3xl sm:text-4xl font-light text-zinc-300 transition-all duration-300 ease-out hover:translate-x-1.5 hover:-translate-y-0.5 hover:text-white" title={project.live ? "Live Preview" : "View Source"}>↗</a>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                    {project.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span className="text-indigo-300">✦</span>{highlight}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => <span key={item} className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] text-zinc-400">{item}</span>)}
                  </div>
                  <div className="mt-6 flex items-center gap-5">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
                        Live Preview <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                      Source Code <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
                <div className="mt-7 sm:mt-10"><ProjectMockup type={project.mockup} /></div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
