import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type LeetCodeStats = {
  total: number;
  easy: number;
  medium: number;
  hard: number;
};

const initialLeetCodeStats: LeetCodeStats = { total: 112, easy: 73, medium: 37, hard: 2 };

type CodingProfileStats = {
  leetcode: LeetCodeStats;
  codechef: number;
  geeksforgeeks: number;
};

const initialCodingProfileStats: CodingProfileStats = {
  leetcode: initialLeetCodeStats,
  codechef: 326,
  geeksforgeeks: 40,
};

const LeetCodeProfile = ({ stats }: { stats: LeetCodeStats }) => {
  return (
    <a
      href="https://leetcode.com/u/anshuxdev/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-surface group block rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1"
      aria-label="View Anshuman Palai's LeetCode profile"
    >
      <div>
        <div>
          <p className="text-lg font-semibold text-white">LeetCode</p>
          <p className="mt-1 text-sm text-zinc-400">@anshuxdev <span className="text-zinc-600">↗</span></p>
        </div>
      </div>
      <div className="mt-7">
        <p className="text-4xl font-display font-semibold tracking-tight text-white">{stats.total}</p>
        <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">Problems solved</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-zinc-400">
          <span><b className="font-medium text-emerald-300">{stats.easy}</b> Easy</span>
          <span><b className="font-medium text-amber-300">{stats.medium}</b> Med.</span>
          <span><b className="font-medium text-rose-300">{stats.hard}</b> Hard</span>
        </div>
      </div>
    </a>
  );
};

const CodingProfiles = () => {
  const [stats, setStats] = useState<CodingProfileStats>(initialCodingProfileStats);

  useEffect(() => {
    const controller = new AbortController();

    const loadStats = async () => {
      try {
        const response = await fetch('/api/coding-profiles', { signal: controller.signal });

        if (!response.ok) return;
        const result = await response.json() as CodingProfileStats;
        setStats(result);
      } catch {
        // Last verified counts remain visible if a platform is temporarily unavailable.
      }
    };

    loadStats();
    return () => controller.abort();
  }, []);

  return <>
    <LeetCodeProfile stats={stats.leetcode} />
    <CodeChefProfile solved={stats.codechef} />
    <GeeksforGeeksProfile solved={stats.geeksforgeeks} />
  </>;
};

const CodeChefProfile = ({ solved }: { solved: number }) => (
  <a
    href="https://www.codechef.com/users/anshuxdev"
    target="_blank"
    rel="noopener noreferrer"
    className="glass-surface group block rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1"
    aria-label="View Anshuman Palai's CodeChef profile"
  >
    <div>
      <div>
        <p className="text-lg font-semibold text-white">CodeChef</p>
        <p className="mt-1 text-sm text-zinc-400">@anshuxdev <span className="text-zinc-600">↗</span></p>
      </div>
    </div>
    <div className="mt-7">
      <p className="text-4xl font-display font-semibold tracking-tight text-white">{solved}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">Problems solved</p>
    </div>
  </a>
);

const GeeksforGeeksProfile = ({ solved }: { solved: number }) => (
  <a href="https://www.geeksforgeeks.org/profile/anshuxdev" target="_blank" rel="noopener noreferrer" className="glass-surface group block rounded-xl p-5 transition-transform duration-300 hover:-translate-y-1" aria-label="View Anshuman Palai's GeeksforGeeks profile">
    <div><p className="text-lg font-semibold text-white">GeeksforGeeks</p><p className="mt-1 text-sm text-zinc-400">@anshuxdev <span className="text-zinc-600">↗</span></p></div>
    <div className="mt-7"><p className="text-4xl font-display font-semibold tracking-tight text-white">{solved}</p><p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">Problems solved</p></div>
  </a>
);

const education = [
  {
    institution: 'Chandigarh University',
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    period: '2022 — 2026',
    location: 'Punjab, India',
    details:
      'Core focus on Computer Systems, Data Structures & Algorithms, Database Systems, Web Architectures, and Software Engineering.',
  },
];

const focusAreas = [
  {
    role: 'Full-Stack Web Development',
    period: 'Present',
    desc: 'Building responsive, accessible web applications with React, TypeScript, Node.js, and modern styling libraries.',
  },
  {
    role: 'Backend & Systems Exploration',
    period: 'Present',
    desc: 'Designing REST APIs with Node.js and Spring Boot, real-time WebSocket communication, database schemas, and exploring distributed system concepts.',
  },
  {
    role: 'Visual Storytelling & Digital Media',
    period: 'Ongoing',
    desc: 'Filmmaking, cinematic camera work, video editing, color grading, and exploring the intersection of creative media with web design.',
  },
];

const skillCategories = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML5 / CSS3'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Responsive UI'],
  },
  {
    category: 'Backend & Databases',
    items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis (Caching)', 'REST APIs'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git & GitHub', 'Docker', 'Postman', 'VS Code'],
  },
];

export const About = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-16 pt-32 pb-16 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[0.98]">
          Building software, systems &{' '}
          <span className="font-serif italic font-normal text-zinc-400">solving problems.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          I'm Anshuman Palai — a software engineer and Computer Science student at Chandigarh University,
          passionate about crafting clean web applications and digital media.
        </p>
      </section>

      {/* Bio / Background */}
      <section className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 border-t border-zinc-900 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              Background
            </span>
          </div>
          <div className="lg:col-span-8 space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed">
            <p>
              I build things for the web, with a focus on clean interfaces, thoughtful functionality, and solving real problems through code.
            </p>
            <p>
              From crafting responsive frontend experiences with React to developing backend systems with Java and Spring Boot, I enjoy understanding the complete journey of an idea, from concept to implementation.
            </p>
            <p>
              Currently exploring full-stack engineering, sharpening my problem-solving skills, and building projects that reflect my approach to software development.
            </p>
            <p className="text-sm text-zinc-500">
              Open to software engineering internships and meaningful collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 border-t border-zinc-900 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              Education
            </span>
          </div>
          <div className="lg:col-span-8 space-y-8">
            {education.map((item) => (
              <div key={item.institution} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-display font-semibold text-white">
                    {item.institution}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">{item.period}</span>
                </div>
                <div className="text-sm text-zinc-400 font-medium">{item.degree}</div>
                <div className="text-xs text-zinc-600">{item.location}</div>
                <p className="text-sm text-zinc-400/90 leading-relaxed pt-1">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus & Experience */}
      <section className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 border-t border-zinc-900 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              Focus Areas
            </span>
          </div>
          <div className="lg:col-span-8 divide-y divide-zinc-800/50">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="py-6 first:pt-0 last:pb-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-zinc-200">{area.role}</span>
                  <span className="text-xs text-zinc-600 font-mono">{area.period}</span>
                </div>
                <p className="text-sm text-zinc-400/90 mt-2 leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles */}
      <section className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 border-t border-zinc-900 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              Coding Profiles
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              Public progress, synced whenever this page is opened.
            </p>
          </div>
          <div className="lg:col-span-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <CodingProfiles />
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 border-t border-zinc-900 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              Technical Stack
            </span>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((group) => (
              <div key={group.category} className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-zinc-900/80 text-zinc-300 border border-zinc-800/60 font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-16 py-12 lg:py-16 border-t border-zinc-900 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              Get in Touch
            </span>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Whether you have an opportunity, a question about my work, or just want to connect, feel free to reach out.
            </p>
            <div>
              <a
                href="mailto:mrgameryt9050@gmail.com"
                className="text-lg md:text-xl font-display text-white hover:text-zinc-300 transition-colors inline-block"
              >
                mrgameryt9050@gmail.com ↗
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-2">
              <a
                href="https://github.com/anshumanpalai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/anshuxdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
